# `googleComputeRegionSecurityPolicyRule` Submodule <a name="`googleComputeRegionSecurityPolicyRule` Submodule" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionSecurityPolicyRule <a name="GoogleComputeRegionSecurityPolicyRule" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule google_compute_region_security_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule(
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
  priority: typing.Union[int, float],
  region: str,
  security_policy: str,
  description: str = None,
  id: str = None,
  match: GoogleComputeRegionSecurityPolicyRuleMatch = None,
  network_match: GoogleComputeRegionSecurityPolicyRuleNetworkMatch = None,
  preconfigured_waf_config: GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfig = None,
  preview: typing.Union[bool, IResolvable] = None,
  project: str = None,
  rate_limit_options: GoogleComputeRegionSecurityPolicyRuleRateLimitOptions = None,
  timeouts: GoogleComputeRegionSecurityPolicyRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.action">action</a></code> | <code>str</code> | The Action to perform when the rule is matched. The following are the valid actions:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.region">region</a></code> | <code>str</code> | The Region in which the created Region Security Policy rule should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.securityPolicy">security_policy</a></code> | <code>str</code> | The name of the security policy this rule belongs to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#id GoogleComputeRegionSecurityPolicyRule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.match">match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatch">GoogleComputeRegionSecurityPolicyRuleMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.networkMatch">network_match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch">GoogleComputeRegionSecurityPolicyRuleNetworkMatch</a></code> | network_match block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.preconfiguredWafConfig">preconfigured_waf_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfig">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfig</a></code> | preconfigured_waf_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.preview">preview</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, the specified action is not enforced. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#project GoogleComputeRegionSecurityPolicyRule#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.rateLimitOptions">rate_limit_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptions">GoogleComputeRegionSecurityPolicyRuleRateLimitOptions</a></code> | rate_limit_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeouts">GoogleComputeRegionSecurityPolicyRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.action"></a>

- *Type:* str

The Action to perform when the rule is matched. The following are the valid actions:.

* allow: allow access to target.
* deny(STATUS): deny access to target, returns the HTTP response code specified. Valid values for STATUS are 403, 404, and 502.
* rate_based_ban: limit client traffic to the configured threshold and ban the client if the traffic exceeds the threshold. Configure parameters for this action in RateLimitOptions. Requires rateLimitOptions to be set.
* redirect: redirect to a different target. This can either be an internal reCAPTCHA redirect, or an external URL-based redirect via a 302 response. Parameters for this action can be configured via redirectOptions. This action is only supported in Global Security Policies of type CLOUD_ARMOR.
* throttle: limit client traffic to the configured threshold. Configure parameters for this action in rateLimitOptions. Requires rateLimitOptions to be set for this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#action GoogleComputeRegionSecurityPolicyRule#action}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

An integer indicating the priority of a rule in the list.

The priority must be a positive value between 0 and 2147483647.
Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#priority GoogleComputeRegionSecurityPolicyRule#priority}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.region"></a>

- *Type:* str

The Region in which the created Region Security Policy rule should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#region GoogleComputeRegionSecurityPolicyRule#region}

---

##### `security_policy`<sup>Required</sup> <a name="security_policy" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.securityPolicy"></a>

- *Type:* str

The name of the security policy this rule belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#security_policy GoogleComputeRegionSecurityPolicyRule#security_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#description GoogleComputeRegionSecurityPolicyRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#id GoogleComputeRegionSecurityPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.match"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatch">GoogleComputeRegionSecurityPolicyRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#match GoogleComputeRegionSecurityPolicyRule#match}

---

##### `network_match`<sup>Optional</sup> <a name="network_match" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.networkMatch"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch">GoogleComputeRegionSecurityPolicyRuleNetworkMatch</a>

network_match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#network_match GoogleComputeRegionSecurityPolicyRule#network_match}

---

##### `preconfigured_waf_config`<sup>Optional</sup> <a name="preconfigured_waf_config" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.preconfiguredWafConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfig">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfig</a>

preconfigured_waf_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#preconfigured_waf_config GoogleComputeRegionSecurityPolicyRule#preconfigured_waf_config}

---

##### `preview`<sup>Optional</sup> <a name="preview" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.preview"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the specified action is not enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#preview GoogleComputeRegionSecurityPolicyRule#preview}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#project GoogleComputeRegionSecurityPolicyRule#project}.

---

##### `rate_limit_options`<sup>Optional</sup> <a name="rate_limit_options" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.rateLimitOptions"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptions">GoogleComputeRegionSecurityPolicyRuleRateLimitOptions</a>

rate_limit_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#rate_limit_options GoogleComputeRegionSecurityPolicyRule#rate_limit_options}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeouts">GoogleComputeRegionSecurityPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#timeouts GoogleComputeRegionSecurityPolicyRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.putMatch">put_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.putNetworkMatch">put_network_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.putPreconfiguredWafConfig">put_preconfigured_waf_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.putRateLimitOptions">put_rate_limit_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.resetMatch">reset_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.resetNetworkMatch">reset_network_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.resetPreconfiguredWafConfig">reset_preconfigured_waf_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.resetPreview">reset_preview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.resetRateLimitOptions">reset_rate_limit_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_match` <a name="put_match" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.putMatch"></a>

```python
def put_match(
  config: GoogleComputeRegionSecurityPolicyRuleMatchConfig = None,
  expr: GoogleComputeRegionSecurityPolicyRuleMatchExpr = None,
  versioned_expr: str = None
) -> None
```

###### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.putMatch.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfig">GoogleComputeRegionSecurityPolicyRuleMatchConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#config GoogleComputeRegionSecurityPolicyRule#config}

---

###### `expr`<sup>Optional</sup> <a name="expr" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.putMatch.parameter.expr"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExpr">GoogleComputeRegionSecurityPolicyRuleMatchExpr</a>

expr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#expr GoogleComputeRegionSecurityPolicyRule#expr}

---

###### `versioned_expr`<sup>Optional</sup> <a name="versioned_expr" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.putMatch.parameter.versionedExpr"></a>

- *Type:* str

Preconfigured versioned expression.

