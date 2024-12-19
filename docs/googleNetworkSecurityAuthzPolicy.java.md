# `googleNetworkSecurityAuthzPolicy` Submodule <a name="`googleNetworkSecurityAuthzPolicy` Submodule" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityAuthzPolicy <a name="GoogleNetworkSecurityAuthzPolicy" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy google_network_security_authz_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicy;

GoogleNetworkSecurityAuthzPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .name(java.lang.String)
    .target(GoogleNetworkSecurityAuthzPolicyTarget)
//  .customProvider(GoogleNetworkSecurityAuthzPolicyCustomProvider)
//  .description(java.lang.String)
//  .httpRules(IResolvable)
//  .httpRules(java.util.List<GoogleNetworkSecurityAuthzPolicyHttpRules>)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleNetworkSecurityAuthzPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.action">action</a></code> | <code>java.lang.String</code> | When the action is CUSTOM, customProvider must be specified. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Identifier. Name of the AuthzPolicy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.target">target</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTarget">GoogleNetworkSecurityAuthzPolicyTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.customProvider">customProvider</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProvider">GoogleNetworkSecurityAuthzPolicyCustomProvider</a></code> | custom_provider block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.httpRules">httpRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRules">GoogleNetworkSecurityAuthzPolicyHttpRules</a>></code> | http_rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#id GoogleNetworkSecurityAuthzPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of labels associated with the AuthzExtension resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#project GoogleNetworkSecurityAuthzPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeouts">GoogleNetworkSecurityAuthzPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.action"></a>

- *Type:* java.lang.String

When the action is CUSTOM, customProvider must be specified.

When the action is ALLOW, only requests matching the policy will be allowed.
When the action is DENY, only requests matching the policy will be denied.

When a request arrives, the policies are evaluated in the following order:

