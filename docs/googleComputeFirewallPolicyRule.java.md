# `google_compute_firewall_policy_rule`

Refer to the Terraform Registory for docs: [`google_compute_firewall_policy_rule`](https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule).

# `googleComputeFirewallPolicyRule` Submodule <a name="`googleComputeFirewallPolicyRule` Submodule" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeFirewallPolicyRule <a name="GoogleComputeFirewallPolicyRule" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule google_compute_firewall_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_firewall_policy_rule.GoogleComputeFirewallPolicyRule;

GoogleComputeFirewallPolicyRule.Builder.create(Construct scope, java.lang.String id)
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
    .match(GoogleComputeFirewallPolicyRuleMatch)
    .priority(java.lang.Number)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .enableLogging(java.lang.Boolean)
//  .enableLogging(IResolvable)
//  .id(java.lang.String)
//  .targetResources(java.util.List<java.lang.String>)
//  .targetServiceAccounts(java.util.List<java.lang.String>)
//  .timeouts(GoogleComputeFirewallPolicyRuleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.action">action</a></code> | <code>java.lang.String</code> | The Action to perform when the client connection triggers the rule. Valid actions are "allow", "deny" and "goto_next". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.direction">direction</a></code> | <code>java.lang.String</code> | The direction in which this rule applies. Possible values: INGRESS, EGRESS. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.firewallPolicy">firewallPolicy</a></code> | <code>java.lang.String</code> | The firewall policy of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.match">match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch">GoogleComputeFirewallPolicyRuleMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description for this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Denotes whether the firewall policy rule is disabled. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.enableLogging">enableLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Denotes whether to enable logging for a particular rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#id GoogleComputeFirewallPolicyRule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.targetResources">targetResources</a></code> | <code>java.util.List<java.lang.String></code> | A list of network resource URLs to which this rule applies. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.targetServiceAccounts">targetServiceAccounts</a></code> | <code>java.util.List<java.lang.String></code> | A list of service accounts indicating the sets of instances that are applied with this rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeouts">GoogleComputeFirewallPolicyRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.action"></a>

- *Type:* java.lang.String

The Action to perform when the client connection triggers the rule. Valid actions are "allow", "deny" and "goto_next".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#action GoogleComputeFirewallPolicyRule#action}

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.direction"></a>

- *Type:* java.lang.String

The direction in which this rule applies. Possible values: INGRESS, EGRESS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#direction GoogleComputeFirewallPolicyRule#direction}

---

##### `firewallPolicy`<sup>Required</sup> <a name="firewallPolicy" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.firewallPolicy"></a>

- *Type:* java.lang.String

The firewall policy of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#firewall_policy GoogleComputeFirewallPolicyRule#firewall_policy}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.match"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch">GoogleComputeFirewallPolicyRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#match GoogleComputeFirewallPolicyRule#match}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

An integer indicating the priority of a rule in the list.

The priority must be a positive value between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest prority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#priority GoogleComputeFirewallPolicyRule#priority}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#description GoogleComputeFirewallPolicyRule#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.disabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Denotes whether the firewall policy rule is disabled.

When set to true, the firewall policy rule is not enforced and traffic behaves as if it did not exist. If this is unspecified, the firewall policy rule will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#disabled GoogleComputeFirewallPolicyRule#disabled}

---

##### `enableLogging`<sup>Optional</sup> <a name="enableLogging" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.enableLogging"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Denotes whether to enable logging for a particular rule.

If logging is enabled, logs will be exported to the configured export destination in Stackdriver. Logs may be exported to BigQuery or Pub/Sub. Note: you cannot enable logging on "goto_next" rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#enable_logging GoogleComputeFirewallPolicyRule#enable_logging}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#id GoogleComputeFirewallPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `targetResources`<sup>Optional</sup> <a name="targetResources" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.targetResources"></a>

- *Type:* java.util.List<java.lang.String>

A list of network resource URLs to which this rule applies.

This field allows you to control which network's VMs get this rule. If this field is left blank, all VMs within the organization will receive the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#target_resources GoogleComputeFirewallPolicyRule#target_resources}

---