If this field is specified, config must also be specified.
Available preconfigured expressions along with their requirements are: SRC_IPS_V1 - must specify the corresponding srcIpRange field in config. Possible values: ["SRC_IPS_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#versioned_expr GoogleComputeRegionSecurityPolicyRule#versioned_expr}

---

##### `put_network_match` <a name="put_network_match" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.putNetworkMatch"></a>

```python
def put_network_match(
  dest_ip_ranges: typing.List[str] = None,
  dest_ports: typing.List[str] = None,
  ip_protocols: typing.List[str] = None,
  src_asns: typing.List[typing.Union[int, float]] = None,
  src_ip_ranges: typing.List[str] = None,
  src_ports: typing.List[str] = None,
  src_region_codes: typing.List[str] = None,
  user_defined_fields: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields]] = None
) -> None
```

###### `dest_ip_ranges`<sup>Optional</sup> <a name="dest_ip_ranges" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.putNetworkMatch.parameter.destIpRanges"></a>

- *Type:* typing.List[str]

Destination IPv4/IPv6 addresses or CIDR prefixes, in standard text format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#dest_ip_ranges GoogleComputeRegionSecurityPolicyRule#dest_ip_ranges}

---

###### `dest_ports`<sup>Optional</sup> <a name="dest_ports" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.putNetworkMatch.parameter.destPorts"></a>

- *Type:* typing.List[str]

Destination port numbers for TCP/UDP/SCTP.

Each element can be a 16-bit unsigned decimal number (e.g. "80") or range (e.g. "0-1023").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#dest_ports GoogleComputeRegionSecurityPolicyRule#dest_ports}

---

###### `ip_protocols`<sup>Optional</sup> <a name="ip_protocols" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.putNetworkMatch.parameter.ipProtocols"></a>

- *Type:* typing.List[str]

IPv4 protocol / IPv6 next header (after extension headers).

Each element can be an 8-bit unsigned decimal number (e.g. "6"), range (e.g. "253-254"), or one of the following protocol names: "tcp", "udp", "icmp", "esp", "ah", "ipip", or "sctp".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#ip_protocols GoogleComputeRegionSecurityPolicyRule#ip_protocols}

---

###### `src_asns`<sup>Optional</sup> <a name="src_asns" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.putNetworkMatch.parameter.srcAsns"></a>

- *Type:* typing.List[typing.Union[int, float]]

BGP Autonomous System Number associated with the source IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#src_asns GoogleComputeRegionSecurityPolicyRule#src_asns}

---

###### `src_ip_ranges`<sup>Optional</sup> <a name="src_ip_ranges" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.putNetworkMatch.parameter.srcIpRanges"></a>

- *Type:* typing.List[str]

Source IPv4/IPv6 addresses or CIDR prefixes, in standard text format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#src_ip_ranges GoogleComputeRegionSecurityPolicyRule#src_ip_ranges}

---

###### `src_ports`<sup>Optional</sup> <a name="src_ports" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.putNetworkMatch.parameter.srcPorts"></a>

- *Type:* typing.List[str]

Source port numbers for TCP/UDP/SCTP.

Each element can be a 16-bit unsigned decimal number (e.g. "80") or range (e.g. "0-1023").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#src_ports GoogleComputeRegionSecurityPolicyRule#src_ports}

---

###### `src_region_codes`<sup>Optional</sup> <a name="src_region_codes" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.putNetworkMatch.parameter.srcRegionCodes"></a>

- *Type:* typing.List[str]

Two-letter ISO 3166-1 alpha-2 country code associated with the source IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#src_region_codes GoogleComputeRegionSecurityPolicyRule#src_region_codes}

---

###### `user_defined_fields`<sup>Optional</sup> <a name="user_defined_fields" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.putNetworkMatch.parameter.userDefinedFields"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields">GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields</a>]]

user_defined_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#user_defined_fields GoogleComputeRegionSecurityPolicyRule#user_defined_fields}

---

##### `put_preconfigured_waf_config` <a name="put_preconfigured_waf_config" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.putPreconfiguredWafConfig"></a>

```python
def put_preconfigured_waf_config(
  exclusion: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion]] = None
) -> None
```

###### `exclusion`<sup>Optional</sup> <a name="exclusion" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.putPreconfiguredWafConfig.parameter.exclusion"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion</a>]]

exclusion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#exclusion GoogleComputeRegionSecurityPolicyRule#exclusion}

---

##### `put_rate_limit_options` <a name="put_rate_limit_options" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.putRateLimitOptions"></a>

```python
def put_rate_limit_options(
  ban_duration_sec: typing.Union[int, float] = None,
  ban_threshold: GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold = None,
  conform_action: str = None,
  enforce_on_key: str = None,
  enforce_on_key_configs: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs]] = None,
  enforce_on_key_name: str = None,
  exceed_action: str = None,
  rate_limit_threshold: GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold = None
) -> None
```

###### `ban_duration_sec`<sup>Optional</sup> <a name="ban_duration_sec" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.putRateLimitOptions.parameter.banDurationSec"></a>

- *Type:* typing.Union[int, float]

Can only be specified if the action for the rule is "rate_based_ban".

If specified, determines the time (in seconds) the traffic will continue to be banned by the rate limit after the rate falls below the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#ban_duration_sec GoogleComputeRegionSecurityPolicyRule#ban_duration_sec}

---

###### `ban_threshold`<sup>Optional</sup> <a name="ban_threshold" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.putRateLimitOptions.parameter.banThreshold"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold">GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold</a>

ban_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#ban_threshold GoogleComputeRegionSecurityPolicyRule#ban_threshold}

---

###### `conform_action`<sup>Optional</sup> <a name="conform_action" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.putRateLimitOptions.parameter.conformAction"></a>

- *Type:* str

Action to take for requests that are under the configured rate limit threshold. Valid option is "allow" only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#conform_action GoogleComputeRegionSecurityPolicyRule#conform_action}

---

###### `enforce_on_key`<sup>Optional</sup> <a name="enforce_on_key" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.putRateLimitOptions.parameter.enforceOnKey"></a>

- *Type:* str

Determines the key to enforce the rateLimitThreshold on.

Possible values are:

* ALL: A single rate limit threshold is applied to all the requests matching this rule. This is the default value if "enforceOnKey" is not configured.
* IP: The source IP address of the request is the key. Each IP has this limit enforced separately.
* HTTP_HEADER: The value of the HTTP header whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the header value. If no such header is present in the request, the key type defaults to ALL.
* XFF_IP: The first IP address (i.e. the originating client IP address) specified in the list of IPs under X-Forwarded-For HTTP header. If no such header is present or the value is not a valid IP, the key defaults to the source IP address of the request i.e. key type IP.
* HTTP_COOKIE: The value of the HTTP cookie whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the cookie value. If no such cookie is present in the request, the key type defaults to ALL.
* HTTP_PATH: The URL path of the HTTP request. The key value is truncated to the first 128 bytes.
* SNI: Server name indication in the TLS session of the HTTPS request. The key value is truncated to the first 128 bytes. The key type defaults to ALL on a HTTP session.
* REGION_CODE: The country/region from which the request originates.
* TLS_JA3_FINGERPRINT: JA3 TLS/SSL fingerprint if the client connects using HTTPS, HTTP/2 or HTTP/3. If not available, the key type defaults to ALL.
* USER_IP: The IP address of the originating client, which is resolved based on "userIpRequestHeaders" configured with the security policy. If there is no "userIpRequestHeaders" configuration or an IP address cannot be resolved from it, the key type defaults to IP. Possible values: ["ALL", "IP", "HTTP_HEADER", "XFF_IP", "HTTP_COOKIE", "HTTP_PATH", "SNI", "REGION_CODE", "TLS_JA3_FINGERPRINT", "USER_IP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#enforce_on_key GoogleComputeRegionSecurityPolicyRule#enforce_on_key}

---

###### `enforce_on_key_configs`<sup>Optional</sup> <a name="enforce_on_key_configs" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.putRateLimitOptions.parameter.enforceOnKeyConfigs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs">GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs</a>]]

enforce_on_key_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#enforce_on_key_configs GoogleComputeRegionSecurityPolicyRule#enforce_on_key_configs}

---

###### `enforce_on_key_name`<sup>Optional</sup> <a name="enforce_on_key_name" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.putRateLimitOptions.parameter.enforceOnKeyName"></a>

- *Type:* str

Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value.

HTTP_COOKIE -- Name of the HTTP cookie whose value is taken as the key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#enforce_on_key_name GoogleComputeRegionSecurityPolicyRule#enforce_on_key_name}

---

###### `exceed_action`<sup>Optional</sup> <a name="exceed_action" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.putRateLimitOptions.parameter.exceedAction"></a>

- *Type:* str

Action to take for requests that are above the configured rate limit threshold, to deny with a specified HTTP response code.

Valid options are deny(STATUS), where valid values for STATUS are 403, 404, 429, and 502.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#exceed_action GoogleComputeRegionSecurityPolicyRule#exceed_action}

---

###### `rate_limit_threshold`<sup>Optional</sup> <a name="rate_limit_threshold" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.putRateLimitOptions.parameter.rateLimitThreshold"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold">GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold</a>

rate_limit_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#rate_limit_threshold GoogleComputeRegionSecurityPolicyRule#rate_limit_threshold}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#create GoogleComputeRegionSecurityPolicyRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#delete GoogleComputeRegionSecurityPolicyRule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#update GoogleComputeRegionSecurityPolicyRule#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_match` <a name="reset_match" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.resetMatch"></a>

```python
def reset_match() -> None
```

##### `reset_network_match` <a name="reset_network_match" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.resetNetworkMatch"></a>

```python
def reset_network_match() -> None
```

##### `reset_preconfigured_waf_config` <a name="reset_preconfigured_waf_config" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.resetPreconfiguredWafConfig"></a>

```python
def reset_preconfigured_waf_config() -> None
```

##### `reset_preview` <a name="reset_preview" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.resetPreview"></a>

```python
def reset_preview() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_rate_limit_options` <a name="reset_rate_limit_options" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.resetRateLimitOptions"></a>

```python
def reset_rate_limit_options() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleComputeRegionSecurityPolicyRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleComputeRegionSecurityPolicyRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleComputeRegionSecurityPolicyRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleComputeRegionSecurityPolicyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRegionSecurityPolicyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.match">match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference">GoogleComputeRegionSecurityPolicyRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.networkMatch">network_match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference">GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.preconfiguredWafConfig">preconfigured_waf_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.rateLimitOptions">rate_limit_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference">GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference">GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.matchInput">match_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatch">GoogleComputeRegionSecurityPolicyRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.networkMatchInput">network_match_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch">GoogleComputeRegionSecurityPolicyRuleNetworkMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.preconfiguredWafConfigInput">preconfigured_waf_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfig">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.previewInput">preview_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.rateLimitOptionsInput">rate_limit_options_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptions">GoogleComputeRegionSecurityPolicyRuleRateLimitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.securityPolicyInput">security_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeouts">GoogleComputeRegionSecurityPolicyRuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.preview">preview</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.securityPolicy">security_policy</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.match"></a>

```python
match: GoogleComputeRegionSecurityPolicyRuleMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference">GoogleComputeRegionSecurityPolicyRuleMatchOutputReference</a>

---

##### `network_match`<sup>Required</sup> <a name="network_match" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.networkMatch"></a>

```python
network_match: GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference">GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference</a>

---

##### `preconfigured_waf_config`<sup>Required</sup> <a name="preconfigured_waf_config" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.preconfiguredWafConfig"></a>

```python
preconfigured_waf_config: GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference</a>

---

##### `rate_limit_options`<sup>Required</sup> <a name="rate_limit_options" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.rateLimitOptions"></a>

```python
rate_limit_options: GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference">GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.timeouts"></a>

```python
timeouts: GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference">GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `match_input`<sup>Optional</sup> <a name="match_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.matchInput"></a>

```python
match_input: GoogleComputeRegionSecurityPolicyRuleMatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatch">GoogleComputeRegionSecurityPolicyRuleMatch</a>

---

##### `network_match_input`<sup>Optional</sup> <a name="network_match_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.networkMatchInput"></a>

```python
network_match_input: GoogleComputeRegionSecurityPolicyRuleNetworkMatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch">GoogleComputeRegionSecurityPolicyRuleNetworkMatch</a>

---

##### `preconfigured_waf_config_input`<sup>Optional</sup> <a name="preconfigured_waf_config_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.preconfiguredWafConfigInput"></a>

```python
preconfigured_waf_config_input: GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfig">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfig</a>

---

##### `preview_input`<sup>Optional</sup> <a name="preview_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.previewInput"></a>

```python
preview_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `rate_limit_options_input`<sup>Optional</sup> <a name="rate_limit_options_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.rateLimitOptionsInput"></a>

```python
rate_limit_options_input: GoogleComputeRegionSecurityPolicyRuleRateLimitOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptions">GoogleComputeRegionSecurityPolicyRuleRateLimitOptions</a>

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `security_policy_input`<sup>Optional</sup> <a name="security_policy_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.securityPolicyInput"></a>

```python
security_policy_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleComputeRegionSecurityPolicyRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeouts">GoogleComputeRegionSecurityPolicyRuleTimeouts</a>]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `preview`<sup>Required</sup> <a name="preview" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.preview"></a>

```python
preview: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `security_policy`<sup>Required</sup> <a name="security_policy" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.securityPolicy"></a>

```python
security_policy: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionSecurityPolicyRuleConfig <a name="GoogleComputeRegionSecurityPolicyRuleConfig" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: str,
  priority: typing.Union[int, float],
  region: str,
  security_policy: str,
  description: str = None,
  id: str = None,
  match: GoogleComputeRegionSecurityPolicyRuleMatch = None,
  network_match: GoogleComputeRegionSecurityPolicyRuleNetworkMatch = None,
  preconfigured_waf_config: GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfig = None,
  preview: typing.Union[bool, IResolvable] = None,
  project: str = None,
  rate_limit_options: GoogleComputeRegionSecurityPolicyRuleRateLimitOptions = None,
  timeouts: GoogleComputeRegionSecurityPolicyRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.action">action</a></code> | <code>str</code> | The Action to perform when the rule is matched. The following are the valid actions:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.region">region</a></code> | <code>str</code> | The Region in which the created Region Security Policy rule should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.securityPolicy">security_policy</a></code> | <code>str</code> | The name of the security policy this rule belongs to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#id GoogleComputeRegionSecurityPolicyRule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.match">match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatch">GoogleComputeRegionSecurityPolicyRuleMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.networkMatch">network_match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch">GoogleComputeRegionSecurityPolicyRuleNetworkMatch</a></code> | network_match block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.preconfiguredWafConfig">preconfigured_waf_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfig">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfig</a></code> | preconfigured_waf_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.preview">preview</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, the specified action is not enforced. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#project GoogleComputeRegionSecurityPolicyRule#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.rateLimitOptions">rate_limit_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptions">GoogleComputeRegionSecurityPolicyRuleRateLimitOptions</a></code> | rate_limit_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeouts">GoogleComputeRegionSecurityPolicyRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.action"></a>

```python
action: str
```

- *Type:* str

The Action to perform when the rule is matched. The following are the valid actions:.

* allow: allow access to target.
* deny(STATUS): deny access to target, returns the HTTP response code specified. Valid values for STATUS are 403, 404, and 502.
* rate_based_ban: limit client traffic to the configured threshold and ban the client if the traffic exceeds the threshold. Configure parameters for this action in RateLimitOptions. Requires rateLimitOptions to be set.
* redirect: redirect to a different target. This can either be an internal reCAPTCHA redirect, or an external URL-based redirect via a 302 response. Parameters for this action can be configured via redirectOptions. This action is only supported in Global Security Policies of type CLOUD_ARMOR.
* throttle: limit client traffic to the configured threshold. Configure parameters for this action in rateLimitOptions. Requires rateLimitOptions to be set for this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#action GoogleComputeRegionSecurityPolicyRule#action}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

An integer indicating the priority of a rule in the list.

The priority must be a positive value between 0 and 2147483647.
Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#priority GoogleComputeRegionSecurityPolicyRule#priority}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The Region in which the created Region Security Policy rule should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#region GoogleComputeRegionSecurityPolicyRule#region}

---

##### `security_policy`<sup>Required</sup> <a name="security_policy" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.securityPolicy"></a>

```python
security_policy: str
```

- *Type:* str

The name of the security policy this rule belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#security_policy GoogleComputeRegionSecurityPolicyRule#security_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#description GoogleComputeRegionSecurityPolicyRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#id GoogleComputeRegionSecurityPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.match"></a>

```python
match: GoogleComputeRegionSecurityPolicyRuleMatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatch">GoogleComputeRegionSecurityPolicyRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#match GoogleComputeRegionSecurityPolicyRule#match}

---

##### `network_match`<sup>Optional</sup> <a name="network_match" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.networkMatch"></a>

```python
network_match: GoogleComputeRegionSecurityPolicyRuleNetworkMatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch">GoogleComputeRegionSecurityPolicyRuleNetworkMatch</a>

network_match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#network_match GoogleComputeRegionSecurityPolicyRule#network_match}

---

##### `preconfigured_waf_config`<sup>Optional</sup> <a name="preconfigured_waf_config" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.preconfiguredWafConfig"></a>

```python
preconfigured_waf_config: GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfig">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfig</a>

preconfigured_waf_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#preconfigured_waf_config GoogleComputeRegionSecurityPolicyRule#preconfigured_waf_config}

---

##### `preview`<sup>Optional</sup> <a name="preview" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.preview"></a>

```python
preview: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the specified action is not enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#preview GoogleComputeRegionSecurityPolicyRule#preview}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#project GoogleComputeRegionSecurityPolicyRule#project}.

---

##### `rate_limit_options`<sup>Optional</sup> <a name="rate_limit_options" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.rateLimitOptions"></a>

```python
rate_limit_options: GoogleComputeRegionSecurityPolicyRuleRateLimitOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptions">GoogleComputeRegionSecurityPolicyRuleRateLimitOptions</a>

rate_limit_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#rate_limit_options GoogleComputeRegionSecurityPolicyRule#rate_limit_options}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeRegionSecurityPolicyRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeouts">GoogleComputeRegionSecurityPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#timeouts GoogleComputeRegionSecurityPolicyRule#timeouts}

---

### GoogleComputeRegionSecurityPolicyRuleMatch <a name="GoogleComputeRegionSecurityPolicyRuleMatch" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatch(
  config: GoogleComputeRegionSecurityPolicyRuleMatchConfig = None,
  expr: GoogleComputeRegionSecurityPolicyRuleMatchExpr = None,
  versioned_expr: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatch.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfig">GoogleComputeRegionSecurityPolicyRuleMatchConfig</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatch.property.expr">expr</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExpr">GoogleComputeRegionSecurityPolicyRuleMatchExpr</a></code> | expr block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatch.property.versionedExpr">versioned_expr</a></code> | <code>str</code> | Preconfigured versioned expression. |

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatch.property.config"></a>

```python
config: GoogleComputeRegionSecurityPolicyRuleMatchConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfig">GoogleComputeRegionSecurityPolicyRuleMatchConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#config GoogleComputeRegionSecurityPolicyRule#config}

---

##### `expr`<sup>Optional</sup> <a name="expr" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatch.property.expr"></a>

```python
expr: GoogleComputeRegionSecurityPolicyRuleMatchExpr
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExpr">GoogleComputeRegionSecurityPolicyRuleMatchExpr</a>

expr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#expr GoogleComputeRegionSecurityPolicyRule#expr}

---

##### `versioned_expr`<sup>Optional</sup> <a name="versioned_expr" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatch.property.versionedExpr"></a>

```python
versioned_expr: str
```

- *Type:* str

Preconfigured versioned expression.

If this field is specified, config must also be specified.
Available preconfigured expressions along with their requirements are: SRC_IPS_V1 - must specify the corresponding srcIpRange field in config. Possible values: ["SRC_IPS_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#versioned_expr GoogleComputeRegionSecurityPolicyRule#versioned_expr}

---

### GoogleComputeRegionSecurityPolicyRuleMatchConfig <a name="GoogleComputeRegionSecurityPolicyRuleMatchConfig" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfig(
  src_ip_ranges: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfig.property.srcIpRanges">src_ip_ranges</a></code> | <code>typing.List[str]</code> | CIDR IP address range. Maximum number of srcIpRanges allowed is 10. |

---

##### `src_ip_ranges`<sup>Optional</sup> <a name="src_ip_ranges" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfig.property.srcIpRanges"></a>

```python
src_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

CIDR IP address range. Maximum number of srcIpRanges allowed is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#src_ip_ranges GoogleComputeRegionSecurityPolicyRule#src_ip_ranges}

---

### GoogleComputeRegionSecurityPolicyRuleMatchExpr <a name="GoogleComputeRegionSecurityPolicyRuleMatchExpr" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExpr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExpr.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExpr(
  expression: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExpr.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExpr.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

The application context of the containing message determines which well-known feature set of CEL is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#expression GoogleComputeRegionSecurityPolicyRule#expression}

---

### GoogleComputeRegionSecurityPolicyRuleNetworkMatch <a name="GoogleComputeRegionSecurityPolicyRuleNetworkMatch" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch(
  dest_ip_ranges: typing.List[str] = None,
  dest_ports: typing.List[str] = None,
  ip_protocols: typing.List[str] = None,
  src_asns: typing.List[typing.Union[int, float]] = None,
  src_ip_ranges: typing.List[str] = None,
  src_ports: typing.List[str] = None,
  src_region_codes: typing.List[str] = None,
  user_defined_fields: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch.property.destIpRanges">dest_ip_ranges</a></code> | <code>typing.List[str]</code> | Destination IPv4/IPv6 addresses or CIDR prefixes, in standard text format. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch.property.destPorts">dest_ports</a></code> | <code>typing.List[str]</code> | Destination port numbers for TCP/UDP/SCTP. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch.property.ipProtocols">ip_protocols</a></code> | <code>typing.List[str]</code> | IPv4 protocol / IPv6 next header (after extension headers). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch.property.srcAsns">src_asns</a></code> | <code>typing.List[typing.Union[int, float]]</code> | BGP Autonomous System Number associated with the source IP address. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch.property.srcIpRanges">src_ip_ranges</a></code> | <code>typing.List[str]</code> | Source IPv4/IPv6 addresses or CIDR prefixes, in standard text format. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch.property.srcPorts">src_ports</a></code> | <code>typing.List[str]</code> | Source port numbers for TCP/UDP/SCTP. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch.property.srcRegionCodes">src_region_codes</a></code> | <code>typing.List[str]</code> | Two-letter ISO 3166-1 alpha-2 country code associated with the source IP address. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch.property.userDefinedFields">user_defined_fields</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields">GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields</a>]]</code> | user_defined_fields block. |

---

##### `dest_ip_ranges`<sup>Optional</sup> <a name="dest_ip_ranges" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch.property.destIpRanges"></a>

```python
dest_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

Destination IPv4/IPv6 addresses or CIDR prefixes, in standard text format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#dest_ip_ranges GoogleComputeRegionSecurityPolicyRule#dest_ip_ranges}

---

##### `dest_ports`<sup>Optional</sup> <a name="dest_ports" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch.property.destPorts"></a>

```python
dest_ports: typing.List[str]
```

- *Type:* typing.List[str]

Destination port numbers for TCP/UDP/SCTP.

Each element can be a 16-bit unsigned decimal number (e.g. "80") or range (e.g. "0-1023").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#dest_ports GoogleComputeRegionSecurityPolicyRule#dest_ports}

---

##### `ip_protocols`<sup>Optional</sup> <a name="ip_protocols" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch.property.ipProtocols"></a>

```python
ip_protocols: typing.List[str]
```

- *Type:* typing.List[str]

IPv4 protocol / IPv6 next header (after extension headers).

Each element can be an 8-bit unsigned decimal number (e.g. "6"), range (e.g. "253-254"), or one of the following protocol names: "tcp", "udp", "icmp", "esp", "ah", "ipip", or "sctp".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#ip_protocols GoogleComputeRegionSecurityPolicyRule#ip_protocols}

---

##### `src_asns`<sup>Optional</sup> <a name="src_asns" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch.property.srcAsns"></a>

```python
src_asns: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

BGP Autonomous System Number associated with the source IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#src_asns GoogleComputeRegionSecurityPolicyRule#src_asns}

---

##### `src_ip_ranges`<sup>Optional</sup> <a name="src_ip_ranges" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch.property.srcIpRanges"></a>

```python
src_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

Source IPv4/IPv6 addresses or CIDR prefixes, in standard text format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#src_ip_ranges GoogleComputeRegionSecurityPolicyRule#src_ip_ranges}

---

##### `src_ports`<sup>Optional</sup> <a name="src_ports" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch.property.srcPorts"></a>

```python
src_ports: typing.List[str]
```

- *Type:* typing.List[str]

Source port numbers for TCP/UDP/SCTP.

Each element can be a 16-bit unsigned decimal number (e.g. "80") or range (e.g. "0-1023").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#src_ports GoogleComputeRegionSecurityPolicyRule#src_ports}

---

##### `src_region_codes`<sup>Optional</sup> <a name="src_region_codes" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch.property.srcRegionCodes"></a>

```python
src_region_codes: typing.List[str]
```

- *Type:* typing.List[str]

Two-letter ISO 3166-1 alpha-2 country code associated with the source IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#src_region_codes GoogleComputeRegionSecurityPolicyRule#src_region_codes}

---

##### `user_defined_fields`<sup>Optional</sup> <a name="user_defined_fields" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch.property.userDefinedFields"></a>

```python
user_defined_fields: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields">GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields</a>]]

user_defined_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#user_defined_fields GoogleComputeRegionSecurityPolicyRule#user_defined_fields}

---

### GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields <a name="GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields(
  name: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields.property.name">name</a></code> | <code>str</code> | Name of the user-defined field, as given in the definition. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields.property.values">values</a></code> | <code>typing.List[str]</code> | Matching values of the field. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the user-defined field, as given in the definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#name GoogleComputeRegionSecurityPolicyRule#name}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Matching values of the field.

Each element can be a 32-bit unsigned decimal or hexadecimal (starting with "0x") number (e.g. "64") or range (e.g. "0x400-0x7ff").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#values GoogleComputeRegionSecurityPolicyRule#values}

---

### GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfig <a name="GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfig" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfig(
  exclusion: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfig.property.exclusion">exclusion</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion</a>]]</code> | exclusion block. |

---

##### `exclusion`<sup>Optional</sup> <a name="exclusion" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfig.property.exclusion"></a>

```python
exclusion: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion</a>]]

exclusion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#exclusion GoogleComputeRegionSecurityPolicyRule#exclusion}

---

### GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion <a name="GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion(
  target_rule_set: str,
  request_cookie: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie]] = None,
  request_header: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader]] = None,
  request_query_param: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam]] = None,
  request_uri: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri]] = None,
  target_rule_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion.property.targetRuleSet">target_rule_set</a></code> | <code>str</code> | Target WAF rule set to apply the preconfigured WAF exclusion. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestCookie">request_cookie</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>]]</code> | request_cookie block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestHeader">request_header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>]]</code> | request_header block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestQueryParam">request_query_param</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>]]</code> | request_query_param block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestUri">request_uri</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>]]</code> | request_uri block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion.property.targetRuleIds">target_rule_ids</a></code> | <code>typing.List[str]</code> | A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion. |

---

##### `target_rule_set`<sup>Required</sup> <a name="target_rule_set" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion.property.targetRuleSet"></a>

```python
target_rule_set: str
```

- *Type:* str

Target WAF rule set to apply the preconfigured WAF exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#target_rule_set GoogleComputeRegionSecurityPolicyRule#target_rule_set}

---

##### `request_cookie`<sup>Optional</sup> <a name="request_cookie" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestCookie"></a>

```python
request_cookie: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>]]