1. If there is a CUSTOM policy that matches the request, the CUSTOM policy is evaluated using the custom authorization providers and the request is denied if the provider rejects the request.
2. If there are any DENY policies that match the request, the request is denied.
3. If there are no ALLOW policies for the resource or if any of the ALLOW policies match the request, the request is allowed.
4. Else the request is denied by default if none of the configured AuthzPolicies with ALLOW action match the request. Possible values: ["ALLOW", "DENY", "CUSTOM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#action GoogleNetworkSecurityAuthzPolicy#action}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#location GoogleNetworkSecurityAuthzPolicy#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Identifier. Name of the AuthzPolicy resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#name GoogleNetworkSecurityAuthzPolicy#name}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.target"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTarget">GoogleNetworkSecurityAuthzPolicyTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#target GoogleNetworkSecurityAuthzPolicy#target}

---

##### `customProvider`<sup>Optional</sup> <a name="customProvider" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.customProvider"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProvider">GoogleNetworkSecurityAuthzPolicyCustomProvider</a>

custom_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#custom_provider GoogleNetworkSecurityAuthzPolicy#custom_provider}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#description GoogleNetworkSecurityAuthzPolicy#description}

---

##### `httpRules`<sup>Optional</sup> <a name="httpRules" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.httpRules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRules">GoogleNetworkSecurityAuthzPolicyHttpRules</a>>

http_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#http_rules GoogleNetworkSecurityAuthzPolicy#http_rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#id GoogleNetworkSecurityAuthzPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of labels associated with the AuthzExtension resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#labels GoogleNetworkSecurityAuthzPolicy#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#project GoogleNetworkSecurityAuthzPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeouts">GoogleNetworkSecurityAuthzPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#timeouts GoogleNetworkSecurityAuthzPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.putCustomProvider">putCustomProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.putHttpRules">putHttpRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.resetCustomProvider">resetCustomProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.resetHttpRules">resetHttpRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomProvider` <a name="putCustomProvider" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.putCustomProvider"></a>

```java
public void putCustomProvider(GoogleNetworkSecurityAuthzPolicyCustomProvider value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.putCustomProvider.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProvider">GoogleNetworkSecurityAuthzPolicyCustomProvider</a>

---

##### `putHttpRules` <a name="putHttpRules" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.putHttpRules"></a>

```java
public void putHttpRules(IResolvable OR java.util.List<GoogleNetworkSecurityAuthzPolicyHttpRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.putHttpRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRules">GoogleNetworkSecurityAuthzPolicyHttpRules</a>>

---

##### `putTarget` <a name="putTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.putTarget"></a>

```java
public void putTarget(GoogleNetworkSecurityAuthzPolicyTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTarget">GoogleNetworkSecurityAuthzPolicyTarget</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.putTimeouts"></a>

```java
public void putTimeouts(GoogleNetworkSecurityAuthzPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeouts">GoogleNetworkSecurityAuthzPolicyTimeouts</a>

---

##### `resetCustomProvider` <a name="resetCustomProvider" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.resetCustomProvider"></a>

```java
public void resetCustomProvider()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetHttpRules` <a name="resetHttpRules" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.resetHttpRules"></a>

```java
public void resetHttpRules()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkSecurityAuthzPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicy;

GoogleNetworkSecurityAuthzPolicy.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicy;

GoogleNetworkSecurityAuthzPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicy;

GoogleNetworkSecurityAuthzPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicy;

GoogleNetworkSecurityAuthzPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleNetworkSecurityAuthzPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleNetworkSecurityAuthzPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleNetworkSecurityAuthzPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleNetworkSecurityAuthzPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityAuthzPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.customProvider">customProvider</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference">GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.httpRules">httpRules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList">GoogleNetworkSecurityAuthzPolicyHttpRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.target">target</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference">GoogleNetworkSecurityAuthzPolicyTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference">GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.customProviderInput">customProviderInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProvider">GoogleNetworkSecurityAuthzPolicyCustomProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.httpRulesInput">httpRulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRules">GoogleNetworkSecurityAuthzPolicyHttpRules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.targetInput">targetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTarget">GoogleNetworkSecurityAuthzPolicyTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeouts">GoogleNetworkSecurityAuthzPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `customProvider`<sup>Required</sup> <a name="customProvider" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.customProvider"></a>

```java
public GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference getCustomProvider();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference">GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `httpRules`<sup>Required</sup> <a name="httpRules" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.httpRules"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesList getHttpRules();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList">GoogleNetworkSecurityAuthzPolicyHttpRulesList</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.target"></a>

```java
public GoogleNetworkSecurityAuthzPolicyTargetOutputReference getTarget();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference">GoogleNetworkSecurityAuthzPolicyTargetOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.timeouts"></a>

```java
public GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference">GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `customProviderInput`<sup>Optional</sup> <a name="customProviderInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.customProviderInput"></a>

```java
public GoogleNetworkSecurityAuthzPolicyCustomProvider getCustomProviderInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProvider">GoogleNetworkSecurityAuthzPolicyCustomProvider</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `httpRulesInput`<sup>Optional</sup> <a name="httpRulesInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.httpRulesInput"></a>

```java
public java.lang.Object getHttpRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRules">GoogleNetworkSecurityAuthzPolicyHttpRules</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.targetInput"></a>

```java
public GoogleNetworkSecurityAuthzPolicyTarget getTargetInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTarget">GoogleNetworkSecurityAuthzPolicyTarget</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeouts">GoogleNetworkSecurityAuthzPolicyTimeouts</a>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityAuthzPolicyConfig <a name="GoogleNetworkSecurityAuthzPolicyConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyConfig;

GoogleNetworkSecurityAuthzPolicyConfig.builder()
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
    .location(java.lang.String)
    .name(java.lang.String)
    .target(GoogleNetworkSecurityAuthzPolicyTarget)
//  .customProvider(GoogleNetworkSecurityAuthzPolicyCustomProvider)
//  .description(java.lang.String)
//  .httpRules(IResolvable)
//  .httpRules(java.util.List<GoogleNetworkSecurityAuthzPolicyHttpRules>)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleNetworkSecurityAuthzPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.action">action</a></code> | <code>java.lang.String</code> | When the action is CUSTOM, customProvider must be specified. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Identifier. Name of the AuthzPolicy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.target">target</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTarget">GoogleNetworkSecurityAuthzPolicyTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.customProvider">customProvider</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProvider">GoogleNetworkSecurityAuthzPolicyCustomProvider</a></code> | custom_provider block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.httpRules">httpRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRules">GoogleNetworkSecurityAuthzPolicyHttpRules</a>></code> | http_rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#id GoogleNetworkSecurityAuthzPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of labels associated with the AuthzExtension resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#project GoogleNetworkSecurityAuthzPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeouts">GoogleNetworkSecurityAuthzPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

When the action is CUSTOM, customProvider must be specified.

When the action is ALLOW, only requests matching the policy will be allowed.
When the action is DENY, only requests matching the policy will be denied.

When a request arrives, the policies are evaluated in the following order:

1. If there is a CUSTOM policy that matches the request, the CUSTOM policy is evaluated using the custom authorization providers and the request is denied if the provider rejects the request.
2. If there are any DENY policies that match the request, the request is denied.
3. If there are no ALLOW policies for the resource or if any of the ALLOW policies match the request, the request is allowed.
4. Else the request is denied by default if none of the configured AuthzPolicies with ALLOW action match the request. Possible values: ["ALLOW", "DENY", "CUSTOM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#action GoogleNetworkSecurityAuthzPolicy#action}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#location GoogleNetworkSecurityAuthzPolicy#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Identifier. Name of the AuthzPolicy resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#name GoogleNetworkSecurityAuthzPolicy#name}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.target"></a>

```java
public GoogleNetworkSecurityAuthzPolicyTarget getTarget();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTarget">GoogleNetworkSecurityAuthzPolicyTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#target GoogleNetworkSecurityAuthzPolicy#target}

---

##### `customProvider`<sup>Optional</sup> <a name="customProvider" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.customProvider"></a>

```java
public GoogleNetworkSecurityAuthzPolicyCustomProvider getCustomProvider();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProvider">GoogleNetworkSecurityAuthzPolicyCustomProvider</a>

custom_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#custom_provider GoogleNetworkSecurityAuthzPolicy#custom_provider}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#description GoogleNetworkSecurityAuthzPolicy#description}

---

##### `httpRules`<sup>Optional</sup> <a name="httpRules" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.httpRules"></a>

```java
public java.lang.Object getHttpRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRules">GoogleNetworkSecurityAuthzPolicyHttpRules</a>>

http_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#http_rules GoogleNetworkSecurityAuthzPolicy#http_rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#id GoogleNetworkSecurityAuthzPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of labels associated with the AuthzExtension resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#labels GoogleNetworkSecurityAuthzPolicy#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#project GoogleNetworkSecurityAuthzPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyConfig.property.timeouts"></a>

```java
public GoogleNetworkSecurityAuthzPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeouts">GoogleNetworkSecurityAuthzPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#timeouts GoogleNetworkSecurityAuthzPolicy#timeouts}

---

### GoogleNetworkSecurityAuthzPolicyCustomProvider <a name="GoogleNetworkSecurityAuthzPolicyCustomProvider" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyCustomProvider;

GoogleNetworkSecurityAuthzPolicyCustomProvider.builder()
//  .authzExtension(GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension)
//  .cloudIap(GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProvider.property.authzExtension">authzExtension</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension">GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension</a></code> | authz_extension block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProvider.property.cloudIap">cloudIap</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap">GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap</a></code> | cloud_iap block. |

---

##### `authzExtension`<sup>Optional</sup> <a name="authzExtension" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProvider.property.authzExtension"></a>

```java
public GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension getAuthzExtension();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension">GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension</a>

authz_extension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#authz_extension GoogleNetworkSecurityAuthzPolicy#authz_extension}

---

##### `cloudIap`<sup>Optional</sup> <a name="cloudIap" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProvider.property.cloudIap"></a>

```java
public GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap getCloudIap();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap">GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap</a>

cloud_iap block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#cloud_iap GoogleNetworkSecurityAuthzPolicy#cloud_iap}

---

### GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension <a name="GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension;

GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension.builder()
    .resources(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | A list of references to authorization extensions that will be invoked for requests matching this policy. |

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

A list of references to authorization extensions that will be invoked for requests matching this policy.

Limited to 1 custom provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#resources GoogleNetworkSecurityAuthzPolicy#resources}

---

### GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap <a name="GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap;

GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable Cloud IAP at the AuthzPolicy level. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable Cloud IAP at the AuthzPolicy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#enabled GoogleNetworkSecurityAuthzPolicy#enabled}

---

### GoogleNetworkSecurityAuthzPolicyHttpRules <a name="GoogleNetworkSecurityAuthzPolicyHttpRules" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRules;

GoogleNetworkSecurityAuthzPolicyHttpRules.builder()
//  .from(GoogleNetworkSecurityAuthzPolicyHttpRulesFrom)
//  .to(GoogleNetworkSecurityAuthzPolicyHttpRulesTo)
//  .when(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRules.property.from">from</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFrom">GoogleNetworkSecurityAuthzPolicyHttpRulesFrom</a></code> | from block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRules.property.to">to</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesTo">GoogleNetworkSecurityAuthzPolicyHttpRulesTo</a></code> | to block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRules.property.when">when</a></code> | <code>java.lang.String</code> | CEL expression that describes the conditions to be satisfied for the action. |

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRules.property.from"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesFrom getFrom();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFrom">GoogleNetworkSecurityAuthzPolicyHttpRulesFrom</a>

from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#from GoogleNetworkSecurityAuthzPolicy#from}

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRules.property.to"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesTo getTo();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesTo">GoogleNetworkSecurityAuthzPolicyHttpRulesTo</a>

to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#to GoogleNetworkSecurityAuthzPolicy#to}

---

##### `when`<sup>Optional</sup> <a name="when" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRules.property.when"></a>

```java
public java.lang.String getWhen();
```

- *Type:* java.lang.String

CEL expression that describes the conditions to be satisfied for the action.

The result of the CEL expression is ANDed with the from and to. Refer to the CEL language reference for a list of available attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#when GoogleNetworkSecurityAuthzPolicy#when}

---

### GoogleNetworkSecurityAuthzPolicyHttpRulesFrom <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFrom" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFrom.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesFrom;

GoogleNetworkSecurityAuthzPolicyHttpRulesFrom.builder()
//  .notSources(IResolvable)
//  .notSources(java.util.List<GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources>)
//  .sources(IResolvable)
//  .sources(java.util.List<GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFrom.property.notSources">notSources</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources</a>></code> | not_sources block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFrom.property.sources">sources</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources</a>></code> | sources block. |

---

##### `notSources`<sup>Optional</sup> <a name="notSources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFrom.property.notSources"></a>

```java
public java.lang.Object getNotSources();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources</a>>

not_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#not_sources GoogleNetworkSecurityAuthzPolicy#not_sources}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFrom.property.sources"></a>

```java
public java.lang.Object getSources();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources</a>>

sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#sources GoogleNetworkSecurityAuthzPolicy#sources}

---

### GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources;

GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources.builder()
//  .principals(IResolvable)
//  .principals(java.util.List<GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals>)
//  .resources(IResolvable)
//  .resources(java.util.List<GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources.property.principals">principals</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals</a>></code> | principals block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources.property.resources">resources</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources</a>></code> | resources block. |

---

##### `principals`<sup>Optional</sup> <a name="principals" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources.property.principals"></a>

```java
public java.lang.Object getPrincipals();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals</a>>

principals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#principals GoogleNetworkSecurityAuthzPolicy#principals}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources.property.resources"></a>

```java
public java.lang.Object getResources();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources</a>>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#resources GoogleNetworkSecurityAuthzPolicy#resources}

---

### GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals;

GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals.builder()
//  .contains(java.lang.String)
//  .exact(java.lang.String)
//  .ignoreCase(java.lang.Boolean)
//  .ignoreCase(IResolvable)
//  .prefix(java.lang.String)
//  .suffix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals.property.contains">contains</a></code> | <code>java.lang.String</code> | The input string must have the substring specified here. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals.property.exact">exact</a></code> | <code>java.lang.String</code> | The input string must match exactly the string specified here. Examples: * abc only matches the value abc. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals.property.ignoreCase">ignoreCase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals.property.prefix">prefix</a></code> | <code>java.lang.String</code> | The input string must have the prefix specified here. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals.property.suffix">suffix</a></code> | <code>java.lang.String</code> | The input string must have the suffix specified here. |

---

##### `contains`<sup>Optional</sup> <a name="contains" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals.property.contains"></a>

```java
public java.lang.String getContains();
```

- *Type:* java.lang.String

The input string must have the substring specified here.

Note: empty contains match is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc.def

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#contains GoogleNetworkSecurityAuthzPolicy#contains}

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals.property.exact"></a>

```java
public java.lang.String getExact();
```

- *Type:* java.lang.String

The input string must match exactly the string specified here. Examples: * abc only matches the value abc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#exact GoogleNetworkSecurityAuthzPolicy#exact}

---

##### `ignoreCase`<sup>Optional</sup> <a name="ignoreCase" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals.property.ignoreCase"></a>

```java
public java.lang.Object getIgnoreCase();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, indicates the exact/prefix/suffix/contains matching should be case insensitive.

For example, the matcher data will match both input string Data and data if set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#ignore_case GoogleNetworkSecurityAuthzPolicy#ignore_case}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

The input string must have the prefix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value abc.xyz

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#prefix GoogleNetworkSecurityAuthzPolicy#prefix}

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

The input string must have the suffix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#suffix GoogleNetworkSecurityAuthzPolicy#suffix}

---

### GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources;

GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources.builder()
//  .iamServiceAccount(GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount)
//  .tagValueIdSet(GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources.property.iamServiceAccount">iamServiceAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount</a></code> | iam_service_account block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources.property.tagValueIdSet">tagValueIdSet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet</a></code> | tag_value_id_set block. |

---

##### `iamServiceAccount`<sup>Optional</sup> <a name="iamServiceAccount" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources.property.iamServiceAccount"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount getIamServiceAccount();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount</a>

iam_service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#iam_service_account GoogleNetworkSecurityAuthzPolicy#iam_service_account}

---

##### `tagValueIdSet`<sup>Optional</sup> <a name="tagValueIdSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources.property.tagValueIdSet"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet getTagValueIdSet();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet</a>

tag_value_id_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#tag_value_id_set GoogleNetworkSecurityAuthzPolicy#tag_value_id_set}

---

### GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount;

GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount.builder()
//  .contains(java.lang.String)
//  .exact(java.lang.String)
//  .ignoreCase(java.lang.Boolean)
//  .ignoreCase(IResolvable)
//  .prefix(java.lang.String)
//  .suffix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount.property.contains">contains</a></code> | <code>java.lang.String</code> | The input string must have the substring specified here. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount.property.exact">exact</a></code> | <code>java.lang.String</code> | The input string must match exactly the string specified here. Examples: * abc only matches the value abc. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount.property.ignoreCase">ignoreCase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount.property.prefix">prefix</a></code> | <code>java.lang.String</code> | The input string must have the prefix specified here. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount.property.suffix">suffix</a></code> | <code>java.lang.String</code> | The input string must have the suffix specified here. |

---

##### `contains`<sup>Optional</sup> <a name="contains" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount.property.contains"></a>

```java
public java.lang.String getContains();
```

- *Type:* java.lang.String

The input string must have the substring specified here.

Note: empty contains match is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc.def

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#contains GoogleNetworkSecurityAuthzPolicy#contains}

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount.property.exact"></a>

```java
public java.lang.String getExact();
```

- *Type:* java.lang.String

The input string must match exactly the string specified here. Examples: * abc only matches the value abc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#exact GoogleNetworkSecurityAuthzPolicy#exact}

---

##### `ignoreCase`<sup>Optional</sup> <a name="ignoreCase" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount.property.ignoreCase"></a>

```java
public java.lang.Object getIgnoreCase();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, indicates the exact/prefix/suffix/contains matching should be case insensitive.

For example, the matcher data will match both input string Data and data if set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#ignore_case GoogleNetworkSecurityAuthzPolicy#ignore_case}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

The input string must have the prefix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value abc.xyz

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#prefix GoogleNetworkSecurityAuthzPolicy#prefix}

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

The input string must have the suffix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#suffix GoogleNetworkSecurityAuthzPolicy#suffix}

---

### GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet;

GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet.builder()
//  .ids(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet.property.ids">ids</a></code> | <code>java.util.List<java.lang.String></code> | A list of resource tag value permanent IDs to match against the resource manager tags value associated with the source VM of a request. |

---

##### `ids`<sup>Optional</sup> <a name="ids" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet.property.ids"></a>

```java
public java.util.List<java.lang.String> getIds();
```

- *Type:* java.util.List<java.lang.String>

A list of resource tag value permanent IDs to match against the resource manager tags value associated with the source VM of a request.

The match follows AND semantics which means all the ids must match.
Limited to 5 matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#ids GoogleNetworkSecurityAuthzPolicy#ids}

---

### GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources;

GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources.builder()
//  .principals(IResolvable)
//  .principals(java.util.List<GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals>)
//  .resources(IResolvable)
//  .resources(java.util.List<GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources.property.principals">principals</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals</a>></code> | principals block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources.property.resources">resources</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources</a>></code> | resources block. |

---

##### `principals`<sup>Optional</sup> <a name="principals" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources.property.principals"></a>

```java
public java.lang.Object getPrincipals();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals</a>>

principals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#principals GoogleNetworkSecurityAuthzPolicy#principals}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources.property.resources"></a>

```java
public java.lang.Object getResources();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources</a>>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#resources GoogleNetworkSecurityAuthzPolicy#resources}

---

### GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals;

GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals.builder()
//  .contains(java.lang.String)
//  .exact(java.lang.String)
//  .ignoreCase(java.lang.Boolean)
//  .ignoreCase(IResolvable)
//  .prefix(java.lang.String)
//  .suffix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals.property.contains">contains</a></code> | <code>java.lang.String</code> | The input string must have the substring specified here. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals.property.exact">exact</a></code> | <code>java.lang.String</code> | The input string must match exactly the string specified here. Examples: * abc only matches the value abc. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals.property.ignoreCase">ignoreCase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals.property.prefix">prefix</a></code> | <code>java.lang.String</code> | The input string must have the prefix specified here. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals.property.suffix">suffix</a></code> | <code>java.lang.String</code> | The input string must have the suffix specified here. |

---

##### `contains`<sup>Optional</sup> <a name="contains" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals.property.contains"></a>

```java
public java.lang.String getContains();
```

- *Type:* java.lang.String

The input string must have the substring specified here.

Note: empty contains match is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc.def

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#contains GoogleNetworkSecurityAuthzPolicy#contains}

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals.property.exact"></a>

```java
public java.lang.String getExact();
```

- *Type:* java.lang.String

The input string must match exactly the string specified here. Examples: * abc only matches the value abc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#exact GoogleNetworkSecurityAuthzPolicy#exact}

---

##### `ignoreCase`<sup>Optional</sup> <a name="ignoreCase" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals.property.ignoreCase"></a>

```java
public java.lang.Object getIgnoreCase();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, indicates the exact/prefix/suffix/contains matching should be case insensitive.

For example, the matcher data will match both input string Data and data if set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#ignore_case GoogleNetworkSecurityAuthzPolicy#ignore_case}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

The input string must have the prefix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value abc.xyz

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#prefix GoogleNetworkSecurityAuthzPolicy#prefix}

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

The input string must have the suffix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#suffix GoogleNetworkSecurityAuthzPolicy#suffix}

---

### GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources;

GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources.builder()
//  .iamServiceAccount(GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount)
//  .tagValueIdSet(GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources.property.iamServiceAccount">iamServiceAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount</a></code> | iam_service_account block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources.property.tagValueIdSet">tagValueIdSet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet</a></code> | tag_value_id_set block. |

---

##### `iamServiceAccount`<sup>Optional</sup> <a name="iamServiceAccount" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources.property.iamServiceAccount"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount getIamServiceAccount();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount</a>

iam_service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#iam_service_account GoogleNetworkSecurityAuthzPolicy#iam_service_account}

---

##### `tagValueIdSet`<sup>Optional</sup> <a name="tagValueIdSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources.property.tagValueIdSet"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet getTagValueIdSet();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet</a>

tag_value_id_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#tag_value_id_set GoogleNetworkSecurityAuthzPolicy#tag_value_id_set}

---

### GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount;

GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount.builder()
//  .contains(java.lang.String)
//  .exact(java.lang.String)
//  .ignoreCase(java.lang.Boolean)
//  .ignoreCase(IResolvable)
//  .prefix(java.lang.String)
//  .suffix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount.property.contains">contains</a></code> | <code>java.lang.String</code> | The input string must have the substring specified here. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount.property.exact">exact</a></code> | <code>java.lang.String</code> | The input string must match exactly the string specified here. Examples: * abc only matches the value abc. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount.property.ignoreCase">ignoreCase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount.property.prefix">prefix</a></code> | <code>java.lang.String</code> | The input string must have the prefix specified here. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount.property.suffix">suffix</a></code> | <code>java.lang.String</code> | The input string must have the suffix specified here. |

---

##### `contains`<sup>Optional</sup> <a name="contains" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount.property.contains"></a>

```java
public java.lang.String getContains();
```

- *Type:* java.lang.String

The input string must have the substring specified here.

Note: empty contains match is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc.def

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#contains GoogleNetworkSecurityAuthzPolicy#contains}

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount.property.exact"></a>

```java
public java.lang.String getExact();
```

- *Type:* java.lang.String

The input string must match exactly the string specified here. Examples: * abc only matches the value abc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#exact GoogleNetworkSecurityAuthzPolicy#exact}

---

##### `ignoreCase`<sup>Optional</sup> <a name="ignoreCase" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount.property.ignoreCase"></a>

```java
public java.lang.Object getIgnoreCase();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, indicates the exact/prefix/suffix/contains matching should be case insensitive.

For example, the matcher data will match both input string Data and data if set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#ignore_case GoogleNetworkSecurityAuthzPolicy#ignore_case}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

The input string must have the prefix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value abc.xyz

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#prefix GoogleNetworkSecurityAuthzPolicy#prefix}

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

The input string must have the suffix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#suffix GoogleNetworkSecurityAuthzPolicy#suffix}

---

### GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet;

GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet.builder()
//  .ids(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet.property.ids">ids</a></code> | <code>java.util.List<java.lang.String></code> | A list of resource tag value permanent IDs to match against the resource manager tags value associated with the source VM of a request. |

---

##### `ids`<sup>Optional</sup> <a name="ids" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet.property.ids"></a>

```java
public java.util.List<java.lang.String> getIds();
```

- *Type:* java.util.List<java.lang.String>

A list of resource tag value permanent IDs to match against the resource manager tags value associated with the source VM of a request.

The match follows AND semantics which means all the ids must match.
Limited to 5 matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#ids GoogleNetworkSecurityAuthzPolicy#ids}

---

### GoogleNetworkSecurityAuthzPolicyHttpRulesTo <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesTo" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesTo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesTo;

GoogleNetworkSecurityAuthzPolicyHttpRulesTo.builder()
//  .operations(IResolvable)
//  .operations(java.util.List<GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesTo.property.operations">operations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations</a>></code> | operations block. |

---

##### `operations`<sup>Optional</sup> <a name="operations" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesTo.property.operations"></a>

```java
public java.lang.Object getOperations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations</a>>

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#operations GoogleNetworkSecurityAuthzPolicy#operations}

---

### GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations;

GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations.builder()
//  .headerSet(GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet)
//  .hosts(IResolvable)
//  .hosts(java.util.List<GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts>)
//  .methods(java.util.List<java.lang.String>)
//  .paths(IResolvable)
//  .paths(java.util.List<GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations.property.headerSet">headerSet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet</a></code> | header_set block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations.property.hosts">hosts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts</a>></code> | hosts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations.property.methods">methods</a></code> | <code>java.util.List<java.lang.String></code> | A list of HTTP methods to match against. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations.property.paths">paths</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths</a>></code> | paths block. |

---

##### `headerSet`<sup>Optional</sup> <a name="headerSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations.property.headerSet"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet getHeaderSet();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet</a>

header_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#header_set GoogleNetworkSecurityAuthzPolicy#header_set}

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations.property.hosts"></a>

```java
public java.lang.Object getHosts();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts</a>>

hosts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#hosts GoogleNetworkSecurityAuthzPolicy#hosts}

---

##### `methods`<sup>Optional</sup> <a name="methods" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations.property.methods"></a>

```java
public java.util.List<java.lang.String> getMethods();
```

- *Type:* java.util.List<java.lang.String>

A list of HTTP methods to match against.

Each entry must be a valid HTTP method name (GET, PUT, POST, HEAD, PATCH, DELETE, OPTIONS). It only allows exact match and is always case sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#methods GoogleNetworkSecurityAuthzPolicy#methods}

---

##### `paths`<sup>Optional</sup> <a name="paths" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations.property.paths"></a>

```java
public java.lang.Object getPaths();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths</a>>

paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#paths GoogleNetworkSecurityAuthzPolicy#paths}

---

### GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet;

GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet.builder()
//  .headers(IResolvable)
//  .headers(java.util.List<GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet.property.headers">headers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders</a>></code> | headers block. |

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet.property.headers"></a>

```java
public java.lang.Object getHeaders();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders</a>>

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#headers GoogleNetworkSecurityAuthzPolicy#headers}

---

### GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders;

GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders.builder()
//  .name(java.lang.String)
//  .value(GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the name of the header in the request. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders.property.value">value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue</a></code> | value block. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the name of the header in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#name GoogleNetworkSecurityAuthzPolicy#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders.property.value"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue getValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue</a>

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#value GoogleNetworkSecurityAuthzPolicy#value}

---

### GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue;

GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue.builder()
//  .contains(java.lang.String)
//  .exact(java.lang.String)
//  .ignoreCase(java.lang.Boolean)
//  .ignoreCase(IResolvable)
//  .prefix(java.lang.String)
//  .suffix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue.property.contains">contains</a></code> | <code>java.lang.String</code> | The input string must have the substring specified here. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue.property.exact">exact</a></code> | <code>java.lang.String</code> | The input string must match exactly the string specified here. Examples: * abc only matches the value abc. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue.property.ignoreCase">ignoreCase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue.property.prefix">prefix</a></code> | <code>java.lang.String</code> | The input string must have the prefix specified here. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue.property.suffix">suffix</a></code> | <code>java.lang.String</code> | The input string must have the suffix specified here. |

---

##### `contains`<sup>Optional</sup> <a name="contains" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue.property.contains"></a>

```java
public java.lang.String getContains();
```

- *Type:* java.lang.String

The input string must have the substring specified here.

Note: empty contains match is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc.def

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#contains GoogleNetworkSecurityAuthzPolicy#contains}

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue.property.exact"></a>

```java
public java.lang.String getExact();
```

- *Type:* java.lang.String

The input string must match exactly the string specified here. Examples: * abc only matches the value abc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#exact GoogleNetworkSecurityAuthzPolicy#exact}

---

##### `ignoreCase`<sup>Optional</sup> <a name="ignoreCase" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue.property.ignoreCase"></a>

```java
public java.lang.Object getIgnoreCase();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, indicates the exact/prefix/suffix/contains matching should be case insensitive.

For example, the matcher data will match both input string Data and data if set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#ignore_case GoogleNetworkSecurityAuthzPolicy#ignore_case}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

The input string must have the prefix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value abc.xyz

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#prefix GoogleNetworkSecurityAuthzPolicy#prefix}

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

The input string must have the suffix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#suffix GoogleNetworkSecurityAuthzPolicy#suffix}

---

### GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts;

GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts.builder()
//  .contains(java.lang.String)
//  .exact(java.lang.String)
//  .ignoreCase(java.lang.Boolean)
//  .ignoreCase(IResolvable)
//  .prefix(java.lang.String)
//  .suffix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts.property.contains">contains</a></code> | <code>java.lang.String</code> | The input string must have the substring specified here. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts.property.exact">exact</a></code> | <code>java.lang.String</code> | The input string must match exactly the string specified here. Examples: * abc only matches the value abc. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts.property.ignoreCase">ignoreCase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts.property.prefix">prefix</a></code> | <code>java.lang.String</code> | The input string must have the prefix specified here. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts.property.suffix">suffix</a></code> | <code>java.lang.String</code> | The input string must have the suffix specified here. |

---

##### `contains`<sup>Optional</sup> <a name="contains" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts.property.contains"></a>

```java
public java.lang.String getContains();
```

- *Type:* java.lang.String

The input string must have the substring specified here.

Note: empty contains match is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc.def

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#contains GoogleNetworkSecurityAuthzPolicy#contains}

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts.property.exact"></a>

```java
public java.lang.String getExact();
```

- *Type:* java.lang.String

The input string must match exactly the string specified here. Examples: * abc only matches the value abc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#exact GoogleNetworkSecurityAuthzPolicy#exact}

---

##### `ignoreCase`<sup>Optional</sup> <a name="ignoreCase" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts.property.ignoreCase"></a>

```java
public java.lang.Object getIgnoreCase();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, indicates the exact/prefix/suffix/contains matching should be case insensitive.

For example, the matcher data will match both input string Data and data if set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#ignore_case GoogleNetworkSecurityAuthzPolicy#ignore_case}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

The input string must have the prefix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value abc.xyz

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#prefix GoogleNetworkSecurityAuthzPolicy#prefix}

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

The input string must have the suffix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#suffix GoogleNetworkSecurityAuthzPolicy#suffix}

---

### GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths;

GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths.builder()
//  .contains(java.lang.String)
//  .exact(java.lang.String)
//  .ignoreCase(java.lang.Boolean)
//  .ignoreCase(IResolvable)
//  .prefix(java.lang.String)
//  .suffix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths.property.contains">contains</a></code> | <code>java.lang.String</code> | The input string must have the substring specified here. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths.property.exact">exact</a></code> | <code>java.lang.String</code> | The input string must match exactly the string specified here. Examples: * abc only matches the value abc. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths.property.ignoreCase">ignoreCase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths.property.prefix">prefix</a></code> | <code>java.lang.String</code> | The input string must have the prefix specified here. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths.property.suffix">suffix</a></code> | <code>java.lang.String</code> | The input string must have the suffix specified here. |

---

##### `contains`<sup>Optional</sup> <a name="contains" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths.property.contains"></a>

```java
public java.lang.String getContains();
```

- *Type:* java.lang.String

The input string must have the substring specified here.

Note: empty contains match is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc.def

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#contains GoogleNetworkSecurityAuthzPolicy#contains}

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths.property.exact"></a>

```java
public java.lang.String getExact();
```

- *Type:* java.lang.String

The input string must match exactly the string specified here. Examples: * abc only matches the value abc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#exact GoogleNetworkSecurityAuthzPolicy#exact}

---

##### `ignoreCase`<sup>Optional</sup> <a name="ignoreCase" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths.property.ignoreCase"></a>

```java
public java.lang.Object getIgnoreCase();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, indicates the exact/prefix/suffix/contains matching should be case insensitive.

For example, the matcher data will match both input string Data and data if set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#ignore_case GoogleNetworkSecurityAuthzPolicy#ignore_case}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

The input string must have the prefix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value abc.xyz

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#prefix GoogleNetworkSecurityAuthzPolicy#prefix}

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

The input string must have the suffix specified here.

Note: empty prefix is not allowed, please use regex instead.
Examples:

* abc matches the value xyz.abc

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#suffix GoogleNetworkSecurityAuthzPolicy#suffix}

---

### GoogleNetworkSecurityAuthzPolicyTarget <a name="GoogleNetworkSecurityAuthzPolicyTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyTarget;

GoogleNetworkSecurityAuthzPolicyTarget.builder()
    .loadBalancingScheme(java.lang.String)
//  .resources(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTarget.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>java.lang.String</code> | All gateways and forwarding rules referenced by this policy and extensions must share the same load balancing scheme. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTarget.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | A list of references to the Forwarding Rules on which this policy will be applied. |

---

##### `loadBalancingScheme`<sup>Required</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTarget.property.loadBalancingScheme"></a>

```java
public java.lang.String getLoadBalancingScheme();
```

- *Type:* java.lang.String

All gateways and forwarding rules referenced by this policy and extensions must share the same load balancing scheme.

For more information, refer to [Backend services overview](https://cloud.google.com/load-balancing/docs/backend-service). Possible values: ["INTERNAL_MANAGED", "EXTERNAL_MANAGED", "INTERNAL_SELF_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#load_balancing_scheme GoogleNetworkSecurityAuthzPolicy#load_balancing_scheme}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTarget.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

A list of references to the Forwarding Rules on which this policy will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#resources GoogleNetworkSecurityAuthzPolicy#resources}

---

### GoogleNetworkSecurityAuthzPolicyTimeouts <a name="GoogleNetworkSecurityAuthzPolicyTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyTimeouts;

GoogleNetworkSecurityAuthzPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#create GoogleNetworkSecurityAuthzPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#delete GoogleNetworkSecurityAuthzPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#update GoogleNetworkSecurityAuthzPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#create GoogleNetworkSecurityAuthzPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#delete GoogleNetworkSecurityAuthzPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_authz_policy#update GoogleNetworkSecurityAuthzPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference <a name="GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference;

new GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension">GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.property.resourcesInput"></a>

```java
public java.util.List<java.lang.String> getResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference.property.internalValue"></a>

```java
public GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension">GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension</a>

---


### GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference <a name="GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference;

new GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap">GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference.property.internalValue"></a>

```java
public GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap">GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap</a>

---


### GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference <a name="GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference;

new GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.putAuthzExtension">putAuthzExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.putCloudIap">putCloudIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.resetAuthzExtension">resetAuthzExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.resetCloudIap">resetCloudIap</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthzExtension` <a name="putAuthzExtension" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.putAuthzExtension"></a>

```java
public void putAuthzExtension(GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.putAuthzExtension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension">GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension</a>

---

##### `putCloudIap` <a name="putCloudIap" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.putCloudIap"></a>

```java
public void putCloudIap(GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.putCloudIap.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap">GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap</a>

---

##### `resetAuthzExtension` <a name="resetAuthzExtension" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.resetAuthzExtension"></a>

```java
public void resetAuthzExtension()
```

##### `resetCloudIap` <a name="resetCloudIap" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.resetCloudIap"></a>

```java
public void resetCloudIap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.property.authzExtension">authzExtension</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference">GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.property.cloudIap">cloudIap</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference">GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.property.authzExtensionInput">authzExtensionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension">GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.property.cloudIapInput">cloudIapInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap">GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProvider">GoogleNetworkSecurityAuthzPolicyCustomProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authzExtension`<sup>Required</sup> <a name="authzExtension" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.property.authzExtension"></a>

```java
public GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference getAuthzExtension();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference">GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference</a>

---

##### `cloudIap`<sup>Required</sup> <a name="cloudIap" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.property.cloudIap"></a>

```java
public GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference getCloudIap();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference">GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference</a>

---

##### `authzExtensionInput`<sup>Optional</sup> <a name="authzExtensionInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.property.authzExtensionInput"></a>

```java
public GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension getAuthzExtensionInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension">GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension</a>

---

##### `cloudIapInput`<sup>Optional</sup> <a name="cloudIapInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.property.cloudIapInput"></a>

```java
public GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap getCloudIapInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap">GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference.property.internalValue"></a>

```java
public GoogleNetworkSecurityAuthzPolicyCustomProvider getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyCustomProvider">GoogleNetworkSecurityAuthzPolicyCustomProvider</a>

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList;

new GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.get"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources</a>>

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference;

new GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.putPrincipals">putPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.putResources">putResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.resetPrincipals">resetPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.resetResources">resetResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrincipals` <a name="putPrincipals" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.putPrincipals"></a>

```java
public void putPrincipals(IResolvable OR java.util.List<GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.putPrincipals.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals</a>>

---

##### `putResources` <a name="putResources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.putResources"></a>

```java
public void putResources(IResolvable OR java.util.List<GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.putResources.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources</a>>

---

##### `resetPrincipals` <a name="resetPrincipals" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.resetPrincipals"></a>

```java
public void resetPrincipals()
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.resetResources"></a>

```java
public void resetResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.property.principals">principals</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.property.principalsInput">principalsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.property.principals"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList getPrincipals();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.property.resources"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList getResources();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList</a>

---

##### `principalsInput`<sup>Optional</sup> <a name="principalsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.property.principalsInput"></a>

```java
public java.lang.Object getPrincipalsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals</a>>

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.property.resourcesInput"></a>

```java
public java.lang.Object getResourcesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources</a>

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList;

new GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.get"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals</a>>

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference;

new GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.resetContains">resetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.resetExact">resetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.resetIgnoreCase">resetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.resetSuffix">resetSuffix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContains` <a name="resetContains" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.resetContains"></a>

```java
public void resetContains()
```

##### `resetExact` <a name="resetExact" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.resetExact"></a>

```java
public void resetExact()
```

##### `resetIgnoreCase` <a name="resetIgnoreCase" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.resetIgnoreCase"></a>

```java
public void resetIgnoreCase()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```

##### `resetSuffix` <a name="resetSuffix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.resetSuffix"></a>

```java
public void resetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.containsInput">containsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.exactInput">exactInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.ignoreCaseInput">ignoreCaseInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.suffixInput">suffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.contains">contains</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.exact">exact</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.ignoreCase">ignoreCase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.suffix">suffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containsInput`<sup>Optional</sup> <a name="containsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.containsInput"></a>

```java
public java.lang.String getContainsInput();
```

- *Type:* java.lang.String

---

##### `exactInput`<sup>Optional</sup> <a name="exactInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.exactInput"></a>

```java
public java.lang.String getExactInput();
```

- *Type:* java.lang.String

---

##### `ignoreCaseInput`<sup>Optional</sup> <a name="ignoreCaseInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.ignoreCaseInput"></a>

```java
public java.lang.Object getIgnoreCaseInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `suffixInput`<sup>Optional</sup> <a name="suffixInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.suffixInput"></a>

```java
public java.lang.String getSuffixInput();
```

- *Type:* java.lang.String

---

##### `contains`<sup>Required</sup> <a name="contains" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.contains"></a>

```java
public java.lang.String getContains();
```

- *Type:* java.lang.String

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.exact"></a>

```java
public java.lang.String getExact();
```

- *Type:* java.lang.String

---

##### `ignoreCase`<sup>Required</sup> <a name="ignoreCase" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.ignoreCase"></a>

```java
public java.lang.Object getIgnoreCase();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals</a>

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference;

new GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.resetContains">resetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.resetExact">resetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.resetIgnoreCase">resetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.resetSuffix">resetSuffix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContains` <a name="resetContains" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.resetContains"></a>

```java
public void resetContains()
```

##### `resetExact` <a name="resetExact" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.resetExact"></a>

```java
public void resetExact()
```

##### `resetIgnoreCase` <a name="resetIgnoreCase" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.resetIgnoreCase"></a>

```java
public void resetIgnoreCase()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```

##### `resetSuffix` <a name="resetSuffix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.resetSuffix"></a>

```java
public void resetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.containsInput">containsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.exactInput">exactInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.ignoreCaseInput">ignoreCaseInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.suffixInput">suffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.contains">contains</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.exact">exact</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.ignoreCase">ignoreCase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.suffix">suffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containsInput`<sup>Optional</sup> <a name="containsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.containsInput"></a>

```java
public java.lang.String getContainsInput();
```

- *Type:* java.lang.String

---

##### `exactInput`<sup>Optional</sup> <a name="exactInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.exactInput"></a>

```java
public java.lang.String getExactInput();
```

- *Type:* java.lang.String

---

##### `ignoreCaseInput`<sup>Optional</sup> <a name="ignoreCaseInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.ignoreCaseInput"></a>

```java
public java.lang.Object getIgnoreCaseInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `suffixInput`<sup>Optional</sup> <a name="suffixInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.suffixInput"></a>

```java
public java.lang.String getSuffixInput();
```

- *Type:* java.lang.String

---

##### `contains`<sup>Required</sup> <a name="contains" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.contains"></a>

```java
public java.lang.String getContains();
```

- *Type:* java.lang.String

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.exact"></a>

```java
public java.lang.String getExact();
```

- *Type:* java.lang.String

---

##### `ignoreCase`<sup>Required</sup> <a name="ignoreCase" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.ignoreCase"></a>

```java
public java.lang.Object getIgnoreCase();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference.property.internalValue"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount</a>

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList;

new GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.get"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources</a>>

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference;

new GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.putIamServiceAccount">putIamServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.putTagValueIdSet">putTagValueIdSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.resetIamServiceAccount">resetIamServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.resetTagValueIdSet">resetTagValueIdSet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIamServiceAccount` <a name="putIamServiceAccount" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.putIamServiceAccount"></a>

```java
public void putIamServiceAccount(GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.putIamServiceAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount</a>

---

##### `putTagValueIdSet` <a name="putTagValueIdSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.putTagValueIdSet"></a>

```java
public void putTagValueIdSet(GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.putTagValueIdSet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet</a>

---

##### `resetIamServiceAccount` <a name="resetIamServiceAccount" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.resetIamServiceAccount"></a>

```java
public void resetIamServiceAccount()
```

##### `resetTagValueIdSet` <a name="resetTagValueIdSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.resetTagValueIdSet"></a>

```java
public void resetTagValueIdSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.property.iamServiceAccount">iamServiceAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.property.tagValueIdSet">tagValueIdSet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.property.iamServiceAccountInput">iamServiceAccountInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.property.tagValueIdSetInput">tagValueIdSetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `iamServiceAccount`<sup>Required</sup> <a name="iamServiceAccount" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.property.iamServiceAccount"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference getIamServiceAccount();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference</a>

---

##### `tagValueIdSet`<sup>Required</sup> <a name="tagValueIdSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.property.tagValueIdSet"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference getTagValueIdSet();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference</a>

---

##### `iamServiceAccountInput`<sup>Optional</sup> <a name="iamServiceAccountInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.property.iamServiceAccountInput"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount getIamServiceAccountInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount</a>

---

##### `tagValueIdSetInput`<sup>Optional</sup> <a name="tagValueIdSetInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.property.tagValueIdSetInput"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet getTagValueIdSetInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources</a>

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference;

new GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.resetIds">resetIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIds` <a name="resetIds" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.resetIds"></a>

```java
public void resetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.property.idsInput">idsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.property.ids">ids</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idsInput`<sup>Optional</sup> <a name="idsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.property.idsInput"></a>

```java
public java.util.List<java.lang.String> getIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.property.ids"></a>

```java
public java.util.List<java.lang.String> getIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference.property.internalValue"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet</a>

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference;

new GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.putNotSources">putNotSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.putSources">putSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.resetNotSources">resetNotSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.resetSources">resetSources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNotSources` <a name="putNotSources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.putNotSources"></a>

```java
public void putNotSources(IResolvable OR java.util.List<GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.putNotSources.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources</a>>

---

##### `putSources` <a name="putSources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.putSources"></a>

```java
public void putSources(IResolvable OR java.util.List<GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.putSources.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources</a>>

---

##### `resetNotSources` <a name="resetNotSources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.resetNotSources"></a>

```java
public void resetNotSources()
```

##### `resetSources` <a name="resetSources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.resetSources"></a>

```java
public void resetSources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.property.notSources">notSources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.property.sources">sources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.property.notSourcesInput">notSourcesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.property.sourcesInput">sourcesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFrom">GoogleNetworkSecurityAuthzPolicyHttpRulesFrom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `notSources`<sup>Required</sup> <a name="notSources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.property.notSources"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList getNotSources();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList</a>

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.property.sources"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList getSources();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList</a>

---

##### `notSourcesInput`<sup>Optional</sup> <a name="notSourcesInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.property.notSourcesInput"></a>

```java
public java.lang.Object getNotSourcesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources">GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources</a>>

---

##### `sourcesInput`<sup>Optional</sup> <a name="sourcesInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.property.sourcesInput"></a>

```java
public java.lang.Object getSourcesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference.property.internalValue"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesFrom getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFrom">GoogleNetworkSecurityAuthzPolicyHttpRulesFrom</a>

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList;

new GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.get"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources</a>>

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference;

new GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.putPrincipals">putPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.putResources">putResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.resetPrincipals">resetPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.resetResources">resetResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrincipals` <a name="putPrincipals" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.putPrincipals"></a>

```java
public void putPrincipals(IResolvable OR java.util.List<GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.putPrincipals.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals</a>>

---

##### `putResources` <a name="putResources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.putResources"></a>

```java
public void putResources(IResolvable OR java.util.List<GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.putResources.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources</a>>

---

##### `resetPrincipals` <a name="resetPrincipals" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.resetPrincipals"></a>

```java
public void resetPrincipals()
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.resetResources"></a>

```java
public void resetResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.property.principals">principals</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.property.principalsInput">principalsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.property.principals"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList getPrincipals();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.property.resources"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList getResources();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList</a>

---

##### `principalsInput`<sup>Optional</sup> <a name="principalsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.property.principalsInput"></a>

```java
public java.lang.Object getPrincipalsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals</a>>

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.property.resourcesInput"></a>

```java
public java.lang.Object getResourcesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources</a>

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList;

new GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.get"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals</a>>

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference;

new GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.resetContains">resetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.resetExact">resetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.resetIgnoreCase">resetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.resetSuffix">resetSuffix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContains` <a name="resetContains" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.resetContains"></a>

```java
public void resetContains()
```

##### `resetExact` <a name="resetExact" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.resetExact"></a>

```java
public void resetExact()
```

##### `resetIgnoreCase` <a name="resetIgnoreCase" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.resetIgnoreCase"></a>

```java
public void resetIgnoreCase()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```

##### `resetSuffix` <a name="resetSuffix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.resetSuffix"></a>

```java
public void resetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.containsInput">containsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.exactInput">exactInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.ignoreCaseInput">ignoreCaseInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.suffixInput">suffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.contains">contains</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.exact">exact</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.ignoreCase">ignoreCase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.suffix">suffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containsInput`<sup>Optional</sup> <a name="containsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.containsInput"></a>

```java
public java.lang.String getContainsInput();
```

- *Type:* java.lang.String

---

##### `exactInput`<sup>Optional</sup> <a name="exactInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.exactInput"></a>

```java
public java.lang.String getExactInput();
```

- *Type:* java.lang.String

---

##### `ignoreCaseInput`<sup>Optional</sup> <a name="ignoreCaseInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.ignoreCaseInput"></a>

```java
public java.lang.Object getIgnoreCaseInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `suffixInput`<sup>Optional</sup> <a name="suffixInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.suffixInput"></a>

```java
public java.lang.String getSuffixInput();
```

- *Type:* java.lang.String

---

##### `contains`<sup>Required</sup> <a name="contains" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.contains"></a>

```java
public java.lang.String getContains();
```

- *Type:* java.lang.String

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.exact"></a>

```java
public java.lang.String getExact();
```

- *Type:* java.lang.String

---

##### `ignoreCase`<sup>Required</sup> <a name="ignoreCase" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.ignoreCase"></a>

```java
public java.lang.Object getIgnoreCase();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals</a>

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference;

new GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.resetContains">resetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.resetExact">resetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.resetIgnoreCase">resetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.resetSuffix">resetSuffix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContains` <a name="resetContains" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.resetContains"></a>

```java
public void resetContains()
```

##### `resetExact` <a name="resetExact" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.resetExact"></a>

```java
public void resetExact()
```

##### `resetIgnoreCase` <a name="resetIgnoreCase" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.resetIgnoreCase"></a>

```java
public void resetIgnoreCase()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```

##### `resetSuffix` <a name="resetSuffix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.resetSuffix"></a>

```java
public void resetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.containsInput">containsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.exactInput">exactInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.ignoreCaseInput">ignoreCaseInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.suffixInput">suffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.contains">contains</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.exact">exact</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.ignoreCase">ignoreCase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.suffix">suffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containsInput`<sup>Optional</sup> <a name="containsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.containsInput"></a>

```java
public java.lang.String getContainsInput();
```

- *Type:* java.lang.String

---

##### `exactInput`<sup>Optional</sup> <a name="exactInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.exactInput"></a>

```java
public java.lang.String getExactInput();
```

- *Type:* java.lang.String

---

##### `ignoreCaseInput`<sup>Optional</sup> <a name="ignoreCaseInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.ignoreCaseInput"></a>

```java
public java.lang.Object getIgnoreCaseInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `suffixInput`<sup>Optional</sup> <a name="suffixInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.suffixInput"></a>

```java
public java.lang.String getSuffixInput();
```

- *Type:* java.lang.String

---

##### `contains`<sup>Required</sup> <a name="contains" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.contains"></a>

```java
public java.lang.String getContains();
```

- *Type:* java.lang.String

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.exact"></a>

```java
public java.lang.String getExact();
```

- *Type:* java.lang.String

---

##### `ignoreCase`<sup>Required</sup> <a name="ignoreCase" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.ignoreCase"></a>

```java
public java.lang.Object getIgnoreCase();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference.property.internalValue"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount</a>

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList;

new GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.get"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources</a>>

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference;

new GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.putIamServiceAccount">putIamServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.putTagValueIdSet">putTagValueIdSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.resetIamServiceAccount">resetIamServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.resetTagValueIdSet">resetTagValueIdSet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIamServiceAccount` <a name="putIamServiceAccount" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.putIamServiceAccount"></a>

```java
public void putIamServiceAccount(GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.putIamServiceAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount</a>

---

##### `putTagValueIdSet` <a name="putTagValueIdSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.putTagValueIdSet"></a>

```java
public void putTagValueIdSet(GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.putTagValueIdSet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet</a>

---

##### `resetIamServiceAccount` <a name="resetIamServiceAccount" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.resetIamServiceAccount"></a>

```java
public void resetIamServiceAccount()
```

##### `resetTagValueIdSet` <a name="resetTagValueIdSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.resetTagValueIdSet"></a>

```java
public void resetTagValueIdSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.property.iamServiceAccount">iamServiceAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.property.tagValueIdSet">tagValueIdSet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.property.iamServiceAccountInput">iamServiceAccountInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.property.tagValueIdSetInput">tagValueIdSetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `iamServiceAccount`<sup>Required</sup> <a name="iamServiceAccount" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.property.iamServiceAccount"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference getIamServiceAccount();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference</a>

---

##### `tagValueIdSet`<sup>Required</sup> <a name="tagValueIdSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.property.tagValueIdSet"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference getTagValueIdSet();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference</a>

---

##### `iamServiceAccountInput`<sup>Optional</sup> <a name="iamServiceAccountInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.property.iamServiceAccountInput"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount getIamServiceAccountInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount</a>

---

##### `tagValueIdSetInput`<sup>Optional</sup> <a name="tagValueIdSetInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.property.tagValueIdSetInput"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet getTagValueIdSetInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources</a>

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference;

new GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.resetIds">resetIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIds` <a name="resetIds" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.resetIds"></a>

```java
public void resetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.property.idsInput">idsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.property.ids">ids</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idsInput`<sup>Optional</sup> <a name="idsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.property.idsInput"></a>

```java
public java.util.List<java.lang.String> getIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.property.ids"></a>

```java
public java.util.List<java.lang.String> getIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference.property.internalValue"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet">GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet</a>

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesList <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesList" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesList;

new GoogleNetworkSecurityAuthzPolicyHttpRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.get"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRules">GoogleNetworkSecurityAuthzPolicyHttpRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRules">GoogleNetworkSecurityAuthzPolicyHttpRules</a>>

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference;

new GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.putFrom">putFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.putTo">putTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.resetFrom">resetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.resetTo">resetTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.resetWhen">resetWhen</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFrom` <a name="putFrom" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.putFrom"></a>

```java
public void putFrom(GoogleNetworkSecurityAuthzPolicyHttpRulesFrom value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.putFrom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFrom">GoogleNetworkSecurityAuthzPolicyHttpRulesFrom</a>

---

##### `putTo` <a name="putTo" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.putTo"></a>

```java
public void putTo(GoogleNetworkSecurityAuthzPolicyHttpRulesTo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.putTo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesTo">GoogleNetworkSecurityAuthzPolicyHttpRulesTo</a>

---

##### `resetFrom` <a name="resetFrom" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.resetFrom"></a>

```java
public void resetFrom()
```

##### `resetTo` <a name="resetTo" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.resetTo"></a>

```java
public void resetTo()
```

##### `resetWhen` <a name="resetWhen" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.resetWhen"></a>

```java
public void resetWhen()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.property.from">from</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference">GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.property.to">to</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference">GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.property.fromInput">fromInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFrom">GoogleNetworkSecurityAuthzPolicyHttpRulesFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.property.toInput">toInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesTo">GoogleNetworkSecurityAuthzPolicyHttpRulesTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.property.whenInput">whenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.property.when">when</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRules">GoogleNetworkSecurityAuthzPolicyHttpRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.property.from"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference getFrom();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference">GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference</a>

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.property.to"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference getTo();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference">GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference</a>

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.property.fromInput"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesFrom getFromInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesFrom">GoogleNetworkSecurityAuthzPolicyHttpRulesFrom</a>

---

##### `toInput`<sup>Optional</sup> <a name="toInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.property.toInput"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesTo getToInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesTo">GoogleNetworkSecurityAuthzPolicyHttpRulesTo</a>

---

##### `whenInput`<sup>Optional</sup> <a name="whenInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.property.whenInput"></a>

```java
public java.lang.String getWhenInput();
```

- *Type:* java.lang.String

---

##### `when`<sup>Required</sup> <a name="when" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.property.when"></a>

```java
public java.lang.String getWhen();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRules">GoogleNetworkSecurityAuthzPolicyHttpRules</a>

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList;

new GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.get"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders</a>>

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference;

new GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValue` <a name="putValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.putValue"></a>

```java
public void putValue(GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue</a>

---

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.property.value">value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.property.valueInput">valueInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.property.value"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference getValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.property.valueInput"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue getValueInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders</a>

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference;

new GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.resetContains">resetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.resetExact">resetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.resetIgnoreCase">resetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.resetSuffix">resetSuffix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContains` <a name="resetContains" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.resetContains"></a>

```java
public void resetContains()
```

##### `resetExact` <a name="resetExact" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.resetExact"></a>

```java
public void resetExact()
```

##### `resetIgnoreCase` <a name="resetIgnoreCase" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.resetIgnoreCase"></a>

```java
public void resetIgnoreCase()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```

##### `resetSuffix` <a name="resetSuffix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.resetSuffix"></a>

```java
public void resetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.containsInput">containsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.exactInput">exactInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.ignoreCaseInput">ignoreCaseInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.suffixInput">suffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.contains">contains</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.exact">exact</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.ignoreCase">ignoreCase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.suffix">suffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containsInput`<sup>Optional</sup> <a name="containsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.containsInput"></a>

```java
public java.lang.String getContainsInput();
```

- *Type:* java.lang.String

---

##### `exactInput`<sup>Optional</sup> <a name="exactInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.exactInput"></a>

```java
public java.lang.String getExactInput();
```

- *Type:* java.lang.String

---

##### `ignoreCaseInput`<sup>Optional</sup> <a name="ignoreCaseInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.ignoreCaseInput"></a>

```java
public java.lang.Object getIgnoreCaseInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `suffixInput`<sup>Optional</sup> <a name="suffixInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.suffixInput"></a>

```java
public java.lang.String getSuffixInput();
```

- *Type:* java.lang.String

---

##### `contains`<sup>Required</sup> <a name="contains" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.contains"></a>

```java
public java.lang.String getContains();
```

- *Type:* java.lang.String

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.exact"></a>

```java
public java.lang.String getExact();
```

- *Type:* java.lang.String

---

##### `ignoreCase`<sup>Required</sup> <a name="ignoreCase" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.ignoreCase"></a>

```java
public java.lang.Object getIgnoreCase();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference.property.internalValue"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue</a>

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference;

new GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.putHeaders"></a>

```java
public void putHeaders(IResolvable OR java.util.List<GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.putHeaders.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders</a>>

---

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.resetHeaders"></a>

```java
public void resetHeaders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.property.headersInput">headersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.property.headers"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList getHeaders();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList</a>

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.property.headersInput"></a>

```java
public java.lang.Object getHeadersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference.property.internalValue"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet</a>

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList;

new GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.get"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts</a>>

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference;

new GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.resetContains">resetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.resetExact">resetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.resetIgnoreCase">resetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.resetSuffix">resetSuffix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContains` <a name="resetContains" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.resetContains"></a>

```java
public void resetContains()
```

##### `resetExact` <a name="resetExact" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.resetExact"></a>

```java
public void resetExact()
```

##### `resetIgnoreCase` <a name="resetIgnoreCase" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.resetIgnoreCase"></a>

```java
public void resetIgnoreCase()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```

##### `resetSuffix` <a name="resetSuffix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.resetSuffix"></a>

```java
public void resetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.containsInput">containsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.exactInput">exactInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.ignoreCaseInput">ignoreCaseInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.suffixInput">suffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.contains">contains</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.exact">exact</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.ignoreCase">ignoreCase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.suffix">suffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containsInput`<sup>Optional</sup> <a name="containsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.containsInput"></a>

```java
public java.lang.String getContainsInput();
```

- *Type:* java.lang.String

---

##### `exactInput`<sup>Optional</sup> <a name="exactInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.exactInput"></a>

```java
public java.lang.String getExactInput();
```

- *Type:* java.lang.String

---

##### `ignoreCaseInput`<sup>Optional</sup> <a name="ignoreCaseInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.ignoreCaseInput"></a>

```java
public java.lang.Object getIgnoreCaseInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `suffixInput`<sup>Optional</sup> <a name="suffixInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.suffixInput"></a>

```java
public java.lang.String getSuffixInput();
```

- *Type:* java.lang.String

---

##### `contains`<sup>Required</sup> <a name="contains" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.contains"></a>

```java
public java.lang.String getContains();
```

- *Type:* java.lang.String

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.exact"></a>

```java
public java.lang.String getExact();
```

- *Type:* java.lang.String

---

##### `ignoreCase`<sup>Required</sup> <a name="ignoreCase" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.ignoreCase"></a>

```java
public java.lang.Object getIgnoreCase();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts</a>

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList;

new GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.get"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations</a>>

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference;

new GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.putHeaderSet">putHeaderSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.putHosts">putHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.putPaths">putPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.resetHeaderSet">resetHeaderSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.resetHosts">resetHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.resetMethods">resetMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.resetPaths">resetPaths</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaderSet` <a name="putHeaderSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.putHeaderSet"></a>

```java
public void putHeaderSet(GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.putHeaderSet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet</a>

---

##### `putHosts` <a name="putHosts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.putHosts"></a>

```java
public void putHosts(IResolvable OR java.util.List<GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.putHosts.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts</a>>

---

##### `putPaths` <a name="putPaths" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.putPaths"></a>

```java
public void putPaths(IResolvable OR java.util.List<GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.putPaths.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths</a>>

---

##### `resetHeaderSet` <a name="resetHeaderSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.resetHeaderSet"></a>

```java
public void resetHeaderSet()
```

##### `resetHosts` <a name="resetHosts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.resetHosts"></a>

```java
public void resetHosts()
```

##### `resetMethods` <a name="resetMethods" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.resetMethods"></a>

```java
public void resetMethods()
```

##### `resetPaths` <a name="resetPaths" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.resetPaths"></a>

```java
public void resetPaths()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.headerSet">headerSet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.hosts">hosts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.paths">paths</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.headerSetInput">headerSetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.hostsInput">hostsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.methodsInput">methodsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.pathsInput">pathsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.methods">methods</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headerSet`<sup>Required</sup> <a name="headerSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.headerSet"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference getHeaderSet();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference</a>

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.hosts"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList getHosts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList</a>

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.paths"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList getPaths();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList</a>

---

##### `headerSetInput`<sup>Optional</sup> <a name="headerSetInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.headerSetInput"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet getHeaderSetInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet</a>

---

##### `hostsInput`<sup>Optional</sup> <a name="hostsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.hostsInput"></a>

```java
public java.lang.Object getHostsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts</a>>

---

##### `methodsInput`<sup>Optional</sup> <a name="methodsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.methodsInput"></a>

```java
public java.util.List<java.lang.String> getMethodsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pathsInput`<sup>Optional</sup> <a name="pathsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.pathsInput"></a>

```java
public java.lang.Object getPathsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths</a>>

---

##### `methods`<sup>Required</sup> <a name="methods" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.methods"></a>

```java
public java.util.List<java.lang.String> getMethods();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations</a>

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList;

new GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.get"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths</a>>

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference;

new GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.resetContains">resetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.resetExact">resetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.resetIgnoreCase">resetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.resetSuffix">resetSuffix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContains` <a name="resetContains" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.resetContains"></a>

```java
public void resetContains()
```

##### `resetExact` <a name="resetExact" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.resetExact"></a>

```java
public void resetExact()
```

##### `resetIgnoreCase` <a name="resetIgnoreCase" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.resetIgnoreCase"></a>

```java
public void resetIgnoreCase()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```

##### `resetSuffix` <a name="resetSuffix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.resetSuffix"></a>

```java
public void resetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.containsInput">containsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.exactInput">exactInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.ignoreCaseInput">ignoreCaseInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.suffixInput">suffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.contains">contains</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.exact">exact</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.ignoreCase">ignoreCase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.suffix">suffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containsInput`<sup>Optional</sup> <a name="containsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.containsInput"></a>

```java
public java.lang.String getContainsInput();
```

- *Type:* java.lang.String

---

##### `exactInput`<sup>Optional</sup> <a name="exactInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.exactInput"></a>

```java
public java.lang.String getExactInput();
```

- *Type:* java.lang.String

---

##### `ignoreCaseInput`<sup>Optional</sup> <a name="ignoreCaseInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.ignoreCaseInput"></a>

```java
public java.lang.Object getIgnoreCaseInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `suffixInput`<sup>Optional</sup> <a name="suffixInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.suffixInput"></a>

```java
public java.lang.String getSuffixInput();
```

- *Type:* java.lang.String

---

##### `contains`<sup>Required</sup> <a name="contains" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.contains"></a>

```java
public java.lang.String getContains();
```

- *Type:* java.lang.String

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.exact"></a>

```java
public java.lang.String getExact();
```

- *Type:* java.lang.String

---

##### `ignoreCase`<sup>Required</sup> <a name="ignoreCase" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.ignoreCase"></a>

```java
public java.lang.Object getIgnoreCase();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths</a>

---


### GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference <a name="GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference;

new GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.putOperations">putOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.resetOperations">resetOperations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOperations` <a name="putOperations" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.putOperations"></a>

```java
public void putOperations(IResolvable OR java.util.List<GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.putOperations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations</a>>

---

##### `resetOperations` <a name="resetOperations" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.resetOperations"></a>

```java
public void resetOperations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.property.operations">operations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.property.operationsInput">operationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesTo">GoogleNetworkSecurityAuthzPolicyHttpRulesTo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.property.operations"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList getOperations();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList</a>

---

##### `operationsInput`<sup>Optional</sup> <a name="operationsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.property.operationsInput"></a>

```java
public java.lang.Object getOperationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations">GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference.property.internalValue"></a>

```java
public GoogleNetworkSecurityAuthzPolicyHttpRulesTo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyHttpRulesTo">GoogleNetworkSecurityAuthzPolicyHttpRulesTo</a>

---


### GoogleNetworkSecurityAuthzPolicyTargetOutputReference <a name="GoogleNetworkSecurityAuthzPolicyTargetOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference;

new GoogleNetworkSecurityAuthzPolicyTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.resetResources">resetResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResources` <a name="resetResources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.resetResources"></a>

```java
public void resetResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.property.loadBalancingSchemeInput">loadBalancingSchemeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTarget">GoogleNetworkSecurityAuthzPolicyTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `loadBalancingSchemeInput`<sup>Optional</sup> <a name="loadBalancingSchemeInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.property.loadBalancingSchemeInput"></a>

```java
public java.lang.String getLoadBalancingSchemeInput();
```

- *Type:* java.lang.String

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.property.resourcesInput"></a>

```java
public java.util.List<java.lang.String> getResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loadBalancingScheme`<sup>Required</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.property.loadBalancingScheme"></a>

```java
public java.lang.String getLoadBalancingScheme();
```

- *Type:* java.lang.String

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTargetOutputReference.property.internalValue"></a>

```java
public GoogleNetworkSecurityAuthzPolicyTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTarget">GoogleNetworkSecurityAuthzPolicyTarget</a>

---


### GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference <a name="GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_authz_policy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference;

new GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeouts">GoogleNetworkSecurityAuthzPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthzPolicy.GoogleNetworkSecurityAuthzPolicyTimeouts">GoogleNetworkSecurityAuthzPolicyTimeouts</a>

---