##### `targetServiceAccounts`<sup>Optional</sup> <a name="targetServiceAccounts" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.targetServiceAccounts"></a>

- *Type:* java.util.List<java.lang.String>

A list of service accounts indicating the sets of instances that are applied with this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#target_service_accounts GoogleComputeFirewallPolicyRule#target_service_accounts}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeouts">GoogleComputeFirewallPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#timeouts GoogleComputeFirewallPolicyRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.resetEnableLogging">resetEnableLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.resetTargetResources">resetTargetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.resetTargetServiceAccounts">resetTargetServiceAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putMatch` <a name="putMatch" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.putMatch"></a>

```java
public void putMatch(GoogleComputeFirewallPolicyRuleMatch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch">GoogleComputeFirewallPolicyRuleMatch</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeFirewallPolicyRuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeouts">GoogleComputeFirewallPolicyRuleTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetEnableLogging` <a name="resetEnableLogging" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.resetEnableLogging"></a>

```java
public void resetEnableLogging()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.resetId"></a>

```java
public void resetId()
```

##### `resetTargetResources` <a name="resetTargetResources" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.resetTargetResources"></a>

```java
public void resetTargetResources()
```

##### `resetTargetServiceAccounts` <a name="resetTargetServiceAccounts" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.resetTargetServiceAccounts"></a>

```java
public void resetTargetServiceAccounts()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_firewall_policy_rule.GoogleComputeFirewallPolicyRule;

GoogleComputeFirewallPolicyRule.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_firewall_policy_rule.GoogleComputeFirewallPolicyRule;

GoogleComputeFirewallPolicyRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_firewall_policy_rule.GoogleComputeFirewallPolicyRule;

GoogleComputeFirewallPolicyRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.match">match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference">GoogleComputeFirewallPolicyRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.ruleTupleCount">ruleTupleCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference">GoogleComputeFirewallPolicyRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.enableLoggingInput">enableLoggingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.firewallPolicyInput">firewallPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.matchInput">matchInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch">GoogleComputeFirewallPolicyRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.targetResourcesInput">targetResourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.targetServiceAccountsInput">targetServiceAccountsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeouts">GoogleComputeFirewallPolicyRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.enableLogging">enableLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.firewallPolicy">firewallPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.targetResources">targetResources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.targetServiceAccounts">targetServiceAccounts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.match"></a>

```java
public GoogleComputeFirewallPolicyRuleMatchOutputReference getMatch();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference">GoogleComputeFirewallPolicyRuleMatchOutputReference</a>

---

##### `ruleTupleCount`<sup>Required</sup> <a name="ruleTupleCount" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.ruleTupleCount"></a>

```java
public java.lang.Number getRuleTupleCount();
```

- *Type:* java.lang.Number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.timeouts"></a>

```java
public GoogleComputeFirewallPolicyRuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference">GoogleComputeFirewallPolicyRuleTimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.disabledInput"></a>

```java
public java.lang.Object getDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableLoggingInput`<sup>Optional</sup> <a name="enableLoggingInput" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.enableLoggingInput"></a>

```java
public java.lang.Object getEnableLoggingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `firewallPolicyInput`<sup>Optional</sup> <a name="firewallPolicyInput" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.firewallPolicyInput"></a>

```java
public java.lang.String getFirewallPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.matchInput"></a>

```java
public GoogleComputeFirewallPolicyRuleMatch getMatchInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch">GoogleComputeFirewallPolicyRuleMatch</a>

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `targetResourcesInput`<sup>Optional</sup> <a name="targetResourcesInput" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.targetResourcesInput"></a>

```java
public java.util.List<java.lang.String> getTargetResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetServiceAccountsInput`<sup>Optional</sup> <a name="targetServiceAccountsInput" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.targetServiceAccountsInput"></a>

```java
public java.util.List<java.lang.String> getTargetServiceAccountsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeouts">GoogleComputeFirewallPolicyRuleTimeouts</a>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableLogging`<sup>Required</sup> <a name="enableLogging" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.enableLogging"></a>