request_cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#request_cookie GoogleComputeRegionSecurityPolicyRule#request_cookie}

---

##### `request_header`<sup>Optional</sup> <a name="request_header" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestHeader"></a>

```python
request_header: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>]]

request_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#request_header GoogleComputeRegionSecurityPolicyRule#request_header}

---

##### `request_query_param`<sup>Optional</sup> <a name="request_query_param" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestQueryParam"></a>

```python
request_query_param: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>]]

request_query_param block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#request_query_param GoogleComputeRegionSecurityPolicyRule#request_query_param}

---

##### `request_uri`<sup>Optional</sup> <a name="request_uri" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestUri"></a>

```python
request_uri: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>]]

request_uri block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#request_uri GoogleComputeRegionSecurityPolicyRule#request_uri}

---

##### `target_rule_ids`<sup>Optional</sup> <a name="target_rule_ids" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion.property.targetRuleIds"></a>

```python
target_rule_ids: typing.List[str]
```

- *Type:* typing.List[str]

A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion.

If omitted, it refers to all the rule IDs under the WAF rule set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#target_rule_ids GoogleComputeRegionSecurityPolicyRule#target_rule_ids}

---

### GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie <a name="GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie(
  operator: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.property.operator">operator</a></code> | <code>str</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.property.value">value</a></code> | <code>str</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.property.operator"></a>

```python
operator: str
```

- *Type:* str

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value. Possible values: ["CONTAINS", "ENDS_WITH", "EQUALS", "EQUALS_ANY", "STARTS_WITH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#operator GoogleComputeRegionSecurityPolicyRule#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.property.value"></a>

```python
value: str
```

- *Type:* str

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#value GoogleComputeRegionSecurityPolicyRule#value}

---

### GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader <a name="GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader(
  operator: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.property.operator">operator</a></code> | <code>str</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.property.value">value</a></code> | <code>str</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.property.operator"></a>

```python
operator: str
```

- *Type:* str

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value. Possible values: ["CONTAINS", "ENDS_WITH", "EQUALS", "EQUALS_ANY", "STARTS_WITH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#operator GoogleComputeRegionSecurityPolicyRule#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.property.value"></a>

```python
value: str
```

- *Type:* str

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#value GoogleComputeRegionSecurityPolicyRule#value}

---

### GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam <a name="GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam(
  operator: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.property.operator">operator</a></code> | <code>str</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.property.value">value</a></code> | <code>str</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.property.operator"></a>

```python
operator: str
```

- *Type:* str

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value. Possible values: ["CONTAINS", "ENDS_WITH", "EQUALS", "EQUALS_ANY", "STARTS_WITH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#operator GoogleComputeRegionSecurityPolicyRule#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.property.value"></a>

```python
value: str
```

- *Type:* str

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#value GoogleComputeRegionSecurityPolicyRule#value}

---

### GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri <a name="GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri(
  operator: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.property.operator">operator</a></code> | <code>str</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.property.value">value</a></code> | <code>str</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.property.operator"></a>

```python
operator: str
```

- *Type:* str

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value. Possible values: ["CONTAINS", "ENDS_WITH", "EQUALS", "EQUALS_ANY", "STARTS_WITH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#operator GoogleComputeRegionSecurityPolicyRule#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.property.value"></a>

```python
value: str
```

- *Type:* str

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#value GoogleComputeRegionSecurityPolicyRule#value}

---

### GoogleComputeRegionSecurityPolicyRuleRateLimitOptions <a name="GoogleComputeRegionSecurityPolicyRuleRateLimitOptions" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptions(
  ban_duration_sec: typing.Union[int, float] = None,
  ban_threshold: GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold = None,
  conform_action: str = None,
  enforce_on_key: str = None,
  enforce_on_key_configs: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs]] = None,
  enforce_on_key_name: str = None,
  exceed_action: str = None,
  rate_limit_threshold: GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptions.property.banDurationSec">ban_duration_sec</a></code> | <code>typing.Union[int, float]</code> | Can only be specified if the action for the rule is "rate_based_ban". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptions.property.banThreshold">ban_threshold</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold">GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold</a></code> | ban_threshold block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptions.property.conformAction">conform_action</a></code> | <code>str</code> | Action to take for requests that are under the configured rate limit threshold. Valid option is "allow" only. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptions.property.enforceOnKey">enforce_on_key</a></code> | <code>str</code> | Determines the key to enforce the rateLimitThreshold on. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptions.property.enforceOnKeyConfigs">enforce_on_key_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs">GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs</a>]]</code> | enforce_on_key_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptions.property.enforceOnKeyName">enforce_on_key_name</a></code> | <code>str</code> | Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptions.property.exceedAction">exceed_action</a></code> | <code>str</code> | Action to take for requests that are above the configured rate limit threshold, to deny with a specified HTTP response code. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptions.property.rateLimitThreshold">rate_limit_threshold</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold">GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold</a></code> | rate_limit_threshold block. |

---

##### `ban_duration_sec`<sup>Optional</sup> <a name="ban_duration_sec" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptions.property.banDurationSec"></a>

```python
ban_duration_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Can only be specified if the action for the rule is "rate_based_ban".

