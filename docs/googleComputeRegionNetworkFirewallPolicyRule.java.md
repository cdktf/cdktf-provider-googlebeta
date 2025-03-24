# `googleComputeRegionNetworkFirewallPolicyRule` Submodule <a name="`googleComputeRegionNetworkFirewallPolicyRule` Submodule" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionNetworkFirewallPolicyRule <a name="GoogleComputeRegionNetworkFirewallPolicyRule" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule google_compute_region_network_firewall_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_network_firewall_policy_rule.GoogleComputeRegionNetworkFirewallPolicyRule;

GoogleComputeRegionNetworkFirewallPolicyRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .action(java.lang.String)
    .direction(java.lang.String)
    .firewallPolicy(java.lang.String)
    .match(GoogleComputeRegionNetworkFirewallPolicyRuleMatch)
    .priority(java.lang.Number)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .enableLogging(java.lang.Boolean)
//  .enableLogging(IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .ruleName(java.lang.String)
//  .securityProfileGroup(java.lang.String)
//  .targetSecureTags(IResolvable)
//  .targetSecureTags(java.util.List<GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags>)
//  .targetServiceAccounts(java.util.List<java.lang.String>)
//  .timeouts(GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts)
//  .tlsInspect(java.lang.Boolean)
//  .tlsInspect(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.action">action</a></code> | <code>java.lang.String</code> | The Action to perform when the client connection triggers the rule. Valid actions are "allow", "deny", "goto_next" and "apply_security_profile_group". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.direction">direction</a></code> | <code>java.lang.String</code> | The direction in which this rule applies. Possible values: ["INGRESS", "EGRESS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.firewallPolicy">firewallPolicy</a></code> | <code>java.lang.String</code> | The firewall policy of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.match">match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch">GoogleComputeRegionNetworkFirewallPolicyRuleMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description for this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Denotes whether the firewall policy rule is disabled. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.enableLogging">enableLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Denotes whether to enable logging for a particular rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#id GoogleComputeRegionNetworkFirewallPolicyRule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#project GoogleComputeRegionNetworkFirewallPolicyRule#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The location of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.ruleName">ruleName</a></code> | <code>java.lang.String</code> | An optional name for the rule. This field is not a unique identifier and can be updated. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.securityProfileGroup">securityProfileGroup</a></code> | <code>java.lang.String</code> | A fully-qualified URL of a SecurityProfile resource instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.targetSecureTags">targetSecureTags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags">GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags</a>></code> | target_secure_tags block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.targetServiceAccounts">targetServiceAccounts</a></code> | <code>java.util.List<java.lang.String></code> | A list of service accounts indicating the sets of instances that are applied with this rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts">GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.tlsInspect">tlsInspect</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean flag indicating if the traffic should be TLS decrypted. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.action"></a>

- *Type:* java.lang.String

The Action to perform when the client connection triggers the rule. Valid actions are "allow", "deny", "goto_next" and "apply_security_profile_group".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#action GoogleComputeRegionNetworkFirewallPolicyRule#action}

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.direction"></a>

- *Type:* java.lang.String