```java
public java.lang.Object getEnableLogging();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `firewallPolicy`<sup>Required</sup> <a name="firewallPolicy" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.firewallPolicy"></a>

```java
public java.lang.String getFirewallPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `targetResources`<sup>Required</sup> <a name="targetResources" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.targetResources"></a>

```java
public java.util.List<java.lang.String> getTargetResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetServiceAccounts`<sup>Required</sup> <a name="targetServiceAccounts" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.targetServiceAccounts"></a>

```java
public java.util.List<java.lang.String> getTargetServiceAccounts();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeFirewallPolicyRuleConfig <a name="GoogleComputeFirewallPolicyRuleConfig" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_firewall_policy_rule.GoogleComputeFirewallPolicyRuleConfig;

GoogleComputeFirewallPolicyRuleConfig.builder()
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
    .match(GoogleComputeFirewallPolicyRuleMatch)
    .priority(java.lang.Number)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .enableLogging(java.lang.Boolean)
//  .enableLogging(IResolvable)
//  .id(java.lang.String)
//  .targetResources(java.util.List<java.lang.String>)
//  .targetServiceAccounts(java.util.List<java.lang.String>)
//  .timeouts(GoogleComputeFirewallPolicyRuleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.action">action</a></code> | <code>java.lang.String</code> | The Action to perform when the client connection triggers the rule. Valid actions are "allow", "deny" and "goto_next". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.direction">direction</a></code> | <code>java.lang.String</code> | The direction in which this rule applies. Possible values: INGRESS, EGRESS. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.firewallPolicy">firewallPolicy</a></code> | <code>java.lang.String</code> | The firewall policy of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.match">match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch">GoogleComputeFirewallPolicyRuleMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description for this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Denotes whether the firewall policy rule is disabled. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.enableLogging">enableLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Denotes whether to enable logging for a particular rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#id GoogleComputeFirewallPolicyRule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.targetResources">targetResources</a></code> | <code>java.util.List<java.lang.String></code> | A list of network resource URLs to which this rule applies. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.targetServiceAccounts">targetServiceAccounts</a></code> | <code>java.util.List<java.lang.String></code> | A list of service accounts indicating the sets of instances that are applied with this rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeouts">GoogleComputeFirewallPolicyRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

The Action to perform when the client connection triggers the rule. Valid actions are "allow", "deny" and "goto_next".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#action GoogleComputeFirewallPolicyRule#action}

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

The direction in which this rule applies. Possible values: INGRESS, EGRESS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#direction GoogleComputeFirewallPolicyRule#direction}

---

##### `firewallPolicy`<sup>Required</sup> <a name="firewallPolicy" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.firewallPolicy"></a>

```java
public java.lang.String getFirewallPolicy();
```

- *Type:* java.lang.String

The firewall policy of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#firewall_policy GoogleComputeFirewallPolicyRule#firewall_policy}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.match"></a>

```java
public GoogleComputeFirewallPolicyRuleMatch getMatch();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch">GoogleComputeFirewallPolicyRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#match GoogleComputeFirewallPolicyRule#match}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

An integer indicating the priority of a rule in the list.

The priority must be a positive value between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest prority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#priority GoogleComputeFirewallPolicyRule#priority}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#description GoogleComputeFirewallPolicyRule#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Denotes whether the firewall policy rule is disabled.

When set to true, the firewall policy rule is not enforced and traffic behaves as if it did not exist. If this is unspecified, the firewall policy rule will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#disabled GoogleComputeFirewallPolicyRule#disabled}

---

##### `enableLogging`<sup>Optional</sup> <a name="enableLogging" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.enableLogging"></a>