If specified, determines the time (in seconds) the traffic will continue to be banned by the rate limit after the rate falls below the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#ban_duration_sec GoogleComputeRegionSecurityPolicyRule#ban_duration_sec}

---

##### `ban_threshold`<sup>Optional</sup> <a name="ban_threshold" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptions.property.banThreshold"></a>

```python
ban_threshold: GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold">GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold</a>

ban_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#ban_threshold GoogleComputeRegionSecurityPolicyRule#ban_threshold}

---

##### `conform_action`<sup>Optional</sup> <a name="conform_action" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptions.property.conformAction"></a>

```python
conform_action: str
```

- *Type:* str

Action to take for requests that are under the configured rate limit threshold. Valid option is "allow" only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#conform_action GoogleComputeRegionSecurityPolicyRule#conform_action}

---

##### `enforce_on_key`<sup>Optional</sup> <a name="enforce_on_key" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptions.property.enforceOnKey"></a>

```python
enforce_on_key: str
```

- *Type:* str

Determines the key to enforce the rateLimitThreshold on.

Possible values are:

* ALL: A single rate limit threshold is applied to all the requests matching this rule. This is the default value if "enforceOnKey" is not configured.
* IP: The source IP address of the request is the key. Each IP has this limit enforced separately.
* HTTP_HEADER: The value of the HTTP header whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the header value. If no such header is present in the request, the key type defaults to ALL.
* XFF_IP: The first IP address (i.e. the originating client IP address) specified in the list of IPs under X-Forwarded-For HTTP header. If no such header is present or the value is not a valid IP, the key defaults to the source IP address of the request i.e. key type IP.
* HTTP_COOKIE: The value of the HTTP cookie whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the cookie value. If no such cookie is present in the request, the key type defaults to ALL.
* HTTP_PATH: The URL path of the HTTP request. The key value is truncated to the first 128 bytes.
* SNI: Server name indication in the TLS session of the HTTPS request. The key value is truncated to the first 128 bytes. The key type defaults to ALL on a HTTP session.
* REGION_CODE: The country/region from which the request originates.
* TLS_JA3_FINGERPRINT: JA3 TLS/SSL fingerprint if the client connects using HTTPS, HTTP/2 or HTTP/3. If not available, the key type defaults to ALL.
* USER_IP: The IP address of the originating client, which is resolved based on "userIpRequestHeaders" configured with the security policy. If there is no "userIpRequestHeaders" configuration or an IP address cannot be resolved from it, the key type defaults to IP. Possible values: ["ALL", "IP", "HTTP_HEADER", "XFF_IP", "HTTP_COOKIE", "HTTP_PATH", "SNI", "REGION_CODE", "TLS_JA3_FINGERPRINT", "USER_IP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#enforce_on_key GoogleComputeRegionSecurityPolicyRule#enforce_on_key}

---

##### `enforce_on_key_configs`<sup>Optional</sup> <a name="enforce_on_key_configs" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptions.property.enforceOnKeyConfigs"></a>

```python
enforce_on_key_configs: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs">GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs</a>]]