The direction in which this rule applies. Possible values: ["INGRESS", "EGRESS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#direction GoogleComputeRegionNetworkFirewallPolicyRule#direction}

---

##### `firewallPolicy`<sup>Required</sup> <a name="firewallPolicy" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.firewallPolicy"></a>

- *Type:* java.lang.String

The firewall policy of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#firewall_policy GoogleComputeRegionNetworkFirewallPolicyRule#firewall_policy}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.match"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch">GoogleComputeRegionNetworkFirewallPolicyRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#match GoogleComputeRegionNetworkFirewallPolicyRule#match}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

An integer indicating the priority of a rule in the list.

The priority must be a positive value between 0 and 2147483647.
Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest prority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#priority GoogleComputeRegionNetworkFirewallPolicyRule#priority}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#description GoogleComputeRegionNetworkFirewallPolicyRule#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.disabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Denotes whether the firewall policy rule is disabled.

When set to true, the firewall policy rule is not enforced and traffic behaves as if it did not exist.
If this is unspecified, the firewall policy rule will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#disabled GoogleComputeRegionNetworkFirewallPolicyRule#disabled}

---

##### `enableLogging`<sup>Optional</sup> <a name="enableLogging" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.enableLogging"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Denotes whether to enable logging for a particular rule.

If logging is enabled, logs will be exported to the configured export destination in Stackdriver.
Logs may be exported to BigQuery or Pub/Sub.
Note: you cannot enable logging on "goto_next" rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#enable_logging GoogleComputeRegionNetworkFirewallPolicyRule#enable_logging}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#id GoogleComputeRegionNetworkFirewallPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#project GoogleComputeRegionNetworkFirewallPolicyRule#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The location of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#region GoogleComputeRegionNetworkFirewallPolicyRule#region}

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.ruleName"></a>

- *Type:* java.lang.String

An optional name for the rule. This field is not a unique identifier and can be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#rule_name GoogleComputeRegionNetworkFirewallPolicyRule#rule_name}

---

##### `securityProfileGroup`<sup>Optional</sup> <a name="securityProfileGroup" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.securityProfileGroup"></a>

- *Type:* java.lang.String

A fully-qualified URL of a SecurityProfile resource instance.

Example: https://networksecurity.googleapis.com/v1/projects/{project}/locations/{location}/securityProfileGroups/my-security-profile-group
Must be specified if action = 'apply_security_profile_group' and cannot be specified for other actions.

Security Profile Group and Firewall Policy Rule must be in the same scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#security_profile_group GoogleComputeRegionNetworkFirewallPolicyRule#security_profile_group}

---

##### `targetSecureTags`<sup>Optional</sup> <a name="targetSecureTags" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.targetSecureTags"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags">GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags</a>>

target_secure_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#target_secure_tags GoogleComputeRegionNetworkFirewallPolicyRule#target_secure_tags}

---

##### `targetServiceAccounts`<sup>Optional</sup> <a name="targetServiceAccounts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.targetServiceAccounts"></a>

- *Type:* java.util.List<java.lang.String>

A list of service accounts indicating the sets of instances that are applied with this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#target_service_accounts GoogleComputeRegionNetworkFirewallPolicyRule#target_service_accounts}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts">GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#timeouts GoogleComputeRegionNetworkFirewallPolicyRule#timeouts}

---

##### `tlsInspect`<sup>Optional</sup> <a name="tlsInspect" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.tlsInspect"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean flag indicating if the traffic should be TLS decrypted.

Can be set only if action = 'apply_security_profile_group' and cannot be set for other actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#tls_inspect GoogleComputeRegionNetworkFirewallPolicyRule#tls_inspect}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.putTargetSecureTags">putTargetSecureTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetEnableLogging">resetEnableLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetRuleName">resetRuleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetSecurityProfileGroup">resetSecurityProfileGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetTargetSecureTags">resetTargetSecureTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetTargetServiceAccounts">resetTargetServiceAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetTlsInspect">resetTlsInspect</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMatch` <a name="putMatch" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.putMatch"></a>

```java
public void putMatch(GoogleComputeRegionNetworkFirewallPolicyRuleMatch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch">GoogleComputeRegionNetworkFirewallPolicyRuleMatch</a>

---

##### `putTargetSecureTags` <a name="putTargetSecureTags" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.putTargetSecureTags"></a>

```java
public void putTargetSecureTags(IResolvable OR java.util.List<GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.putTargetSecureTags.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags">GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts">GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetEnableLogging` <a name="resetEnableLogging" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetEnableLogging"></a>

```java
public void resetEnableLogging()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRuleName` <a name="resetRuleName" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetRuleName"></a>

```java
public void resetRuleName()
```

##### `resetSecurityProfileGroup` <a name="resetSecurityProfileGroup" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetSecurityProfileGroup"></a>

```java
public void resetSecurityProfileGroup()
```

##### `resetTargetSecureTags` <a name="resetTargetSecureTags" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetTargetSecureTags"></a>

```java
public void resetTargetSecureTags()
```

##### `resetTargetServiceAccounts` <a name="resetTargetServiceAccounts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetTargetServiceAccounts"></a>

```java
public void resetTargetServiceAccounts()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTlsInspect` <a name="resetTlsInspect" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.resetTlsInspect"></a>

```java
public void resetTlsInspect()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeRegionNetworkFirewallPolicyRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_network_firewall_policy_rule.GoogleComputeRegionNetworkFirewallPolicyRule;

GoogleComputeRegionNetworkFirewallPolicyRule.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_network_firewall_policy_rule.GoogleComputeRegionNetworkFirewallPolicyRule;

GoogleComputeRegionNetworkFirewallPolicyRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_network_firewall_policy_rule.GoogleComputeRegionNetworkFirewallPolicyRule;

GoogleComputeRegionNetworkFirewallPolicyRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_network_firewall_policy_rule.GoogleComputeRegionNetworkFirewallPolicyRule;

GoogleComputeRegionNetworkFirewallPolicyRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputeRegionNetworkFirewallPolicyRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleComputeRegionNetworkFirewallPolicyRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputeRegionNetworkFirewallPolicyRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputeRegionNetworkFirewallPolicyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRegionNetworkFirewallPolicyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.match">match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference">GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.ruleTupleCount">ruleTupleCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.targetSecureTags">targetSecureTags</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList">GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference">GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.enableLoggingInput">enableLoggingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.firewallPolicyInput">firewallPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.matchInput">matchInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch">GoogleComputeRegionNetworkFirewallPolicyRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.ruleNameInput">ruleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.securityProfileGroupInput">securityProfileGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.targetSecureTagsInput">targetSecureTagsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags">GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.targetServiceAccountsInput">targetServiceAccountsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts">GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.tlsInspectInput">tlsInspectInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.enableLogging">enableLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.firewallPolicy">firewallPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.securityProfileGroup">securityProfileGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.targetServiceAccounts">targetServiceAccounts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.tlsInspect">tlsInspect</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.match"></a>

```java
public GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference getMatch();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference">GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference</a>

---

##### `ruleTupleCount`<sup>Required</sup> <a name="ruleTupleCount" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.ruleTupleCount"></a>

```java
public java.lang.Number getRuleTupleCount();
```

- *Type:* java.lang.Number

---

##### `targetSecureTags`<sup>Required</sup> <a name="targetSecureTags" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.targetSecureTags"></a>

```java
public GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList getTargetSecureTags();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList">GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.timeouts"></a>

```java
public GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference">GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.disabledInput"></a>

```java
public java.lang.Object getDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableLoggingInput`<sup>Optional</sup> <a name="enableLoggingInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.enableLoggingInput"></a>

```java
public java.lang.Object getEnableLoggingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `firewallPolicyInput`<sup>Optional</sup> <a name="firewallPolicyInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.firewallPolicyInput"></a>

```java
public java.lang.String getFirewallPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.matchInput"></a>

```java
public GoogleComputeRegionNetworkFirewallPolicyRuleMatch getMatchInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch">GoogleComputeRegionNetworkFirewallPolicyRuleMatch</a>

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.ruleNameInput"></a>

```java
public java.lang.String getRuleNameInput();
```

- *Type:* java.lang.String

---

##### `securityProfileGroupInput`<sup>Optional</sup> <a name="securityProfileGroupInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.securityProfileGroupInput"></a>

```java
public java.lang.String getSecurityProfileGroupInput();
```

- *Type:* java.lang.String

---

##### `targetSecureTagsInput`<sup>Optional</sup> <a name="targetSecureTagsInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.targetSecureTagsInput"></a>

```java
public java.lang.Object getTargetSecureTagsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags">GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags</a>>

---

##### `targetServiceAccountsInput`<sup>Optional</sup> <a name="targetServiceAccountsInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.targetServiceAccountsInput"></a>

```java
public java.util.List<java.lang.String> getTargetServiceAccountsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts">GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts</a>

---

##### `tlsInspectInput`<sup>Optional</sup> <a name="tlsInspectInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.tlsInspectInput"></a>

```java
public java.lang.Object getTlsInspectInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableLogging`<sup>Required</sup> <a name="enableLogging" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.enableLogging"></a>

```java
public java.lang.Object getEnableLogging();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `firewallPolicy`<sup>Required</sup> <a name="firewallPolicy" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.firewallPolicy"></a>

```java
public java.lang.String getFirewallPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

---

##### `securityProfileGroup`<sup>Required</sup> <a name="securityProfileGroup" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.securityProfileGroup"></a>

```java
public java.lang.String getSecurityProfileGroup();
```

- *Type:* java.lang.String

---

##### `targetServiceAccounts`<sup>Required</sup> <a name="targetServiceAccounts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.targetServiceAccounts"></a>

```java
public java.util.List<java.lang.String> getTargetServiceAccounts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tlsInspect`<sup>Required</sup> <a name="tlsInspect" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.tlsInspect"></a>

```java
public java.lang.Object getTlsInspect();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionNetworkFirewallPolicyRuleConfig <a name="GoogleComputeRegionNetworkFirewallPolicyRuleConfig" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_network_firewall_policy_rule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig;

GoogleComputeRegionNetworkFirewallPolicyRuleConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .action(java.lang.String)
    .direction(java.lang.String)
    .firewallPolicy(java.lang.String)
    .match(GoogleComputeRegionNetworkFirewallPolicyRuleMatch)
    .priority(java.lang.Number)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .enableLogging(java.lang.Boolean)
//  .enableLogging(IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .ruleName(java.lang.String)
//  .securityProfileGroup(java.lang.String)
//  .targetSecureTags(IResolvable)
//  .targetSecureTags(java.util.List<GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags>)
//  .targetServiceAccounts(java.util.List<java.lang.String>)
//  .timeouts(GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts)
//  .tlsInspect(java.lang.Boolean)
//  .tlsInspect(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.action">action</a></code> | <code>java.lang.String</code> | The Action to perform when the client connection triggers the rule. Valid actions are "allow", "deny", "goto_next" and "apply_security_profile_group". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.direction">direction</a></code> | <code>java.lang.String</code> | The direction in which this rule applies. Possible values: ["INGRESS", "EGRESS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.firewallPolicy">firewallPolicy</a></code> | <code>java.lang.String</code> | The firewall policy of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.match">match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch">GoogleComputeRegionNetworkFirewallPolicyRuleMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description for this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Denotes whether the firewall policy rule is disabled. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.enableLogging">enableLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Denotes whether to enable logging for a particular rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#id GoogleComputeRegionNetworkFirewallPolicyRule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#project GoogleComputeRegionNetworkFirewallPolicyRule#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.region">region</a></code> | <code>java.lang.String</code> | The location of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | An optional name for the rule. This field is not a unique identifier and can be updated. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.securityProfileGroup">securityProfileGroup</a></code> | <code>java.lang.String</code> | A fully-qualified URL of a SecurityProfile resource instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.targetSecureTags">targetSecureTags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags">GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags</a>></code> | target_secure_tags block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.targetServiceAccounts">targetServiceAccounts</a></code> | <code>java.util.List<java.lang.String></code> | A list of service accounts indicating the sets of instances that are applied with this rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts">GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.tlsInspect">tlsInspect</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean flag indicating if the traffic should be TLS decrypted. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

The Action to perform when the client connection triggers the rule. Valid actions are "allow", "deny", "goto_next" and "apply_security_profile_group".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#action GoogleComputeRegionNetworkFirewallPolicyRule#action}

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

The direction in which this rule applies. Possible values: ["INGRESS", "EGRESS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#direction GoogleComputeRegionNetworkFirewallPolicyRule#direction}

---

##### `firewallPolicy`<sup>Required</sup> <a name="firewallPolicy" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.firewallPolicy"></a>

```java
public java.lang.String getFirewallPolicy();
```

- *Type:* java.lang.String

The firewall policy of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#firewall_policy GoogleComputeRegionNetworkFirewallPolicyRule#firewall_policy}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.match"></a>

```java
public GoogleComputeRegionNetworkFirewallPolicyRuleMatch getMatch();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch">GoogleComputeRegionNetworkFirewallPolicyRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#match GoogleComputeRegionNetworkFirewallPolicyRule#match}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

An integer indicating the priority of a rule in the list.

The priority must be a positive value between 0 and 2147483647.
Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest prority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#priority GoogleComputeRegionNetworkFirewallPolicyRule#priority}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#description GoogleComputeRegionNetworkFirewallPolicyRule#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Denotes whether the firewall policy rule is disabled.

When set to true, the firewall policy rule is not enforced and traffic behaves as if it did not exist.
If this is unspecified, the firewall policy rule will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#disabled GoogleComputeRegionNetworkFirewallPolicyRule#disabled}

---

##### `enableLogging`<sup>Optional</sup> <a name="enableLogging" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.enableLogging"></a>

```java
public java.lang.Object getEnableLogging();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Denotes whether to enable logging for a particular rule.

If logging is enabled, logs will be exported to the configured export destination in Stackdriver.
Logs may be exported to BigQuery or Pub/Sub.
Note: you cannot enable logging on "goto_next" rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#enable_logging GoogleComputeRegionNetworkFirewallPolicyRule#enable_logging}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#id GoogleComputeRegionNetworkFirewallPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#project GoogleComputeRegionNetworkFirewallPolicyRule#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The location of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#region GoogleComputeRegionNetworkFirewallPolicyRule#region}

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

An optional name for the rule. This field is not a unique identifier and can be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#rule_name GoogleComputeRegionNetworkFirewallPolicyRule#rule_name}

---

##### `securityProfileGroup`<sup>Optional</sup> <a name="securityProfileGroup" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.securityProfileGroup"></a>

```java
public java.lang.String getSecurityProfileGroup();
```

- *Type:* java.lang.String

A fully-qualified URL of a SecurityProfile resource instance.

Example: https://networksecurity.googleapis.com/v1/projects/{project}/locations/{location}/securityProfileGroups/my-security-profile-group
Must be specified if action = 'apply_security_profile_group' and cannot be specified for other actions.

Security Profile Group and Firewall Policy Rule must be in the same scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#security_profile_group GoogleComputeRegionNetworkFirewallPolicyRule#security_profile_group}

---

##### `targetSecureTags`<sup>Optional</sup> <a name="targetSecureTags" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.targetSecureTags"></a>

```java
public java.lang.Object getTargetSecureTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags">GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags</a>>

target_secure_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#target_secure_tags GoogleComputeRegionNetworkFirewallPolicyRule#target_secure_tags}

---

##### `targetServiceAccounts`<sup>Optional</sup> <a name="targetServiceAccounts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.targetServiceAccounts"></a>

```java
public java.util.List<java.lang.String> getTargetServiceAccounts();
```

- *Type:* java.util.List<java.lang.String>

A list of service accounts indicating the sets of instances that are applied with this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#target_service_accounts GoogleComputeRegionNetworkFirewallPolicyRule#target_service_accounts}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.timeouts"></a>

```java
public GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts">GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#timeouts GoogleComputeRegionNetworkFirewallPolicyRule#timeouts}

---

##### `tlsInspect`<sup>Optional</sup> <a name="tlsInspect" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleConfig.property.tlsInspect"></a>

```java
public java.lang.Object getTlsInspect();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean flag indicating if the traffic should be TLS decrypted.

Can be set only if action = 'apply_security_profile_group' and cannot be set for other actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#tls_inspect GoogleComputeRegionNetworkFirewallPolicyRule#tls_inspect}

---

### GoogleComputeRegionNetworkFirewallPolicyRuleMatch <a name="GoogleComputeRegionNetworkFirewallPolicyRuleMatch" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_network_firewall_policy_rule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch;

GoogleComputeRegionNetworkFirewallPolicyRuleMatch.builder()
    .layer4Configs(IResolvable)
    .layer4Configs(java.util.List<GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs>)
//  .destAddressGroups(java.util.List<java.lang.String>)
//  .destFqdns(java.util.List<java.lang.String>)
//  .destIpRanges(java.util.List<java.lang.String>)
//  .destNetworkScope(java.lang.String)
//  .destRegionCodes(java.util.List<java.lang.String>)
//  .destThreatIntelligences(java.util.List<java.lang.String>)
//  .srcAddressGroups(java.util.List<java.lang.String>)
//  .srcFqdns(java.util.List<java.lang.String>)
//  .srcIpRanges(java.util.List<java.lang.String>)
//  .srcNetworks(java.util.List<java.lang.String>)
//  .srcNetworkScope(java.lang.String)
//  .srcRegionCodes(java.util.List<java.lang.String>)
//  .srcSecureTags(IResolvable)
//  .srcSecureTags(java.util.List<GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags>)
//  .srcThreatIntelligences(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.layer4Configs">layer4Configs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs">GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs</a>></code> | layer4_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.destAddressGroups">destAddressGroups</a></code> | <code>java.util.List<java.lang.String></code> | Address groups which should be matched against the traffic destination. Maximum number of destination address groups is 10. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.destFqdns">destFqdns</a></code> | <code>java.util.List<java.lang.String></code> | Fully Qualified Domain Name (FQDN) which should be matched against traffic destination. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.destIpRanges">destIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 5000. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.destNetworkScope">destNetworkScope</a></code> | <code>java.lang.String</code> | Network scope of the traffic destination. Possible values: ["INTERNET", "INTRA_VPC", "NON_INTERNET", "VPC_NETWORKS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.destRegionCodes">destRegionCodes</a></code> | <code>java.util.List<java.lang.String></code> | Region codes whose IP addresses will be used to match for destination of traffic. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.destThreatIntelligences">destThreatIntelligences</a></code> | <code>java.util.List<java.lang.String></code> | Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic destination. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.srcAddressGroups">srcAddressGroups</a></code> | <code>java.util.List<java.lang.String></code> | Address groups which should be matched against the traffic source. Maximum number of source address groups is 10. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.srcFqdns">srcFqdns</a></code> | <code>java.util.List<java.lang.String></code> | Fully Qualified Domain Name (FQDN) which should be matched against traffic source. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.srcIpRanges">srcIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 5000. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.srcNetworks">srcNetworks</a></code> | <code>java.util.List<java.lang.String></code> | Networks of the traffic source. It can be either a full or partial url. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.srcNetworkScope">srcNetworkScope</a></code> | <code>java.lang.String</code> | Network scope of the traffic source. Possible values: ["INTERNET", "INTRA_VPC", "NON_INTERNET", "VPC_NETWORKS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.srcRegionCodes">srcRegionCodes</a></code> | <code>java.util.List<java.lang.String></code> | Region codes whose IP addresses will be used to match for source of traffic. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.srcSecureTags">srcSecureTags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags">GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags</a>></code> | src_secure_tags block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.srcThreatIntelligences">srcThreatIntelligences</a></code> | <code>java.util.List<java.lang.String></code> | Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic source. |

---

##### `layer4Configs`<sup>Required</sup> <a name="layer4Configs" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.layer4Configs"></a>

```java
public java.lang.Object getLayer4Configs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs">GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs</a>>

layer4_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#layer4_configs GoogleComputeRegionNetworkFirewallPolicyRule#layer4_configs}

---

##### `destAddressGroups`<sup>Optional</sup> <a name="destAddressGroups" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.destAddressGroups"></a>

```java
public java.util.List<java.lang.String> getDestAddressGroups();
```

- *Type:* java.util.List<java.lang.String>

Address groups which should be matched against the traffic destination. Maximum number of destination address groups is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#dest_address_groups GoogleComputeRegionNetworkFirewallPolicyRule#dest_address_groups}

---

##### `destFqdns`<sup>Optional</sup> <a name="destFqdns" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.destFqdns"></a>

```java
public java.util.List<java.lang.String> getDestFqdns();
```

- *Type:* java.util.List<java.lang.String>

Fully Qualified Domain Name (FQDN) which should be matched against traffic destination.

Maximum number of destination fqdn allowed is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#dest_fqdns GoogleComputeRegionNetworkFirewallPolicyRule#dest_fqdns}

---

##### `destIpRanges`<sup>Optional</sup> <a name="destIpRanges" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.destIpRanges"></a>

```java
public java.util.List<java.lang.String> getDestIpRanges();
```

- *Type:* java.util.List<java.lang.String>

CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#dest_ip_ranges GoogleComputeRegionNetworkFirewallPolicyRule#dest_ip_ranges}

---

##### `destNetworkScope`<sup>Optional</sup> <a name="destNetworkScope" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.destNetworkScope"></a>

```java
public java.lang.String getDestNetworkScope();
```

- *Type:* java.lang.String

Network scope of the traffic destination. Possible values: ["INTERNET", "INTRA_VPC", "NON_INTERNET", "VPC_NETWORKS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#dest_network_scope GoogleComputeRegionNetworkFirewallPolicyRule#dest_network_scope}

---

##### `destRegionCodes`<sup>Optional</sup> <a name="destRegionCodes" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.destRegionCodes"></a>

```java
public java.util.List<java.lang.String> getDestRegionCodes();
```

- *Type:* java.util.List<java.lang.String>

Region codes whose IP addresses will be used to match for destination of traffic.

Should be specified as 2 letter country code defined as per ISO 3166 alpha-2 country codes. ex."US" Maximum number of dest region codes allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#dest_region_codes GoogleComputeRegionNetworkFirewallPolicyRule#dest_region_codes}

---

##### `destThreatIntelligences`<sup>Optional</sup> <a name="destThreatIntelligences" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.destThreatIntelligences"></a>

```java
public java.util.List<java.lang.String> getDestThreatIntelligences();
```

- *Type:* java.util.List<java.lang.String>

Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#dest_threat_intelligences GoogleComputeRegionNetworkFirewallPolicyRule#dest_threat_intelligences}

---

##### `srcAddressGroups`<sup>Optional</sup> <a name="srcAddressGroups" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.srcAddressGroups"></a>

```java
public java.util.List<java.lang.String> getSrcAddressGroups();
```

- *Type:* java.util.List<java.lang.String>

Address groups which should be matched against the traffic source. Maximum number of source address groups is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#src_address_groups GoogleComputeRegionNetworkFirewallPolicyRule#src_address_groups}

---

##### `srcFqdns`<sup>Optional</sup> <a name="srcFqdns" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.srcFqdns"></a>

```java
public java.util.List<java.lang.String> getSrcFqdns();
```

- *Type:* java.util.List<java.lang.String>

Fully Qualified Domain Name (FQDN) which should be matched against traffic source.

Maximum number of source fqdn allowed is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#src_fqdns GoogleComputeRegionNetworkFirewallPolicyRule#src_fqdns}

---

##### `srcIpRanges`<sup>Optional</sup> <a name="srcIpRanges" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.srcIpRanges"></a>

```java
public java.util.List<java.lang.String> getSrcIpRanges();
```

- *Type:* java.util.List<java.lang.String>

CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#src_ip_ranges GoogleComputeRegionNetworkFirewallPolicyRule#src_ip_ranges}

---

##### `srcNetworks`<sup>Optional</sup> <a name="srcNetworks" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.srcNetworks"></a>

```java
public java.util.List<java.lang.String> getSrcNetworks();
```

- *Type:* java.util.List<java.lang.String>

Networks of the traffic source. It can be either a full or partial url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#src_networks GoogleComputeRegionNetworkFirewallPolicyRule#src_networks}

---

##### `srcNetworkScope`<sup>Optional</sup> <a name="srcNetworkScope" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.srcNetworkScope"></a>

```java
public java.lang.String getSrcNetworkScope();
```

- *Type:* java.lang.String

Network scope of the traffic source. Possible values: ["INTERNET", "INTRA_VPC", "NON_INTERNET", "VPC_NETWORKS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#src_network_scope GoogleComputeRegionNetworkFirewallPolicyRule#src_network_scope}

---

##### `srcRegionCodes`<sup>Optional</sup> <a name="srcRegionCodes" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.srcRegionCodes"></a>

```java
public java.util.List<java.lang.String> getSrcRegionCodes();
```

- *Type:* java.util.List<java.lang.String>

Region codes whose IP addresses will be used to match for source of traffic.

Should be specified as 2 letter country code defined as per ISO 3166 alpha-2 country codes. ex."US" Maximum number of source region codes allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#src_region_codes GoogleComputeRegionNetworkFirewallPolicyRule#src_region_codes}

---

##### `srcSecureTags`<sup>Optional</sup> <a name="srcSecureTags" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.srcSecureTags"></a>

```java
public java.lang.Object getSrcSecureTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags">GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags</a>>

src_secure_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#src_secure_tags GoogleComputeRegionNetworkFirewallPolicyRule#src_secure_tags}

---

##### `srcThreatIntelligences`<sup>Optional</sup> <a name="srcThreatIntelligences" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch.property.srcThreatIntelligences"></a>

```java
public java.util.List<java.lang.String> getSrcThreatIntelligences();
```

- *Type:* java.util.List<java.lang.String>

Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#src_threat_intelligences GoogleComputeRegionNetworkFirewallPolicyRule#src_threat_intelligences}

---

### GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs <a name="GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_network_firewall_policy_rule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs;

GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs.builder()
    .ipProtocol(java.lang.String)
//  .ports(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs.property.ipProtocol">ipProtocol</a></code> | <code>java.lang.String</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs.property.ports">ports</a></code> | <code>java.util.List<java.lang.String></code> | An optional list of ports to which this rule applies. |

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs.property.ipProtocol"></a>

```java
public java.lang.String getIpProtocol();
```

- *Type:* java.lang.String

The IP protocol to which this rule applies.

The protocol type is required when creating a firewall rule.
This value can either be one of the following well known protocol strings (tcp, udp, icmp, esp, ah, ipip, sctp), or the IP protocol number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#ip_protocol GoogleComputeRegionNetworkFirewallPolicyRule#ip_protocol}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs.property.ports"></a>

```java
public java.util.List<java.lang.String> getPorts();
```

- *Type:* java.util.List<java.lang.String>

An optional list of ports to which this rule applies.

This field is only applicable for UDP or TCP protocol. Each entry must be either an integer or a range. If not specified, this rule applies to connections through any port.
Example inputs include: ["22"], ["80","443"], and ["12345-12349"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#ports GoogleComputeRegionNetworkFirewallPolicyRule#ports}

---

### GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags <a name="GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_network_firewall_policy_rule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags;

GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags.builder()
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags.property.name">name</a></code> | <code>java.lang.String</code> | Name of the secure tag, created with TagManager's TagValue API. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the secure tag, created with TagManager's TagValue API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#name GoogleComputeRegionNetworkFirewallPolicyRule#name}

---

### GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags <a name="GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_network_firewall_policy_rule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags;

GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags.builder()
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags.property.name">name</a></code> | <code>java.lang.String</code> | Name of the secure tag, created with TagManager's TagValue API. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the secure tag, created with TagManager's TagValue API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#name GoogleComputeRegionNetworkFirewallPolicyRule#name}

---

### GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts <a name="GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_network_firewall_policy_rule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts;

GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#create GoogleComputeRegionNetworkFirewallPolicyRule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#delete GoogleComputeRegionNetworkFirewallPolicyRule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#update GoogleComputeRegionNetworkFirewallPolicyRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#create GoogleComputeRegionNetworkFirewallPolicyRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#delete GoogleComputeRegionNetworkFirewallPolicyRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_network_firewall_policy_rule#update GoogleComputeRegionNetworkFirewallPolicyRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList <a name="GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_network_firewall_policy_rule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList;

new GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.get"></a>

```java
public GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs">GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs">GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs</a>>

---


### GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference <a name="GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_network_firewall_policy_rule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference;

new GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resetPorts">resetPorts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPorts` <a name="resetPorts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resetPorts"></a>

```java
public void resetPorts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ipProtocolInput">ipProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.portsInput">portsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ipProtocol">ipProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ports">ports</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs">GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipProtocolInput`<sup>Optional</sup> <a name="ipProtocolInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ipProtocolInput"></a>

```java
public java.lang.String getIpProtocolInput();
```

- *Type:* java.lang.String

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.portsInput"></a>

```java
public java.util.List<java.lang.String> getPortsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ipProtocol"></a>

```java
public java.lang.String getIpProtocol();
```

- *Type:* java.lang.String

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ports"></a>

```java
public java.util.List<java.lang.String> getPorts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs">GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs</a>

---


### GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference <a name="GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_network_firewall_policy_rule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference;

new GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.putLayer4Configs">putLayer4Configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.putSrcSecureTags">putSrcSecureTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetDestAddressGroups">resetDestAddressGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetDestFqdns">resetDestFqdns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetDestIpRanges">resetDestIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetDestNetworkScope">resetDestNetworkScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetDestRegionCodes">resetDestRegionCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetDestThreatIntelligences">resetDestThreatIntelligences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcAddressGroups">resetSrcAddressGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcFqdns">resetSrcFqdns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcIpRanges">resetSrcIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcNetworks">resetSrcNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcNetworkScope">resetSrcNetworkScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcRegionCodes">resetSrcRegionCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcSecureTags">resetSrcSecureTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcThreatIntelligences">resetSrcThreatIntelligences</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLayer4Configs` <a name="putLayer4Configs" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.putLayer4Configs"></a>

```java
public void putLayer4Configs(IResolvable OR java.util.List<GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.putLayer4Configs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs">GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs</a>>

---

##### `putSrcSecureTags` <a name="putSrcSecureTags" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.putSrcSecureTags"></a>

```java
public void putSrcSecureTags(IResolvable OR java.util.List<GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.putSrcSecureTags.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags">GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags</a>>

---

##### `resetDestAddressGroups` <a name="resetDestAddressGroups" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetDestAddressGroups"></a>

```java
public void resetDestAddressGroups()
```

##### `resetDestFqdns` <a name="resetDestFqdns" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetDestFqdns"></a>

```java
public void resetDestFqdns()
```

##### `resetDestIpRanges` <a name="resetDestIpRanges" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetDestIpRanges"></a>

```java
public void resetDestIpRanges()
```

##### `resetDestNetworkScope` <a name="resetDestNetworkScope" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetDestNetworkScope"></a>

```java
public void resetDestNetworkScope()
```

##### `resetDestRegionCodes` <a name="resetDestRegionCodes" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetDestRegionCodes"></a>

```java
public void resetDestRegionCodes()
```

##### `resetDestThreatIntelligences` <a name="resetDestThreatIntelligences" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetDestThreatIntelligences"></a>

```java
public void resetDestThreatIntelligences()
```

##### `resetSrcAddressGroups` <a name="resetSrcAddressGroups" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcAddressGroups"></a>

```java
public void resetSrcAddressGroups()
```

##### `resetSrcFqdns` <a name="resetSrcFqdns" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcFqdns"></a>

```java
public void resetSrcFqdns()
```

##### `resetSrcIpRanges` <a name="resetSrcIpRanges" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcIpRanges"></a>

```java
public void resetSrcIpRanges()
```

##### `resetSrcNetworks` <a name="resetSrcNetworks" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcNetworks"></a>

```java
public void resetSrcNetworks()
```

##### `resetSrcNetworkScope` <a name="resetSrcNetworkScope" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcNetworkScope"></a>

```java
public void resetSrcNetworkScope()
```

##### `resetSrcRegionCodes` <a name="resetSrcRegionCodes" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcRegionCodes"></a>

```java
public void resetSrcRegionCodes()
```

##### `resetSrcSecureTags` <a name="resetSrcSecureTags" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcSecureTags"></a>

```java
public void resetSrcSecureTags()
```

##### `resetSrcThreatIntelligences` <a name="resetSrcThreatIntelligences" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcThreatIntelligences"></a>

```java
public void resetSrcThreatIntelligences()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.layer4Configs">layer4Configs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList">GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcSecureTags">srcSecureTags</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList">GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destAddressGroupsInput">destAddressGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destFqdnsInput">destFqdnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destIpRangesInput">destIpRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destNetworkScopeInput">destNetworkScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destRegionCodesInput">destRegionCodesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destThreatIntelligencesInput">destThreatIntelligencesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.layer4ConfigsInput">layer4ConfigsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs">GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcAddressGroupsInput">srcAddressGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcFqdnsInput">srcFqdnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcIpRangesInput">srcIpRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcNetworkScopeInput">srcNetworkScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcNetworksInput">srcNetworksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcRegionCodesInput">srcRegionCodesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcSecureTagsInput">srcSecureTagsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags">GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcThreatIntelligencesInput">srcThreatIntelligencesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destAddressGroups">destAddressGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destFqdns">destFqdns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destIpRanges">destIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destNetworkScope">destNetworkScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destRegionCodes">destRegionCodes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destThreatIntelligences">destThreatIntelligences</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcAddressGroups">srcAddressGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcFqdns">srcFqdns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcIpRanges">srcIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcNetworks">srcNetworks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcNetworkScope">srcNetworkScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcRegionCodes">srcRegionCodes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcThreatIntelligences">srcThreatIntelligences</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch">GoogleComputeRegionNetworkFirewallPolicyRuleMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `layer4Configs`<sup>Required</sup> <a name="layer4Configs" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.layer4Configs"></a>

```java
public GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList getLayer4Configs();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList">GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList</a>

---

##### `srcSecureTags`<sup>Required</sup> <a name="srcSecureTags" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcSecureTags"></a>

```java
public GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList getSrcSecureTags();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList">GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList</a>

---

##### `destAddressGroupsInput`<sup>Optional</sup> <a name="destAddressGroupsInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destAddressGroupsInput"></a>

```java
public java.util.List<java.lang.String> getDestAddressGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destFqdnsInput`<sup>Optional</sup> <a name="destFqdnsInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destFqdnsInput"></a>

```java
public java.util.List<java.lang.String> getDestFqdnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destIpRangesInput`<sup>Optional</sup> <a name="destIpRangesInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destIpRangesInput"></a>

```java
public java.util.List<java.lang.String> getDestIpRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destNetworkScopeInput`<sup>Optional</sup> <a name="destNetworkScopeInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destNetworkScopeInput"></a>

```java
public java.lang.String getDestNetworkScopeInput();
```

- *Type:* java.lang.String

---

##### `destRegionCodesInput`<sup>Optional</sup> <a name="destRegionCodesInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destRegionCodesInput"></a>

```java
public java.util.List<java.lang.String> getDestRegionCodesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destThreatIntelligencesInput`<sup>Optional</sup> <a name="destThreatIntelligencesInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destThreatIntelligencesInput"></a>

```java
public java.util.List<java.lang.String> getDestThreatIntelligencesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `layer4ConfigsInput`<sup>Optional</sup> <a name="layer4ConfigsInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.layer4ConfigsInput"></a>

```java
public java.lang.Object getLayer4ConfigsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs">GoogleComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs</a>>

---

##### `srcAddressGroupsInput`<sup>Optional</sup> <a name="srcAddressGroupsInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcAddressGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSrcAddressGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcFqdnsInput`<sup>Optional</sup> <a name="srcFqdnsInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcFqdnsInput"></a>

```java
public java.util.List<java.lang.String> getSrcFqdnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcIpRangesInput`<sup>Optional</sup> <a name="srcIpRangesInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcIpRangesInput"></a>

```java
public java.util.List<java.lang.String> getSrcIpRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcNetworkScopeInput`<sup>Optional</sup> <a name="srcNetworkScopeInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcNetworkScopeInput"></a>

```java
public java.lang.String getSrcNetworkScopeInput();
```

- *Type:* java.lang.String

---

##### `srcNetworksInput`<sup>Optional</sup> <a name="srcNetworksInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcNetworksInput"></a>

```java
public java.util.List<java.lang.String> getSrcNetworksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcRegionCodesInput`<sup>Optional</sup> <a name="srcRegionCodesInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcRegionCodesInput"></a>

```java
public java.util.List<java.lang.String> getSrcRegionCodesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcSecureTagsInput`<sup>Optional</sup> <a name="srcSecureTagsInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcSecureTagsInput"></a>

```java
public java.lang.Object getSrcSecureTagsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags">GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags</a>>

---

##### `srcThreatIntelligencesInput`<sup>Optional</sup> <a name="srcThreatIntelligencesInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcThreatIntelligencesInput"></a>

```java
public java.util.List<java.lang.String> getSrcThreatIntelligencesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destAddressGroups`<sup>Required</sup> <a name="destAddressGroups" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destAddressGroups"></a>

```java
public java.util.List<java.lang.String> getDestAddressGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destFqdns`<sup>Required</sup> <a name="destFqdns" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destFqdns"></a>

```java
public java.util.List<java.lang.String> getDestFqdns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destIpRanges`<sup>Required</sup> <a name="destIpRanges" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destIpRanges"></a>

```java
public java.util.List<java.lang.String> getDestIpRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destNetworkScope`<sup>Required</sup> <a name="destNetworkScope" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destNetworkScope"></a>

```java
public java.lang.String getDestNetworkScope();
```

- *Type:* java.lang.String

---

##### `destRegionCodes`<sup>Required</sup> <a name="destRegionCodes" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destRegionCodes"></a>

```java
public java.util.List<java.lang.String> getDestRegionCodes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destThreatIntelligences`<sup>Required</sup> <a name="destThreatIntelligences" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destThreatIntelligences"></a>

```java
public java.util.List<java.lang.String> getDestThreatIntelligences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcAddressGroups`<sup>Required</sup> <a name="srcAddressGroups" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcAddressGroups"></a>

```java
public java.util.List<java.lang.String> getSrcAddressGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcFqdns`<sup>Required</sup> <a name="srcFqdns" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcFqdns"></a>

```java
public java.util.List<java.lang.String> getSrcFqdns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcIpRanges`<sup>Required</sup> <a name="srcIpRanges" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcIpRanges"></a>

```java
public java.util.List<java.lang.String> getSrcIpRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcNetworks`<sup>Required</sup> <a name="srcNetworks" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcNetworks"></a>

```java
public java.util.List<java.lang.String> getSrcNetworks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcNetworkScope`<sup>Required</sup> <a name="srcNetworkScope" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcNetworkScope"></a>

```java
public java.lang.String getSrcNetworkScope();
```

- *Type:* java.lang.String

---

##### `srcRegionCodes`<sup>Required</sup> <a name="srcRegionCodes" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcRegionCodes"></a>

```java
public java.util.List<java.lang.String> getSrcRegionCodes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcThreatIntelligences`<sup>Required</sup> <a name="srcThreatIntelligences" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcThreatIntelligences"></a>

```java
public java.util.List<java.lang.String> getSrcThreatIntelligences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionNetworkFirewallPolicyRuleMatch getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatch">GoogleComputeRegionNetworkFirewallPolicyRuleMatch</a>

---


### GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList <a name="GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_network_firewall_policy_rule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList;

new GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.get"></a>

```java
public GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags">GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags">GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags</a>>

---


### GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference <a name="GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_network_firewall_policy_rule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference;

new GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags">GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags">GoogleComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags</a>

---


### GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList <a name="GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_network_firewall_policy_rule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList;

new GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.get"></a>

```java
public GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags">GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags">GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags</a>>

---


### GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference <a name="GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_network_firewall_policy_rule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference;

new GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags">GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags">GoogleComputeRegionNetworkFirewallPolicyRuleTargetSecureTags</a>

---


### GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference <a name="GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_network_firewall_policy_rule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference;

new GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts">GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyRule.GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts">GoogleComputeRegionNetworkFirewallPolicyRuleTimeouts</a>

---