```java
public java.lang.Object getEnableLogging();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Denotes whether to enable logging for a particular rule.

If logging is enabled, logs will be exported to the configured export destination in Stackdriver. Logs may be exported to BigQuery or Pub/Sub. Note: you cannot enable logging on "goto_next" rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#enable_logging GoogleComputeFirewallPolicyRule#enable_logging}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#id GoogleComputeFirewallPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `targetResources`<sup>Optional</sup> <a name="targetResources" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.targetResources"></a>

```java
public java.util.List<java.lang.String> getTargetResources();
```

- *Type:* java.util.List<java.lang.String>

A list of network resource URLs to which this rule applies.

This field allows you to control which network's VMs get this rule. If this field is left blank, all VMs within the organization will receive the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#target_resources GoogleComputeFirewallPolicyRule#target_resources}

---

##### `targetServiceAccounts`<sup>Optional</sup> <a name="targetServiceAccounts" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.targetServiceAccounts"></a>

```java
public java.util.List<java.lang.String> getTargetServiceAccounts();
```

- *Type:* java.util.List<java.lang.String>

A list of service accounts indicating the sets of instances that are applied with this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#target_service_accounts GoogleComputeFirewallPolicyRule#target_service_accounts}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleConfig.property.timeouts"></a>

```java
public GoogleComputeFirewallPolicyRuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeouts">GoogleComputeFirewallPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#timeouts GoogleComputeFirewallPolicyRule#timeouts}

---

### GoogleComputeFirewallPolicyRuleMatch <a name="GoogleComputeFirewallPolicyRuleMatch" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_firewall_policy_rule.GoogleComputeFirewallPolicyRuleMatch;

GoogleComputeFirewallPolicyRuleMatch.builder()
    .layer4Configs(IResolvable)
    .layer4Configs(java.util.List<GoogleComputeFirewallPolicyRuleMatchLayer4Configs>)
//  .destAddressGroups(java.util.List<java.lang.String>)
//  .destFqdns(java.util.List<java.lang.String>)
//  .destIpRanges(java.util.List<java.lang.String>)
//  .destRegionCodes(java.util.List<java.lang.String>)
//  .destThreatIntelligences(java.util.List<java.lang.String>)
//  .srcAddressGroups(java.util.List<java.lang.String>)
//  .srcFqdns(java.util.List<java.lang.String>)
//  .srcIpRanges(java.util.List<java.lang.String>)
//  .srcRegionCodes(java.util.List<java.lang.String>)
//  .srcThreatIntelligences(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch.property.layer4Configs">layer4Configs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4Configs">GoogleComputeFirewallPolicyRuleMatchLayer4Configs</a>></code> | layer4_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch.property.destAddressGroups">destAddressGroups</a></code> | <code>java.util.List<java.lang.String></code> | Address groups which should be matched against the traffic destination. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch.property.destFqdns">destFqdns</a></code> | <code>java.util.List<java.lang.String></code> | Domain names that will be used to match against the resolved domain name of destination of traffic. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch.property.destIpRanges">destIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 256. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch.property.destRegionCodes">destRegionCodes</a></code> | <code>java.util.List<java.lang.String></code> | The Unicode country codes whose IP addresses will be used to match against the source of traffic. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch.property.destThreatIntelligences">destThreatIntelligences</a></code> | <code>java.util.List<java.lang.String></code> | Name of the Google Cloud Threat Intelligence list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch.property.srcAddressGroups">srcAddressGroups</a></code> | <code>java.util.List<java.lang.String></code> | Address groups which should be matched against the traffic source. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch.property.srcFqdns">srcFqdns</a></code> | <code>java.util.List<java.lang.String></code> | Domain names that will be used to match against the resolved domain name of source of traffic. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch.property.srcIpRanges">srcIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 256. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch.property.srcRegionCodes">srcRegionCodes</a></code> | <code>java.util.List<java.lang.String></code> | The Unicode country codes whose IP addresses will be used to match against the source of traffic. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch.property.srcThreatIntelligences">srcThreatIntelligences</a></code> | <code>java.util.List<java.lang.String></code> | Name of the Google Cloud Threat Intelligence list. |

---

##### `layer4Configs`<sup>Required</sup> <a name="layer4Configs" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch.property.layer4Configs"></a>