enforce_on_key_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#enforce_on_key_configs GoogleComputeRegionSecurityPolicyRule#enforce_on_key_configs}

---

##### `enforce_on_key_name`<sup>Optional</sup> <a name="enforce_on_key_name" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptions.property.enforceOnKeyName"></a>

```python
enforce_on_key_name: str
```

- *Type:* str

Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value.

HTTP_COOKIE -- Name of the HTTP cookie whose value is taken as the key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#enforce_on_key_name GoogleComputeRegionSecurityPolicyRule#enforce_on_key_name}

---

##### `exceed_action`<sup>Optional</sup> <a name="exceed_action" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptions.property.exceedAction"></a>

```python
exceed_action: str
```

- *Type:* str

Action to take for requests that are above the configured rate limit threshold, to deny with a specified HTTP response code.

Valid options are deny(STATUS), where valid values for STATUS are 403, 404, 429, and 502.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#exceed_action GoogleComputeRegionSecurityPolicyRule#exceed_action}

---

##### `rate_limit_threshold`<sup>Optional</sup> <a name="rate_limit_threshold" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptions.property.rateLimitThreshold"></a>

```python
rate_limit_threshold: GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold">GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold</a>

rate_limit_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#rate_limit_threshold GoogleComputeRegionSecurityPolicyRule#rate_limit_threshold}

---

### GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold <a name="GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold(
  count: typing.Union[int, float] = None,
  interval_sec: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Number of HTTP(S) requests for calculating the threshold. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold.property.intervalSec">interval_sec</a></code> | <code>typing.Union[int, float]</code> | Interval over which the threshold is computed. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of HTTP(S) requests for calculating the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#count GoogleComputeRegionSecurityPolicyRule#count}

---

##### `interval_sec`<sup>Optional</sup> <a name="interval_sec" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold.property.intervalSec"></a>

```python
interval_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Interval over which the threshold is computed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#interval_sec GoogleComputeRegionSecurityPolicyRule#interval_sec}

---

### GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs <a name="GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs(
  enforce_on_key_name: str = None,
  enforce_on_key_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyName">enforce_on_key_name</a></code> | <code>str</code> | Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyType">enforce_on_key_type</a></code> | <code>str</code> | Determines the key to enforce the rateLimitThreshold on. |

---

##### `enforce_on_key_name`<sup>Optional</sup> <a name="enforce_on_key_name" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyName"></a>

```python
enforce_on_key_name: str
```

- *Type:* str

Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value.

HTTP_COOKIE -- Name of the HTTP cookie whose value is taken as the key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#enforce_on_key_name GoogleComputeRegionSecurityPolicyRule#enforce_on_key_name}

---

##### `enforce_on_key_type`<sup>Optional</sup> <a name="enforce_on_key_type" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyType"></a>

```python
enforce_on_key_type: str
```

- *Type:* str

Determines the key to enforce the rateLimitThreshold on.

Possible values are:

* ALL: A single rate limit threshold is applied to all the requests matching this rule. This is the default value if "enforceOnKeyConfigs" is not configured.
* IP: The source IP address of the request is the key. Each IP has this limit enforced separately.
* HTTP_HEADER: The value of the HTTP header whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the header value. If no such header is present in the request, the key type defaults to ALL.
* XFF_IP: The first IP address (i.e. the originating client IP address) specified in the list of IPs under X-Forwarded-For HTTP header. If no such header is present or the value is not a valid IP, the key defaults to the source IP address of the request i.e. key type IP.
* HTTP_COOKIE: The value of the HTTP cookie whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the cookie value. If no such cookie is present in the request, the key type defaults to ALL.
* HTTP_PATH: The URL path of the HTTP request. The key value is truncated to the first 128 bytes.
* SNI: Server name indication in the TLS session of the HTTPS request. The key value is truncated to the first 128 bytes. The key type defaults to ALL on a HTTP session.
* REGION_CODE: The country/region from which the request originates.
* TLS_JA3_FINGERPRINT: JA3 TLS/SSL fingerprint if the client connects using HTTPS, HTTP/2 or HTTP/3. If not available, the key type defaults to ALL.
* USER_IP: The IP address of the originating client, which is resolved based on "userIpRequestHeaders" configured with the security policy. If there is no "userIpRequestHeaders" configuration or an IP address cannot be resolved from it, the key type defaults to IP. Possible values: ["ALL", "IP", "HTTP_HEADER", "XFF_IP", "HTTP_COOKIE", "HTTP_PATH", "SNI", "REGION_CODE", "TLS_JA3_FINGERPRINT", "USER_IP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#enforce_on_key_type GoogleComputeRegionSecurityPolicyRule#enforce_on_key_type}

---

### GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold <a name="GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold(
  count: typing.Union[int, float] = None,
  interval_sec: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Number of HTTP(S) requests for calculating the threshold. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold.property.intervalSec">interval_sec</a></code> | <code>typing.Union[int, float]</code> | Interval over which the threshold is computed. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of HTTP(S) requests for calculating the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#count GoogleComputeRegionSecurityPolicyRule#count}

---

##### `interval_sec`<sup>Optional</sup> <a name="interval_sec" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold.property.intervalSec"></a>

```python
interval_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Interval over which the threshold is computed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#interval_sec GoogleComputeRegionSecurityPolicyRule#interval_sec}

---

### GoogleComputeRegionSecurityPolicyRuleTimeouts <a name="GoogleComputeRegionSecurityPolicyRuleTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#create GoogleComputeRegionSecurityPolicyRule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#delete GoogleComputeRegionSecurityPolicyRule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#update GoogleComputeRegionSecurityPolicyRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#create GoogleComputeRegionSecurityPolicyRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#delete GoogleComputeRegionSecurityPolicyRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#update GoogleComputeRegionSecurityPolicyRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference <a name="GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.resetSrcIpRanges">reset_src_ip_ranges</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_src_ip_ranges` <a name="reset_src_ip_ranges" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.resetSrcIpRanges"></a>

```python
def reset_src_ip_ranges() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRangesInput">src_ip_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRanges">src_ip_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfig">GoogleComputeRegionSecurityPolicyRuleMatchConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `src_ip_ranges_input`<sup>Optional</sup> <a name="src_ip_ranges_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRangesInput"></a>

```python
src_ip_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_ip_ranges`<sup>Required</sup> <a name="src_ip_ranges" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRanges"></a>

```python
src_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeRegionSecurityPolicyRuleMatchConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfig">GoogleComputeRegionSecurityPolicyRuleMatchConfig</a>

---


### GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference <a name="GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExpr">GoogleComputeRegionSecurityPolicyRuleMatchExpr</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeRegionSecurityPolicyRuleMatchExpr
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExpr">GoogleComputeRegionSecurityPolicyRuleMatchExpr</a>

---


### GoogleComputeRegionSecurityPolicyRuleMatchOutputReference <a name="GoogleComputeRegionSecurityPolicyRuleMatchOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.putExpr">put_expr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.resetConfig">reset_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.resetExpr">reset_expr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.resetVersionedExpr">reset_versioned_expr</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_config` <a name="put_config" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.putConfig"></a>

```python
def put_config(
  src_ip_ranges: typing.List[str] = None
) -> None
```

###### `src_ip_ranges`<sup>Optional</sup> <a name="src_ip_ranges" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.putConfig.parameter.srcIpRanges"></a>

- *Type:* typing.List[str]

CIDR IP address range. Maximum number of srcIpRanges allowed is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#src_ip_ranges GoogleComputeRegionSecurityPolicyRule#src_ip_ranges}

---

##### `put_expr` <a name="put_expr" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.putExpr"></a>

```python
def put_expr(
  expression: str
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.putExpr.parameter.expression"></a>

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

The application context of the containing message determines which well-known feature set of CEL is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#expression GoogleComputeRegionSecurityPolicyRule#expression}

---

##### `reset_config` <a name="reset_config" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.resetConfig"></a>

```python
def reset_config() -> None
```

##### `reset_expr` <a name="reset_expr" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.resetExpr"></a>

```python
def reset_expr() -> None
```

##### `reset_versioned_expr` <a name="reset_versioned_expr" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.resetVersionedExpr"></a>

```python
def reset_versioned_expr() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference">GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.property.expr">expr</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference">GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.property.configInput">config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfig">GoogleComputeRegionSecurityPolicyRuleMatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.property.exprInput">expr_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExpr">GoogleComputeRegionSecurityPolicyRuleMatchExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.property.versionedExprInput">versioned_expr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.property.versionedExpr">versioned_expr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatch">GoogleComputeRegionSecurityPolicyRuleMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.property.config"></a>

```python
config: GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference">GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference</a>

---

##### `expr`<sup>Required</sup> <a name="expr" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.property.expr"></a>

```python
expr: GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference">GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference</a>

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.property.configInput"></a>

```python
config_input: GoogleComputeRegionSecurityPolicyRuleMatchConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfig">GoogleComputeRegionSecurityPolicyRuleMatchConfig</a>

---

##### `expr_input`<sup>Optional</sup> <a name="expr_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.property.exprInput"></a>

```python
expr_input: GoogleComputeRegionSecurityPolicyRuleMatchExpr
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchExpr">GoogleComputeRegionSecurityPolicyRuleMatchExpr</a>

---

##### `versioned_expr_input`<sup>Optional</sup> <a name="versioned_expr_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.property.versionedExprInput"></a>

```python
versioned_expr_input: str
```

- *Type:* str

---

##### `versioned_expr`<sup>Required</sup> <a name="versioned_expr" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.property.versionedExpr"></a>

```python
versioned_expr: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeRegionSecurityPolicyRuleMatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatch">GoogleComputeRegionSecurityPolicyRuleMatch</a>

---


### GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference <a name="GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.putUserDefinedFields">put_user_defined_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetDestIpRanges">reset_dest_ip_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetDestPorts">reset_dest_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetIpProtocols">reset_ip_protocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetSrcAsns">reset_src_asns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetSrcIpRanges">reset_src_ip_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetSrcPorts">reset_src_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetSrcRegionCodes">reset_src_region_codes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetUserDefinedFields">reset_user_defined_fields</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_user_defined_fields` <a name="put_user_defined_fields" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.putUserDefinedFields"></a>

```python
def put_user_defined_fields(
  value: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.putUserDefinedFields.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields">GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields</a>]]

---

##### `reset_dest_ip_ranges` <a name="reset_dest_ip_ranges" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetDestIpRanges"></a>

```python
def reset_dest_ip_ranges() -> None
```

##### `reset_dest_ports` <a name="reset_dest_ports" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetDestPorts"></a>

```python
def reset_dest_ports() -> None
```

##### `reset_ip_protocols` <a name="reset_ip_protocols" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetIpProtocols"></a>

```python
def reset_ip_protocols() -> None
```

##### `reset_src_asns` <a name="reset_src_asns" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetSrcAsns"></a>

```python
def reset_src_asns() -> None
```

##### `reset_src_ip_ranges` <a name="reset_src_ip_ranges" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetSrcIpRanges"></a>

```python
def reset_src_ip_ranges() -> None
```

##### `reset_src_ports` <a name="reset_src_ports" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetSrcPorts"></a>

```python
def reset_src_ports() -> None
```

##### `reset_src_region_codes` <a name="reset_src_region_codes" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetSrcRegionCodes"></a>

```python
def reset_src_region_codes() -> None
```

##### `reset_user_defined_fields` <a name="reset_user_defined_fields" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetUserDefinedFields"></a>

```python
def reset_user_defined_fields() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.userDefinedFields">user_defined_fields</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList">GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.destIpRangesInput">dest_ip_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.destPortsInput">dest_ports_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.ipProtocolsInput">ip_protocols_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcAsnsInput">src_asns_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcIpRangesInput">src_ip_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcPortsInput">src_ports_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcRegionCodesInput">src_region_codes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.userDefinedFieldsInput">user_defined_fields_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields">GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.destIpRanges">dest_ip_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.destPorts">dest_ports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.ipProtocols">ip_protocols</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcAsns">src_asns</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcIpRanges">src_ip_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcPorts">src_ports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcRegionCodes">src_region_codes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch">GoogleComputeRegionSecurityPolicyRuleNetworkMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `user_defined_fields`<sup>Required</sup> <a name="user_defined_fields" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.userDefinedFields"></a>

```python
user_defined_fields: GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList">GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList</a>

---

##### `dest_ip_ranges_input`<sup>Optional</sup> <a name="dest_ip_ranges_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.destIpRangesInput"></a>

```python
dest_ip_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dest_ports_input`<sup>Optional</sup> <a name="dest_ports_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.destPortsInput"></a>

```python
dest_ports_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_protocols_input`<sup>Optional</sup> <a name="ip_protocols_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.ipProtocolsInput"></a>

```python
ip_protocols_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_asns_input`<sup>Optional</sup> <a name="src_asns_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcAsnsInput"></a>

```python
src_asns_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `src_ip_ranges_input`<sup>Optional</sup> <a name="src_ip_ranges_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcIpRangesInput"></a>

```python
src_ip_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_ports_input`<sup>Optional</sup> <a name="src_ports_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcPortsInput"></a>

```python
src_ports_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_region_codes_input`<sup>Optional</sup> <a name="src_region_codes_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcRegionCodesInput"></a>

```python
src_region_codes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_defined_fields_input`<sup>Optional</sup> <a name="user_defined_fields_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.userDefinedFieldsInput"></a>

```python
user_defined_fields_input: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields">GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields</a>]]

---

##### `dest_ip_ranges`<sup>Required</sup> <a name="dest_ip_ranges" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.destIpRanges"></a>

```python
dest_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dest_ports`<sup>Required</sup> <a name="dest_ports" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.destPorts"></a>

```python
dest_ports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_protocols`<sup>Required</sup> <a name="ip_protocols" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.ipProtocols"></a>

```python
ip_protocols: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_asns`<sup>Required</sup> <a name="src_asns" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcAsns"></a>

```python
src_asns: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `src_ip_ranges`<sup>Required</sup> <a name="src_ip_ranges" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcIpRanges"></a>

```python
src_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_ports`<sup>Required</sup> <a name="src_ports" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcPorts"></a>

```python
src_ports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_region_codes`<sup>Required</sup> <a name="src_region_codes" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcRegionCodes"></a>

```python
src_region_codes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeRegionSecurityPolicyRuleNetworkMatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch">GoogleComputeRegionSecurityPolicyRuleNetworkMatch</a>

---


### GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList <a name="GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields">GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields">GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields</a>]]

---


### GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference <a name="GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields">GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields">GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields</a>]

---


### GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList <a name="GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion</a>]]

---


### GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference <a name="GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestCookie">put_request_cookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestHeader">put_request_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestQueryParam">put_request_query_param</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestUri">put_request_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestCookie">reset_request_cookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestHeader">reset_request_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestQueryParam">reset_request_query_param</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestUri">reset_request_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetTargetRuleIds">reset_target_rule_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_request_cookie` <a name="put_request_cookie" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestCookie"></a>

```python
def put_request_cookie(
  value: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestCookie.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>]]

---

##### `put_request_header` <a name="put_request_header" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestHeader"></a>

```python
def put_request_header(
  value: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestHeader.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>]]