```java
public java.lang.Object getLayer4Configs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4Configs">GoogleComputeFirewallPolicyRuleMatchLayer4Configs</a>>

layer4_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#layer4_configs GoogleComputeFirewallPolicyRule#layer4_configs}

---

##### `destAddressGroups`<sup>Optional</sup> <a name="destAddressGroups" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch.property.destAddressGroups"></a>

```java
public java.util.List<java.lang.String> getDestAddressGroups();
```

- *Type:* java.util.List<java.lang.String>

Address groups which should be matched against the traffic destination.

Maximum number of destination address groups is 10. Destination address groups is only supported in Egress rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#dest_address_groups GoogleComputeFirewallPolicyRule#dest_address_groups}

---

##### `destFqdns`<sup>Optional</sup> <a name="destFqdns" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch.property.destFqdns"></a>

```java
public java.util.List<java.lang.String> getDestFqdns();
```

- *Type:* java.util.List<java.lang.String>

Domain names that will be used to match against the resolved domain name of destination of traffic.

Can only be specified if DIRECTION is egress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#dest_fqdns GoogleComputeFirewallPolicyRule#dest_fqdns}

---

##### `destIpRanges`<sup>Optional</sup> <a name="destIpRanges" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch.property.destIpRanges"></a>

```java
public java.util.List<java.lang.String> getDestIpRanges();
```

- *Type:* java.util.List<java.lang.String>

CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 256.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#dest_ip_ranges GoogleComputeFirewallPolicyRule#dest_ip_ranges}

---

##### `destRegionCodes`<sup>Optional</sup> <a name="destRegionCodes" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch.property.destRegionCodes"></a>

```java
public java.util.List<java.lang.String> getDestRegionCodes();
```

- *Type:* java.util.List<java.lang.String>

The Unicode country codes whose IP addresses will be used to match against the source of traffic.

Can only be specified if DIRECTION is egress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#dest_region_codes GoogleComputeFirewallPolicyRule#dest_region_codes}

---

##### `destThreatIntelligences`<sup>Optional</sup> <a name="destThreatIntelligences" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch.property.destThreatIntelligences"></a>

```java
public java.util.List<java.lang.String> getDestThreatIntelligences();
```

- *Type:* java.util.List<java.lang.String>

Name of the Google Cloud Threat Intelligence list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#dest_threat_intelligences GoogleComputeFirewallPolicyRule#dest_threat_intelligences}

---

##### `srcAddressGroups`<sup>Optional</sup> <a name="srcAddressGroups" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch.property.srcAddressGroups"></a>

```java
public java.util.List<java.lang.String> getSrcAddressGroups();
```

- *Type:* java.util.List<java.lang.String>

Address groups which should be matched against the traffic source.

Maximum number of source address groups is 10. Source address groups is only supported in Ingress rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#src_address_groups GoogleComputeFirewallPolicyRule#src_address_groups}

---

##### `srcFqdns`<sup>Optional</sup> <a name="srcFqdns" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch.property.srcFqdns"></a>

```java
public java.util.List<java.lang.String> getSrcFqdns();
```

- *Type:* java.util.List<java.lang.String>

Domain names that will be used to match against the resolved domain name of source of traffic.

Can only be specified if DIRECTION is ingress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#src_fqdns GoogleComputeFirewallPolicyRule#src_fqdns}

---

##### `srcIpRanges`<sup>Optional</sup> <a name="srcIpRanges" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch.property.srcIpRanges"></a>

```java
public java.util.List<java.lang.String> getSrcIpRanges();
```

- *Type:* java.util.List<java.lang.String>

CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 256.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#src_ip_ranges GoogleComputeFirewallPolicyRule#src_ip_ranges}

---

##### `srcRegionCodes`<sup>Optional</sup> <a name="srcRegionCodes" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch.property.srcRegionCodes"></a>

```java
public java.util.List<java.lang.String> getSrcRegionCodes();
```

- *Type:* java.util.List<java.lang.String>

The Unicode country codes whose IP addresses will be used to match against the source of traffic.

Can only be specified if DIRECTION is ingress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#src_region_codes GoogleComputeFirewallPolicyRule#src_region_codes}

---

##### `srcThreatIntelligences`<sup>Optional</sup> <a name="srcThreatIntelligences" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch.property.srcThreatIntelligences"></a>

```java
public java.util.List<java.lang.String> getSrcThreatIntelligences();
```

- *Type:* java.util.List<java.lang.String>

Name of the Google Cloud Threat Intelligence list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#src_threat_intelligences GoogleComputeFirewallPolicyRule#src_threat_intelligences}

---

### GoogleComputeFirewallPolicyRuleMatchLayer4Configs <a name="GoogleComputeFirewallPolicyRuleMatchLayer4Configs" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4Configs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4Configs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_firewall_policy_rule.GoogleComputeFirewallPolicyRuleMatchLayer4Configs;

GoogleComputeFirewallPolicyRuleMatchLayer4Configs.builder()
    .ipProtocol(java.lang.String)
//  .ports(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4Configs.property.ipProtocol">ipProtocol</a></code> | <code>java.lang.String</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4Configs.property.ports">ports</a></code> | <code>java.util.List<java.lang.String></code> | An optional list of ports to which this rule applies. |

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4Configs.property.ipProtocol"></a>

```java
public java.lang.String getIpProtocol();
```

- *Type:* java.lang.String

The IP protocol to which this rule applies.

The protocol type is required when creating a firewall rule. This value can either be one of the following well known protocol strings (`tcp`, `udp`, `icmp`, `esp`, `ah`, `ipip`, `sctp`), or the IP protocol number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#ip_protocol GoogleComputeFirewallPolicyRule#ip_protocol}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4Configs.property.ports"></a>

```java
public java.util.List<java.lang.String> getPorts();
```

- *Type:* java.util.List<java.lang.String>

An optional list of ports to which this rule applies.

This field is only applicable for UDP or TCP protocol. Each entry must be either an integer or a range. If not specified, this rule applies to connections through any port. Example inputs include: ``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#ports GoogleComputeFirewallPolicyRule#ports}

---

### GoogleComputeFirewallPolicyRuleTimeouts <a name="GoogleComputeFirewallPolicyRuleTimeouts" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_firewall_policy_rule.GoogleComputeFirewallPolicyRuleTimeouts;

GoogleComputeFirewallPolicyRuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#create GoogleComputeFirewallPolicyRule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#delete GoogleComputeFirewallPolicyRule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#update GoogleComputeFirewallPolicyRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#create GoogleComputeFirewallPolicyRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#delete GoogleComputeFirewallPolicyRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_compute_firewall_policy_rule#update GoogleComputeFirewallPolicyRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList <a name="GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_firewall_policy_rule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList;

new GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.get"></a>

```java
public GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4Configs">GoogleComputeFirewallPolicyRuleMatchLayer4Configs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4Configs">GoogleComputeFirewallPolicyRuleMatchLayer4Configs</a>>