---

##### `put_request_query_param` <a name="put_request_query_param" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestQueryParam"></a>

```python
def put_request_query_param(
  value: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestQueryParam.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>]]

---

##### `put_request_uri` <a name="put_request_uri" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestUri"></a>

```python
def put_request_uri(
  value: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestUri.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>]]

---

##### `reset_request_cookie` <a name="reset_request_cookie" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestCookie"></a>

```python
def reset_request_cookie() -> None
```

##### `reset_request_header` <a name="reset_request_header" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestHeader"></a>

```python
def reset_request_header() -> None
```

##### `reset_request_query_param` <a name="reset_request_query_param" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestQueryParam"></a>

```python
def reset_request_query_param() -> None
```

##### `reset_request_uri` <a name="reset_request_uri" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestUri"></a>

```python
def reset_request_uri() -> None
```

##### `reset_target_rule_ids` <a name="reset_target_rule_ids" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetTargetRuleIds"></a>

```python
def reset_target_rule_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestCookie">request_cookie</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestHeader">request_header</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestQueryParam">request_query_param</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestUri">request_uri</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestCookieInput">request_cookie_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestHeaderInput">request_header_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestQueryParamInput">request_query_param_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestUriInput">request_uri_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleIdsInput">target_rule_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleSetInput">target_rule_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleIds">target_rule_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleSet">target_rule_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `request_cookie`<sup>Required</sup> <a name="request_cookie" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestCookie"></a>

```python
request_cookie: GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList</a>

---

##### `request_header`<sup>Required</sup> <a name="request_header" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestHeader"></a>

```python
request_header: GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList</a>

---

##### `request_query_param`<sup>Required</sup> <a name="request_query_param" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestQueryParam"></a>

```python
request_query_param: GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList</a>

---

##### `request_uri`<sup>Required</sup> <a name="request_uri" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestUri"></a>

```python
request_uri: GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList</a>

---

##### `request_cookie_input`<sup>Optional</sup> <a name="request_cookie_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestCookieInput"></a>

```python
request_cookie_input: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>]]

---

##### `request_header_input`<sup>Optional</sup> <a name="request_header_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestHeaderInput"></a>

```python
request_header_input: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>]]

---

##### `request_query_param_input`<sup>Optional</sup> <a name="request_query_param_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestQueryParamInput"></a>

```python
request_query_param_input: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>]]

---

##### `request_uri_input`<sup>Optional</sup> <a name="request_uri_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestUriInput"></a>

```python
request_uri_input: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>]]

---

##### `target_rule_ids_input`<sup>Optional</sup> <a name="target_rule_ids_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleIdsInput"></a>

```python
target_rule_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_rule_set_input`<sup>Optional</sup> <a name="target_rule_set_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleSetInput"></a>

```python
target_rule_set_input: str
```

- *Type:* str

---

##### `target_rule_ids`<sup>Required</sup> <a name="target_rule_ids" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleIds"></a>

```python
target_rule_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_rule_set`<sup>Required</sup> <a name="target_rule_set" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleSet"></a>

```python
target_rule_set: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion</a>]

---


### GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList <a name="GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>]]

---


### GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference <a name="GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>]

---


### GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList <a name="GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>]]

---


### GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference <a name="GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>]

---


### GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList <a name="GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>]]

---


### GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference <a name="GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>]

---


### GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList <a name="GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>]]

---


### GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference <a name="GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>]

---


### GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference <a name="GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.putExclusion">put_exclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.resetExclusion">reset_exclusion</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_exclusion` <a name="put_exclusion" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.putExclusion"></a>

```python
def put_exclusion(
  value: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.putExclusion.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion</a>]]

---

##### `reset_exclusion` <a name="reset_exclusion" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.resetExclusion"></a>

```python
def reset_exclusion() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.exclusion">exclusion</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.exclusionInput">exclusion_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfig">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclusion`<sup>Required</sup> <a name="exclusion" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.exclusion"></a>

```python
exclusion: GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList</a>

---

##### `exclusion_input`<sup>Optional</sup> <a name="exclusion_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.exclusionInput"></a>

```python
exclusion_input: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfig">GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfig</a>

---


### GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference <a name="GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.resetCount">reset_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.resetIntervalSec">reset_interval_sec</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_count` <a name="reset_count" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.resetCount"></a>

```python
def reset_count() -> None
```

##### `reset_interval_sec` <a name="reset_interval_sec" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.resetIntervalSec"></a>

```python
def reset_interval_sec() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.intervalSecInput">interval_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.intervalSec">interval_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold">GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_sec_input`<sup>Optional</sup> <a name="interval_sec_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.intervalSecInput"></a>

```python
interval_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_sec`<sup>Required</sup> <a name="interval_sec" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.intervalSec"></a>

```python
interval_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold">GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold</a>

---


### GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList <a name="GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs">GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs">GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs</a>]]

---


### GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference <a name="GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyName">reset_enforce_on_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyType">reset_enforce_on_key_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enforce_on_key_name` <a name="reset_enforce_on_key_name" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyName"></a>

```python
def reset_enforce_on_key_name() -> None
```

##### `reset_enforce_on_key_type` <a name="reset_enforce_on_key_type" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyType"></a>