---


### GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference <a name="GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_firewall_policy_rule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference;

new GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resetPorts">resetPorts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPorts` <a name="resetPorts" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resetPorts"></a>

```java
public void resetPorts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ipProtocolInput">ipProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.portsInput">portsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ipProtocol">ipProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ports">ports</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4Configs">GoogleComputeFirewallPolicyRuleMatchLayer4Configs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipProtocolInput`<sup>Optional</sup> <a name="ipProtocolInput" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ipProtocolInput"></a>

```java
public java.lang.String getIpProtocolInput();
```

- *Type:* java.lang.String

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.portsInput"></a>

```java
public java.util.List<java.lang.String> getPortsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ipProtocol"></a>

```java
public java.lang.String getIpProtocol();
```

- *Type:* java.lang.String

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ports"></a>

```java
public java.util.List<java.lang.String> getPorts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4Configs">GoogleComputeFirewallPolicyRuleMatchLayer4Configs</a>

---


### GoogleComputeFirewallPolicyRuleMatchOutputReference <a name="GoogleComputeFirewallPolicyRuleMatchOutputReference" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_firewall_policy_rule.GoogleComputeFirewallPolicyRuleMatchOutputReference;

new GoogleComputeFirewallPolicyRuleMatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.putLayer4Configs">putLayer4Configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.resetDestAddressGroups">resetDestAddressGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.resetDestFqdns">resetDestFqdns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.resetDestIpRanges">resetDestIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.resetDestRegionCodes">resetDestRegionCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.resetDestThreatIntelligences">resetDestThreatIntelligences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.resetSrcAddressGroups">resetSrcAddressGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.resetSrcFqdns">resetSrcFqdns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.resetSrcIpRanges">resetSrcIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.resetSrcRegionCodes">resetSrcRegionCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.resetSrcThreatIntelligences">resetSrcThreatIntelligences</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLayer4Configs` <a name="putLayer4Configs" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.putLayer4Configs"></a>

```java
public void putLayer4Configs(IResolvable OR java.util.List<GoogleComputeFirewallPolicyRuleMatchLayer4Configs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.putLayer4Configs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4Configs">GoogleComputeFirewallPolicyRuleMatchLayer4Configs</a>>

---

##### `resetDestAddressGroups` <a name="resetDestAddressGroups" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.resetDestAddressGroups"></a>

```java
public void resetDestAddressGroups()
```

##### `resetDestFqdns` <a name="resetDestFqdns" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.resetDestFqdns"></a>

```java
public void resetDestFqdns()
```

##### `resetDestIpRanges` <a name="resetDestIpRanges" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.resetDestIpRanges"></a>

```java
public void resetDestIpRanges()
```

##### `resetDestRegionCodes` <a name="resetDestRegionCodes" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.resetDestRegionCodes"></a>

```java
public void resetDestRegionCodes()
```

##### `resetDestThreatIntelligences` <a name="resetDestThreatIntelligences" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.resetDestThreatIntelligences"></a>

```java
public void resetDestThreatIntelligences()
```

##### `resetSrcAddressGroups` <a name="resetSrcAddressGroups" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.resetSrcAddressGroups"></a>

```java
public void resetSrcAddressGroups()
```

##### `resetSrcFqdns` <a name="resetSrcFqdns" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.resetSrcFqdns"></a>

```java
public void resetSrcFqdns()
```

##### `resetSrcIpRanges` <a name="resetSrcIpRanges" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.resetSrcIpRanges"></a>

```java
public void resetSrcIpRanges()
```

##### `resetSrcRegionCodes` <a name="resetSrcRegionCodes" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.resetSrcRegionCodes"></a>

```java
public void resetSrcRegionCodes()
```

##### `resetSrcThreatIntelligences` <a name="resetSrcThreatIntelligences" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.resetSrcThreatIntelligences"></a>

```java
public void resetSrcThreatIntelligences()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.layer4Configs">layer4Configs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList">GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.destAddressGroupsInput">destAddressGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.destFqdnsInput">destFqdnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.destIpRangesInput">destIpRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.destRegionCodesInput">destRegionCodesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.destThreatIntelligencesInput">destThreatIntelligencesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.layer4ConfigsInput">layer4ConfigsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4Configs">GoogleComputeFirewallPolicyRuleMatchLayer4Configs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.srcAddressGroupsInput">srcAddressGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.srcFqdnsInput">srcFqdnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.srcIpRangesInput">srcIpRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.srcRegionCodesInput">srcRegionCodesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.srcThreatIntelligencesInput">srcThreatIntelligencesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.destAddressGroups">destAddressGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.destFqdns">destFqdns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.destIpRanges">destIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.destRegionCodes">destRegionCodes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.destThreatIntelligences">destThreatIntelligences</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.srcAddressGroups">srcAddressGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.srcFqdns">srcFqdns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.srcIpRanges">srcIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.srcRegionCodes">srcRegionCodes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.srcThreatIntelligences">srcThreatIntelligences</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch">GoogleComputeFirewallPolicyRuleMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `layer4Configs`<sup>Required</sup> <a name="layer4Configs" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.layer4Configs"></a>

```java
public GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList getLayer4Configs();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList">GoogleComputeFirewallPolicyRuleMatchLayer4ConfigsList</a>

---

##### `destAddressGroupsInput`<sup>Optional</sup> <a name="destAddressGroupsInput" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.destAddressGroupsInput"></a>

```java
public java.util.List<java.lang.String> getDestAddressGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destFqdnsInput`<sup>Optional</sup> <a name="destFqdnsInput" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.destFqdnsInput"></a>

```java
public java.util.List<java.lang.String> getDestFqdnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destIpRangesInput`<sup>Optional</sup> <a name="destIpRangesInput" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.destIpRangesInput"></a>

```java
public java.util.List<java.lang.String> getDestIpRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destRegionCodesInput`<sup>Optional</sup> <a name="destRegionCodesInput" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.destRegionCodesInput"></a>

```java
public java.util.List<java.lang.String> getDestRegionCodesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destThreatIntelligencesInput`<sup>Optional</sup> <a name="destThreatIntelligencesInput" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.destThreatIntelligencesInput"></a>

```java
public java.util.List<java.lang.String> getDestThreatIntelligencesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `layer4ConfigsInput`<sup>Optional</sup> <a name="layer4ConfigsInput" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.layer4ConfigsInput"></a>