```python
def reset_enforce_on_key_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyNameInput">enforce_on_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyTypeInput">enforce_on_key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyName">enforce_on_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyType">enforce_on_key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs">GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enforce_on_key_name_input`<sup>Optional</sup> <a name="enforce_on_key_name_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyNameInput"></a>

```python
enforce_on_key_name_input: str
```

- *Type:* str

---

##### `enforce_on_key_type_input`<sup>Optional</sup> <a name="enforce_on_key_type_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyTypeInput"></a>

```python
enforce_on_key_type_input: str
```

- *Type:* str

---

##### `enforce_on_key_name`<sup>Required</sup> <a name="enforce_on_key_name" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyName"></a>

```python
enforce_on_key_name: str
```

- *Type:* str

---

##### `enforce_on_key_type`<sup>Required</sup> <a name="enforce_on_key_type" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyType"></a>

```python
enforce_on_key_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs">GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs</a>]

---


### GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference <a name="GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.putBanThreshold">put_ban_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.putEnforceOnKeyConfigs">put_enforce_on_key_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.putRateLimitThreshold">put_rate_limit_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.resetBanDurationSec">reset_ban_duration_sec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.resetBanThreshold">reset_ban_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.resetConformAction">reset_conform_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.resetEnforceOnKey">reset_enforce_on_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.resetEnforceOnKeyConfigs">reset_enforce_on_key_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.resetEnforceOnKeyName">reset_enforce_on_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.resetExceedAction">reset_exceed_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.resetRateLimitThreshold">reset_rate_limit_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ban_threshold` <a name="put_ban_threshold" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.putBanThreshold"></a>

```python
def put_ban_threshold(
  count: typing.Union[int, float] = None,
  interval_sec: typing.Union[int, float] = None
) -> None
```

###### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.putBanThreshold.parameter.count"></a>

- *Type:* typing.Union[int, float]

Number of HTTP(S) requests for calculating the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#count GoogleComputeRegionSecurityPolicyRule#count}

---

###### `interval_sec`<sup>Optional</sup> <a name="interval_sec" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.putBanThreshold.parameter.intervalSec"></a>

- *Type:* typing.Union[int, float]

Interval over which the threshold is computed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#interval_sec GoogleComputeRegionSecurityPolicyRule#interval_sec}

---

##### `put_enforce_on_key_configs` <a name="put_enforce_on_key_configs" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.putEnforceOnKeyConfigs"></a>

```python
def put_enforce_on_key_configs(
  value: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.putEnforceOnKeyConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs">GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs</a>]]

---

##### `put_rate_limit_threshold` <a name="put_rate_limit_threshold" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.putRateLimitThreshold"></a>

```python
def put_rate_limit_threshold(
  count: typing.Union[int, float] = None,
  interval_sec: typing.Union[int, float] = None
) -> None
```

###### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.putRateLimitThreshold.parameter.count"></a>

- *Type:* typing.Union[int, float]

Number of HTTP(S) requests for calculating the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#count GoogleComputeRegionSecurityPolicyRule#count}

---

###### `interval_sec`<sup>Optional</sup> <a name="interval_sec" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.putRateLimitThreshold.parameter.intervalSec"></a>

- *Type:* typing.Union[int, float]

Interval over which the threshold is computed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_security_policy_rule#interval_sec GoogleComputeRegionSecurityPolicyRule#interval_sec}

---

##### `reset_ban_duration_sec` <a name="reset_ban_duration_sec" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.resetBanDurationSec"></a>

```python
def reset_ban_duration_sec() -> None
```

##### `reset_ban_threshold` <a name="reset_ban_threshold" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.resetBanThreshold"></a>

```python
def reset_ban_threshold() -> None
```

##### `reset_conform_action` <a name="reset_conform_action" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.resetConformAction"></a>

```python
def reset_conform_action() -> None
```

##### `reset_enforce_on_key` <a name="reset_enforce_on_key" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.resetEnforceOnKey"></a>

```python
def reset_enforce_on_key() -> None
```

##### `reset_enforce_on_key_configs` <a name="reset_enforce_on_key_configs" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.resetEnforceOnKeyConfigs"></a>

```python
def reset_enforce_on_key_configs() -> None
```

##### `reset_enforce_on_key_name` <a name="reset_enforce_on_key_name" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.resetEnforceOnKeyName"></a>

```python
def reset_enforce_on_key_name() -> None
```

##### `reset_exceed_action` <a name="reset_exceed_action" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.resetExceedAction"></a>

```python
def reset_exceed_action() -> None
```

##### `reset_rate_limit_threshold` <a name="reset_rate_limit_threshold" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.resetRateLimitThreshold"></a>

```python
def reset_rate_limit_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.banThreshold">ban_threshold</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference">GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyConfigs">enforce_on_key_configs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList">GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.rateLimitThreshold">rate_limit_threshold</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference">GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.banDurationSecInput">ban_duration_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.banThresholdInput">ban_threshold_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold">GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.conformActionInput">conform_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyConfigsInput">enforce_on_key_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs">GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyInput">enforce_on_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyNameInput">enforce_on_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedActionInput">exceed_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.rateLimitThresholdInput">rate_limit_threshold_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold">GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.banDurationSec">ban_duration_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.conformAction">conform_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKey">enforce_on_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyName">enforce_on_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedAction">exceed_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptions">GoogleComputeRegionSecurityPolicyRuleRateLimitOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ban_threshold`<sup>Required</sup> <a name="ban_threshold" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.banThreshold"></a>

```python
ban_threshold: GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference">GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference</a>

---

##### `enforce_on_key_configs`<sup>Required</sup> <a name="enforce_on_key_configs" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyConfigs"></a>

```python
enforce_on_key_configs: GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList">GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList</a>

---

##### `rate_limit_threshold`<sup>Required</sup> <a name="rate_limit_threshold" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.rateLimitThreshold"></a>

```python
rate_limit_threshold: GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference">GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference</a>

---

##### `ban_duration_sec_input`<sup>Optional</sup> <a name="ban_duration_sec_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.banDurationSecInput"></a>

```python
ban_duration_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ban_threshold_input`<sup>Optional</sup> <a name="ban_threshold_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.banThresholdInput"></a>

```python
ban_threshold_input: GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold">GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold</a>

---

##### `conform_action_input`<sup>Optional</sup> <a name="conform_action_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.conformActionInput"></a>

```python
conform_action_input: str
```

- *Type:* str

---

##### `enforce_on_key_configs_input`<sup>Optional</sup> <a name="enforce_on_key_configs_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyConfigsInput"></a>

```python
enforce_on_key_configs_input: typing.Union[IResolvable, typing.List[GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs">GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs</a>]]

---

##### `enforce_on_key_input`<sup>Optional</sup> <a name="enforce_on_key_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyInput"></a>

```python
enforce_on_key_input: str
```

- *Type:* str

---

##### `enforce_on_key_name_input`<sup>Optional</sup> <a name="enforce_on_key_name_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyNameInput"></a>

```python
enforce_on_key_name_input: str
```

- *Type:* str

---

##### `exceed_action_input`<sup>Optional</sup> <a name="exceed_action_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedActionInput"></a>

```python
exceed_action_input: str
```

- *Type:* str

---

##### `rate_limit_threshold_input`<sup>Optional</sup> <a name="rate_limit_threshold_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.rateLimitThresholdInput"></a>

```python
rate_limit_threshold_input: GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold">GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold</a>

---

##### `ban_duration_sec`<sup>Required</sup> <a name="ban_duration_sec" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.banDurationSec"></a>

```python
ban_duration_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `conform_action`<sup>Required</sup> <a name="conform_action" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.conformAction"></a>

```python
conform_action: str
```

- *Type:* str

---

##### `enforce_on_key`<sup>Required</sup> <a name="enforce_on_key" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKey"></a>

```python
enforce_on_key: str
```

- *Type:* str

---

##### `enforce_on_key_name`<sup>Required</sup> <a name="enforce_on_key_name" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyName"></a>

```python
enforce_on_key_name: str
```

- *Type:* str

---

##### `exceed_action`<sup>Required</sup> <a name="exceed_action" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedAction"></a>

```python
exceed_action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeRegionSecurityPolicyRuleRateLimitOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptions">GoogleComputeRegionSecurityPolicyRuleRateLimitOptions</a>

---


### GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference <a name="GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.resetCount">reset_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.resetIntervalSec">reset_interval_sec</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_count` <a name="reset_count" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.resetCount"></a>

```python
def reset_count() -> None
```

##### `reset_interval_sec` <a name="reset_interval_sec" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.resetIntervalSec"></a>

```python
def reset_interval_sec() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSecInput">interval_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSec">interval_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold">GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_sec_input`<sup>Optional</sup> <a name="interval_sec_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSecInput"></a>

```python
interval_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_sec`<sup>Required</sup> <a name="interval_sec" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSec"></a>

```python
interval_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold">GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold</a>

---


### GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference <a name="GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_security_policy_rule

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeouts">GoogleComputeRegionSecurityPolicyRuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeRegionSecurityPolicyRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeouts">GoogleComputeRegionSecurityPolicyRuleTimeouts</a>]

---