```java
public java.lang.Object getLayer4ConfigsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchLayer4Configs">GoogleComputeFirewallPolicyRuleMatchLayer4Configs</a>>

---

##### `srcAddressGroupsInput`<sup>Optional</sup> <a name="srcAddressGroupsInput" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.srcAddressGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSrcAddressGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcFqdnsInput`<sup>Optional</sup> <a name="srcFqdnsInput" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.srcFqdnsInput"></a>

```java
public java.util.List<java.lang.String> getSrcFqdnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcIpRangesInput`<sup>Optional</sup> <a name="srcIpRangesInput" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.srcIpRangesInput"></a>

```java
public java.util.List<java.lang.String> getSrcIpRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcRegionCodesInput`<sup>Optional</sup> <a name="srcRegionCodesInput" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.srcRegionCodesInput"></a>

```java
public java.util.List<java.lang.String> getSrcRegionCodesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcThreatIntelligencesInput`<sup>Optional</sup> <a name="srcThreatIntelligencesInput" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.srcThreatIntelligencesInput"></a>

```java
public java.util.List<java.lang.String> getSrcThreatIntelligencesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destAddressGroups`<sup>Required</sup> <a name="destAddressGroups" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.destAddressGroups"></a>

```java
public java.util.List<java.lang.String> getDestAddressGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destFqdns`<sup>Required</sup> <a name="destFqdns" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.destFqdns"></a>

```java
public java.util.List<java.lang.String> getDestFqdns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destIpRanges`<sup>Required</sup> <a name="destIpRanges" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.destIpRanges"></a>

```java
public java.util.List<java.lang.String> getDestIpRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destRegionCodes`<sup>Required</sup> <a name="destRegionCodes" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.destRegionCodes"></a>

```java
public java.util.List<java.lang.String> getDestRegionCodes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destThreatIntelligences`<sup>Required</sup> <a name="destThreatIntelligences" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.destThreatIntelligences"></a>

```java
public java.util.List<java.lang.String> getDestThreatIntelligences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcAddressGroups`<sup>Required</sup> <a name="srcAddressGroups" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.srcAddressGroups"></a>

```java
public java.util.List<java.lang.String> getSrcAddressGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcFqdns`<sup>Required</sup> <a name="srcFqdns" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.srcFqdns"></a>

```java
public java.util.List<java.lang.String> getSrcFqdns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcIpRanges`<sup>Required</sup> <a name="srcIpRanges" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.srcIpRanges"></a>

```java
public java.util.List<java.lang.String> getSrcIpRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcRegionCodes`<sup>Required</sup> <a name="srcRegionCodes" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.srcRegionCodes"></a>

```java
public java.util.List<java.lang.String> getSrcRegionCodes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcThreatIntelligences`<sup>Required</sup> <a name="srcThreatIntelligences" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.srcThreatIntelligences"></a>

```java
public java.util.List<java.lang.String> getSrcThreatIntelligences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatchOutputReference.property.internalValue"></a>

```java
public GoogleComputeFirewallPolicyRuleMatch getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleMatch">GoogleComputeFirewallPolicyRuleMatch</a>

---


### GoogleComputeFirewallPolicyRuleTimeoutsOutputReference <a name="GoogleComputeFirewallPolicyRuleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_firewall_policy_rule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference;

new GoogleComputeFirewallPolicyRuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeouts">GoogleComputeFirewallPolicyRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeFirewallPolicyRule.GoogleComputeFirewallPolicyRuleTimeouts">GoogleComputeFirewallPolicyRuleTimeouts</a>

---



