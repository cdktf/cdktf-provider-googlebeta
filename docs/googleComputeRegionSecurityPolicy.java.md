# `googleComputeRegionSecurityPolicy` Submodule <a name="`googleComputeRegionSecurityPolicy` Submodule" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionSecurityPolicy <a name="GoogleComputeRegionSecurityPolicy" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy google_compute_region_security_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicy;

GoogleComputeRegionSecurityPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .ddosProtectionConfig(GoogleComputeRegionSecurityPolicyDdosProtectionConfig)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .rules(IResolvable)
//  .rules(java.util.List<GoogleComputeRegionSecurityPolicyRules>)
//  .timeouts(GoogleComputeRegionSecurityPolicyTimeouts)
//  .type(java.lang.String)
//  .userDefinedFields(IResolvable)
//  .userDefinedFields(java.util.List<GoogleComputeRegionSecurityPolicyUserDefinedFields>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.ddosProtectionConfig">ddosProtectionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfig">GoogleComputeRegionSecurityPolicyDdosProtectionConfig</a></code> | ddos_protection_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#id GoogleComputeRegionSecurityPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#project GoogleComputeRegionSecurityPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The Region in which the created Region Security Policy should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules">GoogleComputeRegionSecurityPolicyRules</a>></code> | rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts">GoogleComputeRegionSecurityPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type indicates the intended use of the security policy. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.userDefinedFields">userDefinedFields</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields">GoogleComputeRegionSecurityPolicyUserDefinedFields</a>></code> | user_defined_fields block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
Specifically, the name must be 1-63 characters long and match the regular expression [a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#name GoogleComputeRegionSecurityPolicy#name}

---

##### `ddosProtectionConfig`<sup>Optional</sup> <a name="ddosProtectionConfig" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.ddosProtectionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfig">GoogleComputeRegionSecurityPolicyDdosProtectionConfig</a>

ddos_protection_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#ddos_protection_config GoogleComputeRegionSecurityPolicy#ddos_protection_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#description GoogleComputeRegionSecurityPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#id GoogleComputeRegionSecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#project GoogleComputeRegionSecurityPolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The Region in which the created Region Security Policy should reside.

If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#region GoogleComputeRegionSecurityPolicy#region}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.rules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules">GoogleComputeRegionSecurityPolicyRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#rules GoogleComputeRegionSecurityPolicy#rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts">GoogleComputeRegionSecurityPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#timeouts GoogleComputeRegionSecurityPolicy#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type indicates the intended use of the security policy.

* CLOUD_ARMOR: Cloud Armor backend security policies can be configured to filter incoming HTTP requests targeting backend services. They filter requests before they hit the origin servers.
* CLOUD_ARMOR_EDGE: Cloud Armor edge security policies can be configured to filter incoming HTTP requests targeting backend services (including Cloud CDN-enabled) as well as backend buckets (Cloud Storage). They filter requests before the request is served from Google's cache.
* CLOUD_ARMOR_NETWORK: Cloud Armor network policies can be configured to filter packets targeting network load balancing resources such as backend services, target pools, target instances, and instances with external IPs. They filter requests before the request is served from the application.
  This field can be set only at resource creation time. Possible values: ["CLOUD_ARMOR", "CLOUD_ARMOR_EDGE", "CLOUD_ARMOR_NETWORK"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#type GoogleComputeRegionSecurityPolicy#type}

---

##### `userDefinedFields`<sup>Optional</sup> <a name="userDefinedFields" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.userDefinedFields"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields">GoogleComputeRegionSecurityPolicyUserDefinedFields</a>>

user_defined_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#user_defined_fields GoogleComputeRegionSecurityPolicy#user_defined_fields}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.putDdosProtectionConfig">putDdosProtectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.putUserDefinedFields">putUserDefinedFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetDdosProtectionConfig">resetDdosProtectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetRules">resetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetUserDefinedFields">resetUserDefinedFields</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDdosProtectionConfig` <a name="putDdosProtectionConfig" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.putDdosProtectionConfig"></a>

```java
public void putDdosProtectionConfig(GoogleComputeRegionSecurityPolicyDdosProtectionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.putDdosProtectionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfig">GoogleComputeRegionSecurityPolicyDdosProtectionConfig</a>

---

##### `putRules` <a name="putRules" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.putRules"></a>

```java
public void putRules(IResolvable OR java.util.List<GoogleComputeRegionSecurityPolicyRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.putRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules">GoogleComputeRegionSecurityPolicyRules</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeRegionSecurityPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts">GoogleComputeRegionSecurityPolicyTimeouts</a>

---

##### `putUserDefinedFields` <a name="putUserDefinedFields" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.putUserDefinedFields"></a>

```java
public void putUserDefinedFields(IResolvable OR java.util.List<GoogleComputeRegionSecurityPolicyUserDefinedFields> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.putUserDefinedFields.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields">GoogleComputeRegionSecurityPolicyUserDefinedFields</a>>

---

##### `resetDdosProtectionConfig` <a name="resetDdosProtectionConfig" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetDdosProtectionConfig"></a>

```java
public void resetDdosProtectionConfig()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRules` <a name="resetRules" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetRules"></a>

```java
public void resetRules()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetType"></a>

```java
public void resetType()
```

##### `resetUserDefinedFields` <a name="resetUserDefinedFields" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetUserDefinedFields"></a>

```java
public void resetUserDefinedFields()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeRegionSecurityPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicy;

GoogleComputeRegionSecurityPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicy;

GoogleComputeRegionSecurityPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicy;

GoogleComputeRegionSecurityPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicy;

GoogleComputeRegionSecurityPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputeRegionSecurityPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleComputeRegionSecurityPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputeRegionSecurityPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputeRegionSecurityPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRegionSecurityPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.ddosProtectionConfig">ddosProtectionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference">GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.policyId">policyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList">GoogleComputeRegionSecurityPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.selfLinkWithPolicyId">selfLinkWithPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference">GoogleComputeRegionSecurityPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.userDefinedFields">userDefinedFields</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList">GoogleComputeRegionSecurityPolicyUserDefinedFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.ddosProtectionConfigInput">ddosProtectionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfig">GoogleComputeRegionSecurityPolicyDdosProtectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.rulesInput">rulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules">GoogleComputeRegionSecurityPolicyRules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts">GoogleComputeRegionSecurityPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.userDefinedFieldsInput">userDefinedFieldsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields">GoogleComputeRegionSecurityPolicyUserDefinedFields</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ddosProtectionConfig`<sup>Required</sup> <a name="ddosProtectionConfig" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.ddosProtectionConfig"></a>

```java
public GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference getDdosProtectionConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference">GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference</a>

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.rules"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesList getRules();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList">GoogleComputeRegionSecurityPolicyRulesList</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `selfLinkWithPolicyId`<sup>Required</sup> <a name="selfLinkWithPolicyId" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.selfLinkWithPolicyId"></a>

```java
public java.lang.String getSelfLinkWithPolicyId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.timeouts"></a>

```java
public GoogleComputeRegionSecurityPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference">GoogleComputeRegionSecurityPolicyTimeoutsOutputReference</a>

---

##### `userDefinedFields`<sup>Required</sup> <a name="userDefinedFields" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.userDefinedFields"></a>

```java
public GoogleComputeRegionSecurityPolicyUserDefinedFieldsList getUserDefinedFields();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList">GoogleComputeRegionSecurityPolicyUserDefinedFieldsList</a>

---

##### `ddosProtectionConfigInput`<sup>Optional</sup> <a name="ddosProtectionConfigInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.ddosProtectionConfigInput"></a>

```java
public GoogleComputeRegionSecurityPolicyDdosProtectionConfig getDdosProtectionConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfig">GoogleComputeRegionSecurityPolicyDdosProtectionConfig</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.rulesInput"></a>

```java
public java.lang.Object getRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules">GoogleComputeRegionSecurityPolicyRules</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts">GoogleComputeRegionSecurityPolicyTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `userDefinedFieldsInput`<sup>Optional</sup> <a name="userDefinedFieldsInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.userDefinedFieldsInput"></a>

```java
public java.lang.Object getUserDefinedFieldsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields">GoogleComputeRegionSecurityPolicyUserDefinedFields</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionSecurityPolicyConfig <a name="GoogleComputeRegionSecurityPolicyConfig" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyConfig;

GoogleComputeRegionSecurityPolicyConfig.builder()
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
    .name(java.lang.String)
//  .ddosProtectionConfig(GoogleComputeRegionSecurityPolicyDdosProtectionConfig)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .rules(IResolvable)
//  .rules(java.util.List<GoogleComputeRegionSecurityPolicyRules>)
//  .timeouts(GoogleComputeRegionSecurityPolicyTimeouts)
//  .type(java.lang.String)
//  .userDefinedFields(IResolvable)
//  .userDefinedFields(java.util.List<GoogleComputeRegionSecurityPolicyUserDefinedFields>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.ddosProtectionConfig">ddosProtectionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfig">GoogleComputeRegionSecurityPolicyDdosProtectionConfig</a></code> | ddos_protection_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#id GoogleComputeRegionSecurityPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#project GoogleComputeRegionSecurityPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.region">region</a></code> | <code>java.lang.String</code> | The Region in which the created Region Security Policy should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules">GoogleComputeRegionSecurityPolicyRules</a>></code> | rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts">GoogleComputeRegionSecurityPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type indicates the intended use of the security policy. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.userDefinedFields">userDefinedFields</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields">GoogleComputeRegionSecurityPolicyUserDefinedFields</a>></code> | user_defined_fields block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
Specifically, the name must be 1-63 characters long and match the regular expression [a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#name GoogleComputeRegionSecurityPolicy#name}

---

##### `ddosProtectionConfig`<sup>Optional</sup> <a name="ddosProtectionConfig" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.ddosProtectionConfig"></a>

```java
public GoogleComputeRegionSecurityPolicyDdosProtectionConfig getDdosProtectionConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfig">GoogleComputeRegionSecurityPolicyDdosProtectionConfig</a>

ddos_protection_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#ddos_protection_config GoogleComputeRegionSecurityPolicy#ddos_protection_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#description GoogleComputeRegionSecurityPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#id GoogleComputeRegionSecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#project GoogleComputeRegionSecurityPolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The Region in which the created Region Security Policy should reside.

If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#region GoogleComputeRegionSecurityPolicy#region}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.rules"></a>

```java
public java.lang.Object getRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules">GoogleComputeRegionSecurityPolicyRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#rules GoogleComputeRegionSecurityPolicy#rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.timeouts"></a>

```java
public GoogleComputeRegionSecurityPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts">GoogleComputeRegionSecurityPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#timeouts GoogleComputeRegionSecurityPolicy#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type indicates the intended use of the security policy.

* CLOUD_ARMOR: Cloud Armor backend security policies can be configured to filter incoming HTTP requests targeting backend services. They filter requests before they hit the origin servers.
* CLOUD_ARMOR_EDGE: Cloud Armor edge security policies can be configured to filter incoming HTTP requests targeting backend services (including Cloud CDN-enabled) as well as backend buckets (Cloud Storage). They filter requests before the request is served from Google's cache.
* CLOUD_ARMOR_NETWORK: Cloud Armor network policies can be configured to filter packets targeting network load balancing resources such as backend services, target pools, target instances, and instances with external IPs. They filter requests before the request is served from the application.
  This field can be set only at resource creation time. Possible values: ["CLOUD_ARMOR", "CLOUD_ARMOR_EDGE", "CLOUD_ARMOR_NETWORK"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#type GoogleComputeRegionSecurityPolicy#type}

---

##### `userDefinedFields`<sup>Optional</sup> <a name="userDefinedFields" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.userDefinedFields"></a>

```java
public java.lang.Object getUserDefinedFields();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields">GoogleComputeRegionSecurityPolicyUserDefinedFields</a>>

user_defined_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#user_defined_fields GoogleComputeRegionSecurityPolicy#user_defined_fields}

---

### GoogleComputeRegionSecurityPolicyDdosProtectionConfig <a name="GoogleComputeRegionSecurityPolicyDdosProtectionConfig" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyDdosProtectionConfig;

GoogleComputeRegionSecurityPolicyDdosProtectionConfig.builder()
    .ddosProtection(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfig.property.ddosProtection">ddosProtection</a></code> | <code>java.lang.String</code> | Google Cloud Armor offers the following options to help protect systems against DDoS attacks: - STANDARD: basic always-on protection for network load balancers, protocol forwarding, or VMs with public IP addresses. |

---

##### `ddosProtection`<sup>Required</sup> <a name="ddosProtection" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfig.property.ddosProtection"></a>

```java
public java.lang.String getDdosProtection();
```

- *Type:* java.lang.String

Google Cloud Armor offers the following options to help protect systems against DDoS attacks: - STANDARD: basic always-on protection for network load balancers, protocol forwarding, or VMs with public IP addresses.

* ADVANCED: additional protections for Managed Protection Plus subscribers who use network load balancers, protocol forwarding, or VMs with public IP addresses.
* ADVANCED_PREVIEW: flag to enable the security policy in preview mode. Possible values: ["ADVANCED", "ADVANCED_PREVIEW", "STANDARD"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#ddos_protection GoogleComputeRegionSecurityPolicy#ddos_protection}

---

### GoogleComputeRegionSecurityPolicyRules <a name="GoogleComputeRegionSecurityPolicyRules" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyRules;

GoogleComputeRegionSecurityPolicyRules.builder()
    .action(java.lang.String)
    .priority(java.lang.Number)
//  .description(java.lang.String)
//  .match(GoogleComputeRegionSecurityPolicyRulesMatch)
//  .networkMatch(GoogleComputeRegionSecurityPolicyRulesNetworkMatch)
//  .preconfiguredWafConfig(GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig)
//  .preview(java.lang.Boolean)
//  .preview(IResolvable)
//  .rateLimitOptions(GoogleComputeRegionSecurityPolicyRulesRateLimitOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules.property.action">action</a></code> | <code>java.lang.String</code> | The Action to perform when the rule is matched. The following are the valid actions:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules.property.priority">priority</a></code> | <code>java.lang.Number</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules.property.match">match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatch">GoogleComputeRegionSecurityPolicyRulesMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules.property.networkMatch">networkMatch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch">GoogleComputeRegionSecurityPolicyRulesNetworkMatch</a></code> | network_match block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules.property.preconfiguredWafConfig">preconfiguredWafConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig</a></code> | preconfigured_waf_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules.property.preview">preview</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, the specified action is not enforced. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules.property.rateLimitOptions">rateLimitOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions">GoogleComputeRegionSecurityPolicyRulesRateLimitOptions</a></code> | rate_limit_options block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

The Action to perform when the rule is matched. The following are the valid actions:.

* allow: allow access to target.
* deny(STATUS): deny access to target, returns the HTTP response code specified. Valid values for STATUS are 403, 404, and 502.
* rate_based_ban: limit client traffic to the configured threshold and ban the client if the traffic exceeds the threshold. Configure parameters for this action in RateLimitOptions. Requires rateLimitOptions to be set.
* redirect: redirect to a different target. This can either be an internal reCAPTCHA redirect, or an external URL-based redirect via a 302 response. Parameters for this action can be configured via redirectOptions. This action is only supported in Global Security Policies of type CLOUD_ARMOR.
* throttle: limit client traffic to the configured threshold. Configure parameters for this action in rateLimitOptions. Requires rateLimitOptions to be set for this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#action GoogleComputeRegionSecurityPolicy#action}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

An integer indicating the priority of a rule in the list.

The priority must be a positive value between 0 and 2147483647.
Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#priority GoogleComputeRegionSecurityPolicy#priority}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#description GoogleComputeRegionSecurityPolicy#description}

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules.property.match"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesMatch getMatch();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatch">GoogleComputeRegionSecurityPolicyRulesMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#match GoogleComputeRegionSecurityPolicy#match}

---

##### `networkMatch`<sup>Optional</sup> <a name="networkMatch" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules.property.networkMatch"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesNetworkMatch getNetworkMatch();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch">GoogleComputeRegionSecurityPolicyRulesNetworkMatch</a>

network_match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#network_match GoogleComputeRegionSecurityPolicy#network_match}

---

##### `preconfiguredWafConfig`<sup>Optional</sup> <a name="preconfiguredWafConfig" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules.property.preconfiguredWafConfig"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig getPreconfiguredWafConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig</a>

preconfigured_waf_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#preconfigured_waf_config GoogleComputeRegionSecurityPolicy#preconfigured_waf_config}

---

##### `preview`<sup>Optional</sup> <a name="preview" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules.property.preview"></a>

```java
public java.lang.Object getPreview();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, the specified action is not enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#preview GoogleComputeRegionSecurityPolicy#preview}

---

##### `rateLimitOptions`<sup>Optional</sup> <a name="rateLimitOptions" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules.property.rateLimitOptions"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesRateLimitOptions getRateLimitOptions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions">GoogleComputeRegionSecurityPolicyRulesRateLimitOptions</a>

rate_limit_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#rate_limit_options GoogleComputeRegionSecurityPolicy#rate_limit_options}

---

### GoogleComputeRegionSecurityPolicyRulesMatch <a name="GoogleComputeRegionSecurityPolicyRulesMatch" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyRulesMatch;

GoogleComputeRegionSecurityPolicyRulesMatch.builder()
//  .config(GoogleComputeRegionSecurityPolicyRulesMatchConfig)
//  .expr(GoogleComputeRegionSecurityPolicyRulesMatchExpr)
//  .versionedExpr(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatch.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfig">GoogleComputeRegionSecurityPolicyRulesMatchConfig</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatch.property.expr">expr</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExpr">GoogleComputeRegionSecurityPolicyRulesMatchExpr</a></code> | expr block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatch.property.versionedExpr">versionedExpr</a></code> | <code>java.lang.String</code> | Preconfigured versioned expression. |

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatch.property.config"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesMatchConfig getConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfig">GoogleComputeRegionSecurityPolicyRulesMatchConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#config GoogleComputeRegionSecurityPolicy#config}

---

##### `expr`<sup>Optional</sup> <a name="expr" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatch.property.expr"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesMatchExpr getExpr();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExpr">GoogleComputeRegionSecurityPolicyRulesMatchExpr</a>

expr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#expr GoogleComputeRegionSecurityPolicy#expr}

---

##### `versionedExpr`<sup>Optional</sup> <a name="versionedExpr" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatch.property.versionedExpr"></a>

```java
public java.lang.String getVersionedExpr();
```

- *Type:* java.lang.String

Preconfigured versioned expression.

If this field is specified, config must also be specified.
Available preconfigured expressions along with their requirements are: SRC_IPS_V1 - must specify the corresponding srcIpRange field in config. Possible values: ["SRC_IPS_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#versioned_expr GoogleComputeRegionSecurityPolicy#versioned_expr}

---

### GoogleComputeRegionSecurityPolicyRulesMatchConfig <a name="GoogleComputeRegionSecurityPolicyRulesMatchConfig" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyRulesMatchConfig;

GoogleComputeRegionSecurityPolicyRulesMatchConfig.builder()
//  .srcIpRanges(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfig.property.srcIpRanges">srcIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | CIDR IP address range. Maximum number of srcIpRanges allowed is 10. |

---

##### `srcIpRanges`<sup>Optional</sup> <a name="srcIpRanges" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfig.property.srcIpRanges"></a>

```java
public java.util.List<java.lang.String> getSrcIpRanges();
```

- *Type:* java.util.List<java.lang.String>

CIDR IP address range. Maximum number of srcIpRanges allowed is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#src_ip_ranges GoogleComputeRegionSecurityPolicy#src_ip_ranges}

---

### GoogleComputeRegionSecurityPolicyRulesMatchExpr <a name="GoogleComputeRegionSecurityPolicyRulesMatchExpr" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExpr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExpr.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyRulesMatchExpr;

GoogleComputeRegionSecurityPolicyRulesMatchExpr.builder()
    .expression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExpr.property.expression">expression</a></code> | <code>java.lang.String</code> | Textual representation of an expression in Common Expression Language syntax. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExpr.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Textual representation of an expression in Common Expression Language syntax.

The application context of the containing message determines which well-known feature set of CEL is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#expression GoogleComputeRegionSecurityPolicy#expression}

---

### GoogleComputeRegionSecurityPolicyRulesNetworkMatch <a name="GoogleComputeRegionSecurityPolicyRulesNetworkMatch" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch;

GoogleComputeRegionSecurityPolicyRulesNetworkMatch.builder()
//  .destIpRanges(java.util.List<java.lang.String>)
//  .destPorts(java.util.List<java.lang.String>)
//  .ipProtocols(java.util.List<java.lang.String>)
//  .srcAsns(java.util.List<java.lang.Number>)
//  .srcIpRanges(java.util.List<java.lang.String>)
//  .srcPorts(java.util.List<java.lang.String>)
//  .srcRegionCodes(java.util.List<java.lang.String>)
//  .userDefinedFields(IResolvable)
//  .userDefinedFields(java.util.List<GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch.property.destIpRanges">destIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | Destination IPv4/IPv6 addresses or CIDR prefixes, in standard text format. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch.property.destPorts">destPorts</a></code> | <code>java.util.List<java.lang.String></code> | Destination port numbers for TCP/UDP/SCTP. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch.property.ipProtocols">ipProtocols</a></code> | <code>java.util.List<java.lang.String></code> | IPv4 protocol / IPv6 next header (after extension headers). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch.property.srcAsns">srcAsns</a></code> | <code>java.util.List<java.lang.Number></code> | BGP Autonomous System Number associated with the source IP address. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch.property.srcIpRanges">srcIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | Source IPv4/IPv6 addresses or CIDR prefixes, in standard text format. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch.property.srcPorts">srcPorts</a></code> | <code>java.util.List<java.lang.String></code> | Source port numbers for TCP/UDP/SCTP. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch.property.srcRegionCodes">srcRegionCodes</a></code> | <code>java.util.List<java.lang.String></code> | Two-letter ISO 3166-1 alpha-2 country code associated with the source IP address. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch.property.userDefinedFields">userDefinedFields</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields">GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields</a>></code> | user_defined_fields block. |

---

##### `destIpRanges`<sup>Optional</sup> <a name="destIpRanges" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch.property.destIpRanges"></a>

```java
public java.util.List<java.lang.String> getDestIpRanges();
```

- *Type:* java.util.List<java.lang.String>

Destination IPv4/IPv6 addresses or CIDR prefixes, in standard text format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#dest_ip_ranges GoogleComputeRegionSecurityPolicy#dest_ip_ranges}

---

##### `destPorts`<sup>Optional</sup> <a name="destPorts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch.property.destPorts"></a>

```java
public java.util.List<java.lang.String> getDestPorts();
```

- *Type:* java.util.List<java.lang.String>

Destination port numbers for TCP/UDP/SCTP.

Each element can be a 16-bit unsigned decimal number (e.g. "80") or range (e.g. "0-1023").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#dest_ports GoogleComputeRegionSecurityPolicy#dest_ports}

---

##### `ipProtocols`<sup>Optional</sup> <a name="ipProtocols" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch.property.ipProtocols"></a>

```java
public java.util.List<java.lang.String> getIpProtocols();
```

- *Type:* java.util.List<java.lang.String>

IPv4 protocol / IPv6 next header (after extension headers).

Each element can be an 8-bit unsigned decimal number (e.g. "6"), range (e.g. "253-254"), or one of the following protocol names: "tcp", "udp", "icmp", "esp", "ah", "ipip", or "sctp".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#ip_protocols GoogleComputeRegionSecurityPolicy#ip_protocols}

---

##### `srcAsns`<sup>Optional</sup> <a name="srcAsns" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch.property.srcAsns"></a>

```java
public java.util.List<java.lang.Number> getSrcAsns();
```

- *Type:* java.util.List<java.lang.Number>

BGP Autonomous System Number associated with the source IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#src_asns GoogleComputeRegionSecurityPolicy#src_asns}

---

##### `srcIpRanges`<sup>Optional</sup> <a name="srcIpRanges" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch.property.srcIpRanges"></a>

```java
public java.util.List<java.lang.String> getSrcIpRanges();
```

- *Type:* java.util.List<java.lang.String>

Source IPv4/IPv6 addresses or CIDR prefixes, in standard text format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#src_ip_ranges GoogleComputeRegionSecurityPolicy#src_ip_ranges}

---

##### `srcPorts`<sup>Optional</sup> <a name="srcPorts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch.property.srcPorts"></a>

```java
public java.util.List<java.lang.String> getSrcPorts();
```

- *Type:* java.util.List<java.lang.String>

Source port numbers for TCP/UDP/SCTP.

Each element can be a 16-bit unsigned decimal number (e.g. "80") or range (e.g. "0-1023").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#src_ports GoogleComputeRegionSecurityPolicy#src_ports}

---

##### `srcRegionCodes`<sup>Optional</sup> <a name="srcRegionCodes" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch.property.srcRegionCodes"></a>

```java
public java.util.List<java.lang.String> getSrcRegionCodes();
```

- *Type:* java.util.List<java.lang.String>

Two-letter ISO 3166-1 alpha-2 country code associated with the source IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#src_region_codes GoogleComputeRegionSecurityPolicy#src_region_codes}

---

##### `userDefinedFields`<sup>Optional</sup> <a name="userDefinedFields" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch.property.userDefinedFields"></a>

```java
public java.lang.Object getUserDefinedFields();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields">GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields</a>>

user_defined_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#user_defined_fields GoogleComputeRegionSecurityPolicy#user_defined_fields}

---

### GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields <a name="GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields;

GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields.builder()
//  .name(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields.property.name">name</a></code> | <code>java.lang.String</code> | Name of the user-defined field, as given in the definition. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Matching values of the field. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the user-defined field, as given in the definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#name GoogleComputeRegionSecurityPolicy#name}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Matching values of the field.

Each element can be a 32-bit unsigned decimal or hexadecimal (starting with "0x") number (e.g. "64") or range (e.g. "0x400-0x7ff").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#values GoogleComputeRegionSecurityPolicy#values}

---

### GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig <a name="GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig;

GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig.builder()
//  .exclusion(IResolvable)
//  .exclusion(java.util.List<GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig.property.exclusion">exclusion</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion</a>></code> | exclusion block. |

---

##### `exclusion`<sup>Optional</sup> <a name="exclusion" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig.property.exclusion"></a>

```java
public java.lang.Object getExclusion();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion</a>>

exclusion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#exclusion GoogleComputeRegionSecurityPolicy#exclusion}

---

### GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion <a name="GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion;

GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.builder()
    .targetRuleSet(java.lang.String)
//  .requestCookie(IResolvable)
//  .requestCookie(java.util.List<GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie>)
//  .requestHeader(IResolvable)
//  .requestHeader(java.util.List<GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader>)
//  .requestQueryParam(IResolvable)
//  .requestQueryParam(java.util.List<GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam>)
//  .requestUri(IResolvable)
//  .requestUri(java.util.List<GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri>)
//  .targetRuleIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.targetRuleSet">targetRuleSet</a></code> | <code>java.lang.String</code> | Target WAF rule set to apply the preconfigured WAF exclusion. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.requestCookie">requestCookie</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie</a>></code> | request_cookie block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.requestHeader">requestHeader</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader</a>></code> | request_header block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.requestQueryParam">requestQueryParam</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam</a>></code> | request_query_param block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.requestUri">requestUri</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri</a>></code> | request_uri block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.targetRuleIds">targetRuleIds</a></code> | <code>java.util.List<java.lang.String></code> | A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion. |

---

##### `targetRuleSet`<sup>Required</sup> <a name="targetRuleSet" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.targetRuleSet"></a>

```java
public java.lang.String getTargetRuleSet();
```

- *Type:* java.lang.String

Target WAF rule set to apply the preconfigured WAF exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#target_rule_set GoogleComputeRegionSecurityPolicy#target_rule_set}

---

##### `requestCookie`<sup>Optional</sup> <a name="requestCookie" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.requestCookie"></a>

```java
public java.lang.Object getRequestCookie();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie</a>>

request_cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#request_cookie GoogleComputeRegionSecurityPolicy#request_cookie}

---

##### `requestHeader`<sup>Optional</sup> <a name="requestHeader" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.requestHeader"></a>

```java
public java.lang.Object getRequestHeader();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader</a>>

request_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#request_header GoogleComputeRegionSecurityPolicy#request_header}

---

##### `requestQueryParam`<sup>Optional</sup> <a name="requestQueryParam" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.requestQueryParam"></a>

```java
public java.lang.Object getRequestQueryParam();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam</a>>

request_query_param block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#request_query_param GoogleComputeRegionSecurityPolicy#request_query_param}

---

##### `requestUri`<sup>Optional</sup> <a name="requestUri" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.requestUri"></a>

```java
public java.lang.Object getRequestUri();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri</a>>

request_uri block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#request_uri GoogleComputeRegionSecurityPolicy#request_uri}

---

##### `targetRuleIds`<sup>Optional</sup> <a name="targetRuleIds" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.targetRuleIds"></a>

```java
public java.util.List<java.lang.String> getTargetRuleIds();
```

- *Type:* java.util.List<java.lang.String>

A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion.

If omitted, it refers to all the rule IDs under the WAF rule set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#target_rule_ids GoogleComputeRegionSecurityPolicy#target_rule_ids}

---

### GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie <a name="GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie;

GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie.builder()
    .operator(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie.property.operator">operator</a></code> | <code>java.lang.String</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie.property.value">value</a></code> | <code>java.lang.String</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value. Possible values: ["CONTAINS", "ENDS_WITH", "EQUALS", "EQUALS_ANY", "STARTS_WITH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#operator GoogleComputeRegionSecurityPolicy#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#value GoogleComputeRegionSecurityPolicy#value}

---

### GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader <a name="GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader;

GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader.builder()
    .operator(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader.property.operator">operator</a></code> | <code>java.lang.String</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader.property.value">value</a></code> | <code>java.lang.String</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value. Possible values: ["CONTAINS", "ENDS_WITH", "EQUALS", "EQUALS_ANY", "STARTS_WITH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#operator GoogleComputeRegionSecurityPolicy#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#value GoogleComputeRegionSecurityPolicy#value}

---

### GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam <a name="GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam;

GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam.builder()
    .operator(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam.property.operator">operator</a></code> | <code>java.lang.String</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam.property.value">value</a></code> | <code>java.lang.String</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value. Possible values: ["CONTAINS", "ENDS_WITH", "EQUALS", "EQUALS_ANY", "STARTS_WITH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#operator GoogleComputeRegionSecurityPolicy#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#value GoogleComputeRegionSecurityPolicy#value}

---

### GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri <a name="GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri;

GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri.builder()
    .operator(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri.property.operator">operator</a></code> | <code>java.lang.String</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri.property.value">value</a></code> | <code>java.lang.String</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value. Possible values: ["CONTAINS", "ENDS_WITH", "EQUALS", "EQUALS_ANY", "STARTS_WITH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#operator GoogleComputeRegionSecurityPolicy#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#value GoogleComputeRegionSecurityPolicy#value}

---

### GoogleComputeRegionSecurityPolicyRulesRateLimitOptions <a name="GoogleComputeRegionSecurityPolicyRulesRateLimitOptions" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions;

GoogleComputeRegionSecurityPolicyRulesRateLimitOptions.builder()
//  .banDurationSec(java.lang.Number)
//  .banThreshold(GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold)
//  .conformAction(java.lang.String)
//  .enforceOnKey(java.lang.String)
//  .enforceOnKeyConfigs(IResolvable)
//  .enforceOnKeyConfigs(java.util.List<GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs>)
//  .enforceOnKeyName(java.lang.String)
//  .exceedAction(java.lang.String)
//  .rateLimitThreshold(GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions.property.banDurationSec">banDurationSec</a></code> | <code>java.lang.Number</code> | Can only be specified if the action for the rule is "rate_based_ban". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions.property.banThreshold">banThreshold</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold</a></code> | ban_threshold block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions.property.conformAction">conformAction</a></code> | <code>java.lang.String</code> | Action to take for requests that are under the configured rate limit threshold. Valid option is "allow" only. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions.property.enforceOnKey">enforceOnKey</a></code> | <code>java.lang.String</code> | Determines the key to enforce the rateLimitThreshold on. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions.property.enforceOnKeyConfigs">enforceOnKeyConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs</a>></code> | enforce_on_key_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions.property.enforceOnKeyName">enforceOnKeyName</a></code> | <code>java.lang.String</code> | Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions.property.exceedAction">exceedAction</a></code> | <code>java.lang.String</code> | Action to take for requests that are above the configured rate limit threshold, to deny with a specified HTTP response code. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions.property.rateLimitThreshold">rateLimitThreshold</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold</a></code> | rate_limit_threshold block. |

---

##### `banDurationSec`<sup>Optional</sup> <a name="banDurationSec" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions.property.banDurationSec"></a>

```java
public java.lang.Number getBanDurationSec();
```

- *Type:* java.lang.Number

Can only be specified if the action for the rule is "rate_based_ban".

If specified, determines the time (in seconds) the traffic will continue to be banned by the rate limit after the rate falls below the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#ban_duration_sec GoogleComputeRegionSecurityPolicy#ban_duration_sec}

---

##### `banThreshold`<sup>Optional</sup> <a name="banThreshold" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions.property.banThreshold"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold getBanThreshold();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold</a>

ban_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#ban_threshold GoogleComputeRegionSecurityPolicy#ban_threshold}

---

##### `conformAction`<sup>Optional</sup> <a name="conformAction" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions.property.conformAction"></a>

```java
public java.lang.String getConformAction();
```

- *Type:* java.lang.String

Action to take for requests that are under the configured rate limit threshold. Valid option is "allow" only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#conform_action GoogleComputeRegionSecurityPolicy#conform_action}

---

##### `enforceOnKey`<sup>Optional</sup> <a name="enforceOnKey" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions.property.enforceOnKey"></a>

```java
public java.lang.String getEnforceOnKey();
```

- *Type:* java.lang.String

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#enforce_on_key GoogleComputeRegionSecurityPolicy#enforce_on_key}

---

##### `enforceOnKeyConfigs`<sup>Optional</sup> <a name="enforceOnKeyConfigs" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions.property.enforceOnKeyConfigs"></a>

```java
public java.lang.Object getEnforceOnKeyConfigs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs</a>>

enforce_on_key_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#enforce_on_key_configs GoogleComputeRegionSecurityPolicy#enforce_on_key_configs}

---

##### `enforceOnKeyName`<sup>Optional</sup> <a name="enforceOnKeyName" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions.property.enforceOnKeyName"></a>

```java
public java.lang.String getEnforceOnKeyName();
```

- *Type:* java.lang.String

Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value.

HTTP_COOKIE -- Name of the HTTP cookie whose value is taken as the key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#enforce_on_key_name GoogleComputeRegionSecurityPolicy#enforce_on_key_name}

---

##### `exceedAction`<sup>Optional</sup> <a name="exceedAction" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions.property.exceedAction"></a>

```java
public java.lang.String getExceedAction();
```

- *Type:* java.lang.String

Action to take for requests that are above the configured rate limit threshold, to deny with a specified HTTP response code.

Valid options are deny(STATUS), where valid values for STATUS are 403, 404, 429, and 502.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#exceed_action GoogleComputeRegionSecurityPolicy#exceed_action}

---

##### `rateLimitThreshold`<sup>Optional</sup> <a name="rateLimitThreshold" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions.property.rateLimitThreshold"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold getRateLimitThreshold();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold</a>

rate_limit_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#rate_limit_threshold GoogleComputeRegionSecurityPolicy#rate_limit_threshold}

---

### GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold <a name="GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold;

GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold.builder()
//  .count(java.lang.Number)
//  .intervalSec(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold.property.count">count</a></code> | <code>java.lang.Number</code> | Number of HTTP(S) requests for calculating the threshold. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold.property.intervalSec">intervalSec</a></code> | <code>java.lang.Number</code> | Interval over which the threshold is computed. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

Number of HTTP(S) requests for calculating the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#count GoogleComputeRegionSecurityPolicy#count}

---

##### `intervalSec`<sup>Optional</sup> <a name="intervalSec" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold.property.intervalSec"></a>

```java
public java.lang.Number getIntervalSec();
```

- *Type:* java.lang.Number

Interval over which the threshold is computed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#interval_sec GoogleComputeRegionSecurityPolicy#interval_sec}

---

### GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs <a name="GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs;

GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs.builder()
//  .enforceOnKeyName(java.lang.String)
//  .enforceOnKeyType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyName">enforceOnKeyName</a></code> | <code>java.lang.String</code> | Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyType">enforceOnKeyType</a></code> | <code>java.lang.String</code> | Determines the key to enforce the rateLimitThreshold on. |

---

##### `enforceOnKeyName`<sup>Optional</sup> <a name="enforceOnKeyName" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyName"></a>

```java
public java.lang.String getEnforceOnKeyName();
```

- *Type:* java.lang.String

Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value.

HTTP_COOKIE -- Name of the HTTP cookie whose value is taken as the key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#enforce_on_key_name GoogleComputeRegionSecurityPolicy#enforce_on_key_name}

---

##### `enforceOnKeyType`<sup>Optional</sup> <a name="enforceOnKeyType" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyType"></a>

```java
public java.lang.String getEnforceOnKeyType();
```

- *Type:* java.lang.String

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#enforce_on_key_type GoogleComputeRegionSecurityPolicy#enforce_on_key_type}

---

### GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold <a name="GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold;

GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold.builder()
//  .count(java.lang.Number)
//  .intervalSec(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold.property.count">count</a></code> | <code>java.lang.Number</code> | Number of HTTP(S) requests for calculating the threshold. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold.property.intervalSec">intervalSec</a></code> | <code>java.lang.Number</code> | Interval over which the threshold is computed. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

Number of HTTP(S) requests for calculating the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#count GoogleComputeRegionSecurityPolicy#count}

---

##### `intervalSec`<sup>Optional</sup> <a name="intervalSec" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold.property.intervalSec"></a>

```java
public java.lang.Number getIntervalSec();
```

- *Type:* java.lang.Number

Interval over which the threshold is computed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#interval_sec GoogleComputeRegionSecurityPolicy#interval_sec}

---

### GoogleComputeRegionSecurityPolicyTimeouts <a name="GoogleComputeRegionSecurityPolicyTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyTimeouts;

GoogleComputeRegionSecurityPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#create GoogleComputeRegionSecurityPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#delete GoogleComputeRegionSecurityPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#update GoogleComputeRegionSecurityPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#create GoogleComputeRegionSecurityPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#delete GoogleComputeRegionSecurityPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#update GoogleComputeRegionSecurityPolicy#update}.

---

### GoogleComputeRegionSecurityPolicyUserDefinedFields <a name="GoogleComputeRegionSecurityPolicyUserDefinedFields" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyUserDefinedFields;

GoogleComputeRegionSecurityPolicyUserDefinedFields.builder()
    .base(java.lang.String)
//  .mask(java.lang.String)
//  .name(java.lang.String)
//  .offset(java.lang.Number)
//  .size(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields.property.base">base</a></code> | <code>java.lang.String</code> | The base relative to which 'offset' is measured. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields.property.mask">mask</a></code> | <code>java.lang.String</code> | If specified, apply this mask (bitwise AND) to the field to ignore bits before matching. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields.property.name">name</a></code> | <code>java.lang.String</code> | The name of this field. Must be unique within the policy. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields.property.offset">offset</a></code> | <code>java.lang.Number</code> | Offset of the first byte of the field (in network byte order) relative to 'base'. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields.property.size">size</a></code> | <code>java.lang.Number</code> | Size of the field in bytes. Valid values: 1-4. |

---

##### `base`<sup>Required</sup> <a name="base" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields.property.base"></a>

```java
public java.lang.String getBase();
```

- *Type:* java.lang.String

The base relative to which 'offset' is measured.

Possible values are:

* IPV4: Points to the beginning of the IPv4 header.
* IPV6: Points to the beginning of the IPv6 header.
* TCP: Points to the beginning of the TCP header, skipping over any IPv4 options or IPv6 extension headers. Not present for non-first fragments.
* UDP: Points to the beginning of the UDP header, skipping over any IPv4 options or IPv6 extension headers. Not present for non-first fragments. Possible values: ["IPV4", "IPV6", "TCP", "UDP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#base GoogleComputeRegionSecurityPolicy#base}

---

##### `mask`<sup>Optional</sup> <a name="mask" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields.property.mask"></a>

```java
public java.lang.String getMask();
```

- *Type:* java.lang.String

If specified, apply this mask (bitwise AND) to the field to ignore bits before matching.

Encoded as a hexadecimal number (starting with "0x").
The last byte of the field (in network byte order) corresponds to the least significant byte of the mask.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#mask GoogleComputeRegionSecurityPolicy#mask}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of this field. Must be unique within the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#name GoogleComputeRegionSecurityPolicy#name}

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields.property.offset"></a>

```java
public java.lang.Number getOffset();
```

- *Type:* java.lang.Number

Offset of the first byte of the field (in network byte order) relative to 'base'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#offset GoogleComputeRegionSecurityPolicy#offset}

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

Size of the field in bytes. Valid values: 1-4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_security_policy#size GoogleComputeRegionSecurityPolicy#size}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference <a name="GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference;

new GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.ddosProtectionInput">ddosProtectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.ddosProtection">ddosProtection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfig">GoogleComputeRegionSecurityPolicyDdosProtectionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ddosProtectionInput`<sup>Optional</sup> <a name="ddosProtectionInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.ddosProtectionInput"></a>

```java
public java.lang.String getDdosProtectionInput();
```

- *Type:* java.lang.String

---

##### `ddosProtection`<sup>Required</sup> <a name="ddosProtection" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.ddosProtection"></a>

```java
public java.lang.String getDdosProtection();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionSecurityPolicyDdosProtectionConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfig">GoogleComputeRegionSecurityPolicyDdosProtectionConfig</a>

---


### GoogleComputeRegionSecurityPolicyRulesList <a name="GoogleComputeRegionSecurityPolicyRulesList" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyRulesList;

new GoogleComputeRegionSecurityPolicyRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.get"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules">GoogleComputeRegionSecurityPolicyRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules">GoogleComputeRegionSecurityPolicyRules</a>>

---


### GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference <a name="GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference;

new GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.resetSrcIpRanges">resetSrcIpRanges</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSrcIpRanges` <a name="resetSrcIpRanges" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.resetSrcIpRanges"></a>

```java
public void resetSrcIpRanges()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.srcIpRangesInput">srcIpRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.srcIpRanges">srcIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfig">GoogleComputeRegionSecurityPolicyRulesMatchConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `srcIpRangesInput`<sup>Optional</sup> <a name="srcIpRangesInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.srcIpRangesInput"></a>

```java
public java.util.List<java.lang.String> getSrcIpRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcIpRanges`<sup>Required</sup> <a name="srcIpRanges" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.srcIpRanges"></a>

```java
public java.util.List<java.lang.String> getSrcIpRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesMatchConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfig">GoogleComputeRegionSecurityPolicyRulesMatchConfig</a>

---


### GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference <a name="GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference;

new GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExpr">GoogleComputeRegionSecurityPolicyRulesMatchExpr</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesMatchExpr getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExpr">GoogleComputeRegionSecurityPolicyRulesMatchExpr</a>

---


### GoogleComputeRegionSecurityPolicyRulesMatchOutputReference <a name="GoogleComputeRegionSecurityPolicyRulesMatchOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference;

new GoogleComputeRegionSecurityPolicyRulesMatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.putExpr">putExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.resetExpr">resetExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.resetVersionedExpr">resetVersionedExpr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfig` <a name="putConfig" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.putConfig"></a>

```java
public void putConfig(GoogleComputeRegionSecurityPolicyRulesMatchConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfig">GoogleComputeRegionSecurityPolicyRulesMatchConfig</a>

---

##### `putExpr` <a name="putExpr" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.putExpr"></a>

```java
public void putExpr(GoogleComputeRegionSecurityPolicyRulesMatchExpr value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.putExpr.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExpr">GoogleComputeRegionSecurityPolicyRulesMatchExpr</a>

---

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.resetConfig"></a>

```java
public void resetConfig()
```

##### `resetExpr` <a name="resetExpr" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.resetExpr"></a>

```java
public void resetExpr()
```

##### `resetVersionedExpr` <a name="resetVersionedExpr" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.resetVersionedExpr"></a>

```java
public void resetVersionedExpr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference">GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.expr">expr</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference">GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfig">GoogleComputeRegionSecurityPolicyRulesMatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.exprInput">exprInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExpr">GoogleComputeRegionSecurityPolicyRulesMatchExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.versionedExprInput">versionedExprInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.versionedExpr">versionedExpr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatch">GoogleComputeRegionSecurityPolicyRulesMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.config"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference getConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference">GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference</a>

---

##### `expr`<sup>Required</sup> <a name="expr" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.expr"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference getExpr();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference">GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.configInput"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesMatchConfig getConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfig">GoogleComputeRegionSecurityPolicyRulesMatchConfig</a>

---

##### `exprInput`<sup>Optional</sup> <a name="exprInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.exprInput"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesMatchExpr getExprInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExpr">GoogleComputeRegionSecurityPolicyRulesMatchExpr</a>

---

##### `versionedExprInput`<sup>Optional</sup> <a name="versionedExprInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.versionedExprInput"></a>

```java
public java.lang.String getVersionedExprInput();
```

- *Type:* java.lang.String

---

##### `versionedExpr`<sup>Required</sup> <a name="versionedExpr" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.versionedExpr"></a>

```java
public java.lang.String getVersionedExpr();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesMatch getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatch">GoogleComputeRegionSecurityPolicyRulesMatch</a>

---


### GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference <a name="GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference;

new GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.putUserDefinedFields">putUserDefinedFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetDestIpRanges">resetDestIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetDestPorts">resetDestPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetIpProtocols">resetIpProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetSrcAsns">resetSrcAsns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetSrcIpRanges">resetSrcIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetSrcPorts">resetSrcPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetSrcRegionCodes">resetSrcRegionCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetUserDefinedFields">resetUserDefinedFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUserDefinedFields` <a name="putUserDefinedFields" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.putUserDefinedFields"></a>

```java
public void putUserDefinedFields(IResolvable OR java.util.List<GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.putUserDefinedFields.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields">GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields</a>>

---

##### `resetDestIpRanges` <a name="resetDestIpRanges" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetDestIpRanges"></a>

```java
public void resetDestIpRanges()
```

##### `resetDestPorts` <a name="resetDestPorts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetDestPorts"></a>

```java
public void resetDestPorts()
```

##### `resetIpProtocols` <a name="resetIpProtocols" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetIpProtocols"></a>

```java
public void resetIpProtocols()
```

##### `resetSrcAsns` <a name="resetSrcAsns" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetSrcAsns"></a>

```java
public void resetSrcAsns()
```

##### `resetSrcIpRanges` <a name="resetSrcIpRanges" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetSrcIpRanges"></a>

```java
public void resetSrcIpRanges()
```

##### `resetSrcPorts` <a name="resetSrcPorts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetSrcPorts"></a>

```java
public void resetSrcPorts()
```

##### `resetSrcRegionCodes` <a name="resetSrcRegionCodes" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetSrcRegionCodes"></a>

```java
public void resetSrcRegionCodes()
```

##### `resetUserDefinedFields` <a name="resetUserDefinedFields" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetUserDefinedFields"></a>

```java
public void resetUserDefinedFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.userDefinedFields">userDefinedFields</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList">GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destIpRangesInput">destIpRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destPortsInput">destPortsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.ipProtocolsInput">ipProtocolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcAsnsInput">srcAsnsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcIpRangesInput">srcIpRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcPortsInput">srcPortsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcRegionCodesInput">srcRegionCodesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.userDefinedFieldsInput">userDefinedFieldsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields">GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destIpRanges">destIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destPorts">destPorts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.ipProtocols">ipProtocols</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcAsns">srcAsns</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcIpRanges">srcIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcPorts">srcPorts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcRegionCodes">srcRegionCodes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch">GoogleComputeRegionSecurityPolicyRulesNetworkMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `userDefinedFields`<sup>Required</sup> <a name="userDefinedFields" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.userDefinedFields"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList getUserDefinedFields();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList">GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList</a>

---

##### `destIpRangesInput`<sup>Optional</sup> <a name="destIpRangesInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destIpRangesInput"></a>

```java
public java.util.List<java.lang.String> getDestIpRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destPortsInput`<sup>Optional</sup> <a name="destPortsInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destPortsInput"></a>

```java
public java.util.List<java.lang.String> getDestPortsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipProtocolsInput`<sup>Optional</sup> <a name="ipProtocolsInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.ipProtocolsInput"></a>

```java
public java.util.List<java.lang.String> getIpProtocolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcAsnsInput`<sup>Optional</sup> <a name="srcAsnsInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcAsnsInput"></a>

```java
public java.util.List<java.lang.Number> getSrcAsnsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `srcIpRangesInput`<sup>Optional</sup> <a name="srcIpRangesInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcIpRangesInput"></a>

```java
public java.util.List<java.lang.String> getSrcIpRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcPortsInput`<sup>Optional</sup> <a name="srcPortsInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcPortsInput"></a>

```java
public java.util.List<java.lang.String> getSrcPortsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcRegionCodesInput`<sup>Optional</sup> <a name="srcRegionCodesInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcRegionCodesInput"></a>

```java
public java.util.List<java.lang.String> getSrcRegionCodesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userDefinedFieldsInput`<sup>Optional</sup> <a name="userDefinedFieldsInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.userDefinedFieldsInput"></a>

```java
public java.lang.Object getUserDefinedFieldsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields">GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields</a>>

---

##### `destIpRanges`<sup>Required</sup> <a name="destIpRanges" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destIpRanges"></a>

```java
public java.util.List<java.lang.String> getDestIpRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destPorts`<sup>Required</sup> <a name="destPorts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destPorts"></a>

```java
public java.util.List<java.lang.String> getDestPorts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipProtocols`<sup>Required</sup> <a name="ipProtocols" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.ipProtocols"></a>

```java
public java.util.List<java.lang.String> getIpProtocols();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcAsns`<sup>Required</sup> <a name="srcAsns" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcAsns"></a>

```java
public java.util.List<java.lang.Number> getSrcAsns();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `srcIpRanges`<sup>Required</sup> <a name="srcIpRanges" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcIpRanges"></a>

```java
public java.util.List<java.lang.String> getSrcIpRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcPorts`<sup>Required</sup> <a name="srcPorts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcPorts"></a>

```java
public java.util.List<java.lang.String> getSrcPorts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcRegionCodes`<sup>Required</sup> <a name="srcRegionCodes" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcRegionCodes"></a>

```java
public java.util.List<java.lang.String> getSrcRegionCodes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesNetworkMatch getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch">GoogleComputeRegionSecurityPolicyRulesNetworkMatch</a>

---


### GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList <a name="GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList;

new GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.get"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields">GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields">GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields</a>>

---


### GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference <a name="GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference;

new GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields">GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields">GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields</a>

---


### GoogleComputeRegionSecurityPolicyRulesOutputReference <a name="GoogleComputeRegionSecurityPolicyRulesOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyRulesOutputReference;

new GoogleComputeRegionSecurityPolicyRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.putNetworkMatch">putNetworkMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.putPreconfiguredWafConfig">putPreconfiguredWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.putRateLimitOptions">putRateLimitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.resetMatch">resetMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.resetNetworkMatch">resetNetworkMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.resetPreconfiguredWafConfig">resetPreconfiguredWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.resetPreview">resetPreview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.resetRateLimitOptions">resetRateLimitOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatch` <a name="putMatch" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.putMatch"></a>

```java
public void putMatch(GoogleComputeRegionSecurityPolicyRulesMatch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatch">GoogleComputeRegionSecurityPolicyRulesMatch</a>

---

##### `putNetworkMatch` <a name="putNetworkMatch" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.putNetworkMatch"></a>

```java
public void putNetworkMatch(GoogleComputeRegionSecurityPolicyRulesNetworkMatch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.putNetworkMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch">GoogleComputeRegionSecurityPolicyRulesNetworkMatch</a>

---

##### `putPreconfiguredWafConfig` <a name="putPreconfiguredWafConfig" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.putPreconfiguredWafConfig"></a>

```java
public void putPreconfiguredWafConfig(GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.putPreconfiguredWafConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig</a>

---

##### `putRateLimitOptions` <a name="putRateLimitOptions" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.putRateLimitOptions"></a>

```java
public void putRateLimitOptions(GoogleComputeRegionSecurityPolicyRulesRateLimitOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.putRateLimitOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions">GoogleComputeRegionSecurityPolicyRulesRateLimitOptions</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetMatch` <a name="resetMatch" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.resetMatch"></a>

```java
public void resetMatch()
```

##### `resetNetworkMatch` <a name="resetNetworkMatch" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.resetNetworkMatch"></a>

```java
public void resetNetworkMatch()
```

##### `resetPreconfiguredWafConfig` <a name="resetPreconfiguredWafConfig" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.resetPreconfiguredWafConfig"></a>

```java
public void resetPreconfiguredWafConfig()
```

##### `resetPreview` <a name="resetPreview" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.resetPreview"></a>

```java
public void resetPreview()
```

##### `resetRateLimitOptions` <a name="resetRateLimitOptions" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.resetRateLimitOptions"></a>

```java
public void resetRateLimitOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference">GoogleComputeRegionSecurityPolicyRulesMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.networkMatch">networkMatch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference">GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.preconfiguredWafConfig">preconfiguredWafConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.rateLimitOptions">rateLimitOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.matchInput">matchInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatch">GoogleComputeRegionSecurityPolicyRulesMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.networkMatchInput">networkMatchInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch">GoogleComputeRegionSecurityPolicyRulesNetworkMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.preconfiguredWafConfigInput">preconfiguredWafConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.previewInput">previewInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.rateLimitOptionsInput">rateLimitOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions">GoogleComputeRegionSecurityPolicyRulesRateLimitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.preview">preview</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules">GoogleComputeRegionSecurityPolicyRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.match"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesMatchOutputReference getMatch();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference">GoogleComputeRegionSecurityPolicyRulesMatchOutputReference</a>

---

##### `networkMatch`<sup>Required</sup> <a name="networkMatch" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.networkMatch"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference getNetworkMatch();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference">GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference</a>

---

##### `preconfiguredWafConfig`<sup>Required</sup> <a name="preconfiguredWafConfig" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.preconfiguredWafConfig"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference getPreconfiguredWafConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference</a>

---

##### `rateLimitOptions`<sup>Required</sup> <a name="rateLimitOptions" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.rateLimitOptions"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference getRateLimitOptions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.matchInput"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesMatch getMatchInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatch">GoogleComputeRegionSecurityPolicyRulesMatch</a>

---

##### `networkMatchInput`<sup>Optional</sup> <a name="networkMatchInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.networkMatchInput"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesNetworkMatch getNetworkMatchInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch">GoogleComputeRegionSecurityPolicyRulesNetworkMatch</a>

---

##### `preconfiguredWafConfigInput`<sup>Optional</sup> <a name="preconfiguredWafConfigInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.preconfiguredWafConfigInput"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig getPreconfiguredWafConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig</a>

---

##### `previewInput`<sup>Optional</sup> <a name="previewInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.previewInput"></a>

```java
public java.lang.Object getPreviewInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `rateLimitOptionsInput`<sup>Optional</sup> <a name="rateLimitOptionsInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.rateLimitOptionsInput"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesRateLimitOptions getRateLimitOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions">GoogleComputeRegionSecurityPolicyRulesRateLimitOptions</a>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `preview`<sup>Required</sup> <a name="preview" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.preview"></a>

```java
public java.lang.Object getPreview();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules">GoogleComputeRegionSecurityPolicyRules</a>

---


### GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList <a name="GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList;

new GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.get"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion</a>>

---


### GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference <a name="GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference;

new GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestCookie">putRequestCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestHeader">putRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestQueryParam">putRequestQueryParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestUri">putRequestUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetRequestCookie">resetRequestCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetRequestHeader">resetRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetRequestQueryParam">resetRequestQueryParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetRequestUri">resetRequestUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetTargetRuleIds">resetTargetRuleIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRequestCookie` <a name="putRequestCookie" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestCookie"></a>

```java
public void putRequestCookie(IResolvable OR java.util.List<GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestCookie.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie</a>>

---

##### `putRequestHeader` <a name="putRequestHeader" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestHeader"></a>

```java
public void putRequestHeader(IResolvable OR java.util.List<GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestHeader.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader</a>>

---

##### `putRequestQueryParam` <a name="putRequestQueryParam" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestQueryParam"></a>

```java
public void putRequestQueryParam(IResolvable OR java.util.List<GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestQueryParam.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam</a>>

---

##### `putRequestUri` <a name="putRequestUri" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestUri"></a>

```java
public void putRequestUri(IResolvable OR java.util.List<GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestUri.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri</a>>

---

##### `resetRequestCookie` <a name="resetRequestCookie" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetRequestCookie"></a>

```java
public void resetRequestCookie()
```

##### `resetRequestHeader` <a name="resetRequestHeader" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetRequestHeader"></a>

```java
public void resetRequestHeader()
```

##### `resetRequestQueryParam` <a name="resetRequestQueryParam" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetRequestQueryParam"></a>

```java
public void resetRequestQueryParam()
```

##### `resetRequestUri` <a name="resetRequestUri" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetRequestUri"></a>

```java
public void resetRequestUri()
```

##### `resetTargetRuleIds` <a name="resetTargetRuleIds" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetTargetRuleIds"></a>

```java
public void resetTargetRuleIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestCookie">requestCookie</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestHeader">requestHeader</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestQueryParam">requestQueryParam</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestUri">requestUri</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestCookieInput">requestCookieInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestHeaderInput">requestHeaderInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestQueryParamInput">requestQueryParamInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestUriInput">requestUriInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleIdsInput">targetRuleIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleSetInput">targetRuleSetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleIds">targetRuleIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleSet">targetRuleSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `requestCookie`<sup>Required</sup> <a name="requestCookie" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestCookie"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList getRequestCookie();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList</a>

---

##### `requestHeader`<sup>Required</sup> <a name="requestHeader" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestHeader"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList getRequestHeader();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList</a>

---

##### `requestQueryParam`<sup>Required</sup> <a name="requestQueryParam" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestQueryParam"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList getRequestQueryParam();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList</a>

---

##### `requestUri`<sup>Required</sup> <a name="requestUri" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestUri"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList getRequestUri();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList</a>

---

##### `requestCookieInput`<sup>Optional</sup> <a name="requestCookieInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestCookieInput"></a>

```java
public java.lang.Object getRequestCookieInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie</a>>

---

##### `requestHeaderInput`<sup>Optional</sup> <a name="requestHeaderInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestHeaderInput"></a>

```java
public java.lang.Object getRequestHeaderInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader</a>>

---

##### `requestQueryParamInput`<sup>Optional</sup> <a name="requestQueryParamInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestQueryParamInput"></a>

```java
public java.lang.Object getRequestQueryParamInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam</a>>

---

##### `requestUriInput`<sup>Optional</sup> <a name="requestUriInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestUriInput"></a>

```java
public java.lang.Object getRequestUriInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri</a>>

---

##### `targetRuleIdsInput`<sup>Optional</sup> <a name="targetRuleIdsInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleIdsInput"></a>

```java
public java.util.List<java.lang.String> getTargetRuleIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetRuleSetInput`<sup>Optional</sup> <a name="targetRuleSetInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleSetInput"></a>

```java
public java.lang.String getTargetRuleSetInput();
```

- *Type:* java.lang.String

---

##### `targetRuleIds`<sup>Required</sup> <a name="targetRuleIds" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleIds"></a>

```java
public java.util.List<java.lang.String> getTargetRuleIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetRuleSet`<sup>Required</sup> <a name="targetRuleSet" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleSet"></a>

```java
public java.lang.String getTargetRuleSet();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion</a>

---


### GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList <a name="GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList;

new GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.get"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie</a>>

---


### GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference <a name="GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference;

new GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie</a>

---


### GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList <a name="GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList;

new GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.get"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader</a>>

---


### GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference <a name="GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference;

new GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader</a>

---


### GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList <a name="GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList;

new GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.get"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam</a>>

---


### GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference <a name="GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference;

new GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam</a>

---


### GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList <a name="GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList;

new GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.get"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri</a>>

---


### GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference <a name="GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference;

new GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri</a>

---


### GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference <a name="GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference;

new GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.putExclusion">putExclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.resetExclusion">resetExclusion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExclusion` <a name="putExclusion" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.putExclusion"></a>

```java
public void putExclusion(IResolvable OR java.util.List<GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.putExclusion.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion</a>>

---

##### `resetExclusion` <a name="resetExclusion" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.resetExclusion"></a>

```java
public void resetExclusion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.exclusion">exclusion</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.exclusionInput">exclusionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exclusion`<sup>Required</sup> <a name="exclusion" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.exclusion"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList getExclusion();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList</a>

---

##### `exclusionInput`<sup>Optional</sup> <a name="exclusionInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.exclusionInput"></a>

```java
public java.lang.Object getExclusionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig</a>

---


### GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference <a name="GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference;

new GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resetIntervalSec">resetIntervalSec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCount` <a name="resetCount" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resetCount"></a>

```java
public void resetCount()
```

##### `resetIntervalSec` <a name="resetIntervalSec" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resetIntervalSec"></a>

```java
public void resetIntervalSec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.countInput">countInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.intervalSecInput">intervalSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.intervalSec">intervalSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.countInput"></a>

```java
public java.lang.Number getCountInput();
```

- *Type:* java.lang.Number

---

##### `intervalSecInput`<sup>Optional</sup> <a name="intervalSecInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.intervalSecInput"></a>

```java
public java.lang.Number getIntervalSecInput();
```

- *Type:* java.lang.Number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `intervalSec`<sup>Required</sup> <a name="intervalSec" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.intervalSec"></a>

```java
public java.lang.Number getIntervalSec();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold</a>

---


### GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList <a name="GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList;

new GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.get"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs</a>>

---


### GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference <a name="GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference;

new GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyName">resetEnforceOnKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyType">resetEnforceOnKeyType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnforceOnKeyName` <a name="resetEnforceOnKeyName" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyName"></a>

```java
public void resetEnforceOnKeyName()
```

##### `resetEnforceOnKeyType` <a name="resetEnforceOnKeyType" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyType"></a>

```java
public void resetEnforceOnKeyType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyNameInput">enforceOnKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyTypeInput">enforceOnKeyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyName">enforceOnKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyType">enforceOnKeyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enforceOnKeyNameInput`<sup>Optional</sup> <a name="enforceOnKeyNameInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyNameInput"></a>

```java
public java.lang.String getEnforceOnKeyNameInput();
```

- *Type:* java.lang.String

---

##### `enforceOnKeyTypeInput`<sup>Optional</sup> <a name="enforceOnKeyTypeInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyTypeInput"></a>

```java
public java.lang.String getEnforceOnKeyTypeInput();
```

- *Type:* java.lang.String

---

##### `enforceOnKeyName`<sup>Required</sup> <a name="enforceOnKeyName" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyName"></a>

```java
public java.lang.String getEnforceOnKeyName();
```

- *Type:* java.lang.String

---

##### `enforceOnKeyType`<sup>Required</sup> <a name="enforceOnKeyType" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyType"></a>

```java
public java.lang.String getEnforceOnKeyType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs</a>

---


### GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference <a name="GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference;

new GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putBanThreshold">putBanThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putEnforceOnKeyConfigs">putEnforceOnKeyConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putRateLimitThreshold">putRateLimitThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetBanDurationSec">resetBanDurationSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetBanThreshold">resetBanThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetConformAction">resetConformAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetEnforceOnKey">resetEnforceOnKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetEnforceOnKeyConfigs">resetEnforceOnKeyConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetEnforceOnKeyName">resetEnforceOnKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetExceedAction">resetExceedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetRateLimitThreshold">resetRateLimitThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBanThreshold` <a name="putBanThreshold" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putBanThreshold"></a>

```java
public void putBanThreshold(GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putBanThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold</a>

---

##### `putEnforceOnKeyConfigs` <a name="putEnforceOnKeyConfigs" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putEnforceOnKeyConfigs"></a>

```java
public void putEnforceOnKeyConfigs(IResolvable OR java.util.List<GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putEnforceOnKeyConfigs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs</a>>

---

##### `putRateLimitThreshold` <a name="putRateLimitThreshold" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putRateLimitThreshold"></a>

```java
public void putRateLimitThreshold(GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putRateLimitThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold</a>

---

##### `resetBanDurationSec` <a name="resetBanDurationSec" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetBanDurationSec"></a>

```java
public void resetBanDurationSec()
```

##### `resetBanThreshold` <a name="resetBanThreshold" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetBanThreshold"></a>

```java
public void resetBanThreshold()
```

##### `resetConformAction` <a name="resetConformAction" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetConformAction"></a>

```java
public void resetConformAction()
```

##### `resetEnforceOnKey` <a name="resetEnforceOnKey" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetEnforceOnKey"></a>

```java
public void resetEnforceOnKey()
```

##### `resetEnforceOnKeyConfigs` <a name="resetEnforceOnKeyConfigs" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetEnforceOnKeyConfigs"></a>

```java
public void resetEnforceOnKeyConfigs()
```

##### `resetEnforceOnKeyName` <a name="resetEnforceOnKeyName" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetEnforceOnKeyName"></a>

```java
public void resetEnforceOnKeyName()
```

##### `resetExceedAction` <a name="resetExceedAction" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetExceedAction"></a>

```java
public void resetExceedAction()
```

##### `resetRateLimitThreshold` <a name="resetRateLimitThreshold" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetRateLimitThreshold"></a>

```java
public void resetRateLimitThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banThreshold">banThreshold</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyConfigs">enforceOnKeyConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.rateLimitThreshold">rateLimitThreshold</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banDurationSecInput">banDurationSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banThresholdInput">banThresholdInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.conformActionInput">conformActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyConfigsInput">enforceOnKeyConfigsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyInput">enforceOnKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyNameInput">enforceOnKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.exceedActionInput">exceedActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.rateLimitThresholdInput">rateLimitThresholdInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banDurationSec">banDurationSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.conformAction">conformAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKey">enforceOnKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyName">enforceOnKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.exceedAction">exceedAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions">GoogleComputeRegionSecurityPolicyRulesRateLimitOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `banThreshold`<sup>Required</sup> <a name="banThreshold" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banThreshold"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference getBanThreshold();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference</a>

---

##### `enforceOnKeyConfigs`<sup>Required</sup> <a name="enforceOnKeyConfigs" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyConfigs"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList getEnforceOnKeyConfigs();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList</a>

---

##### `rateLimitThreshold`<sup>Required</sup> <a name="rateLimitThreshold" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.rateLimitThreshold"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference getRateLimitThreshold();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference</a>

---

##### `banDurationSecInput`<sup>Optional</sup> <a name="banDurationSecInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banDurationSecInput"></a>

```java
public java.lang.Number getBanDurationSecInput();
```

- *Type:* java.lang.Number

---

##### `banThresholdInput`<sup>Optional</sup> <a name="banThresholdInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banThresholdInput"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold getBanThresholdInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold</a>

---

##### `conformActionInput`<sup>Optional</sup> <a name="conformActionInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.conformActionInput"></a>

```java
public java.lang.String getConformActionInput();
```

- *Type:* java.lang.String

---

##### `enforceOnKeyConfigsInput`<sup>Optional</sup> <a name="enforceOnKeyConfigsInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyConfigsInput"></a>

```java
public java.lang.Object getEnforceOnKeyConfigsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs</a>>

---

##### `enforceOnKeyInput`<sup>Optional</sup> <a name="enforceOnKeyInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyInput"></a>

```java
public java.lang.String getEnforceOnKeyInput();
```

- *Type:* java.lang.String

---

##### `enforceOnKeyNameInput`<sup>Optional</sup> <a name="enforceOnKeyNameInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyNameInput"></a>

```java
public java.lang.String getEnforceOnKeyNameInput();
```

- *Type:* java.lang.String

---

##### `exceedActionInput`<sup>Optional</sup> <a name="exceedActionInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.exceedActionInput"></a>

```java
public java.lang.String getExceedActionInput();
```

- *Type:* java.lang.String

---

##### `rateLimitThresholdInput`<sup>Optional</sup> <a name="rateLimitThresholdInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.rateLimitThresholdInput"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold getRateLimitThresholdInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold</a>

---

##### `banDurationSec`<sup>Required</sup> <a name="banDurationSec" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banDurationSec"></a>

```java
public java.lang.Number getBanDurationSec();
```

- *Type:* java.lang.Number

---

##### `conformAction`<sup>Required</sup> <a name="conformAction" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.conformAction"></a>

```java
public java.lang.String getConformAction();
```

- *Type:* java.lang.String

---

##### `enforceOnKey`<sup>Required</sup> <a name="enforceOnKey" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKey"></a>

```java
public java.lang.String getEnforceOnKey();
```

- *Type:* java.lang.String

---

##### `enforceOnKeyName`<sup>Required</sup> <a name="enforceOnKeyName" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyName"></a>

```java
public java.lang.String getEnforceOnKeyName();
```

- *Type:* java.lang.String

---

##### `exceedAction`<sup>Required</sup> <a name="exceedAction" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.exceedAction"></a>

```java
public java.lang.String getExceedAction();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesRateLimitOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions">GoogleComputeRegionSecurityPolicyRulesRateLimitOptions</a>

---


### GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference <a name="GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference;

new GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resetIntervalSec">resetIntervalSec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCount` <a name="resetCount" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resetCount"></a>

```java
public void resetCount()
```

##### `resetIntervalSec` <a name="resetIntervalSec" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resetIntervalSec"></a>

```java
public void resetIntervalSec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.countInput">countInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSecInput">intervalSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSec">intervalSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.countInput"></a>

```java
public java.lang.Number getCountInput();
```

- *Type:* java.lang.Number

---

##### `intervalSecInput`<sup>Optional</sup> <a name="intervalSecInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSecInput"></a>

```java
public java.lang.Number getIntervalSecInput();
```

- *Type:* java.lang.Number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `intervalSec`<sup>Required</sup> <a name="intervalSec" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSec"></a>

```java
public java.lang.Number getIntervalSec();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold</a>

---


### GoogleComputeRegionSecurityPolicyTimeoutsOutputReference <a name="GoogleComputeRegionSecurityPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference;

new GoogleComputeRegionSecurityPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts">GoogleComputeRegionSecurityPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts">GoogleComputeRegionSecurityPolicyTimeouts</a>

---


### GoogleComputeRegionSecurityPolicyUserDefinedFieldsList <a name="GoogleComputeRegionSecurityPolicyUserDefinedFieldsList" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList;

new GoogleComputeRegionSecurityPolicyUserDefinedFieldsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.get"></a>

```java
public GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields">GoogleComputeRegionSecurityPolicyUserDefinedFields</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields">GoogleComputeRegionSecurityPolicyUserDefinedFields</a>>

---


### GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference <a name="GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_security_policy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference;

new GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetMask">resetMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetOffset">resetOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetSize">resetSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMask` <a name="resetMask" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetMask"></a>

```java
public void resetMask()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetOffset` <a name="resetOffset" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetOffset"></a>

```java
public void resetOffset()
```

##### `resetSize` <a name="resetSize" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetSize"></a>

```java
public void resetSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.baseInput">baseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.maskInput">maskInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.offsetInput">offsetInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.base">base</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.mask">mask</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.offset">offset</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields">GoogleComputeRegionSecurityPolicyUserDefinedFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `baseInput`<sup>Optional</sup> <a name="baseInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.baseInput"></a>

```java
public java.lang.String getBaseInput();
```

- *Type:* java.lang.String

---

##### `maskInput`<sup>Optional</sup> <a name="maskInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.maskInput"></a>

```java
public java.lang.String getMaskInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `offsetInput`<sup>Optional</sup> <a name="offsetInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.offsetInput"></a>

```java
public java.lang.Number getOffsetInput();
```

- *Type:* java.lang.Number

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `base`<sup>Required</sup> <a name="base" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.base"></a>

```java
public java.lang.String getBase();
```

- *Type:* java.lang.String

---

##### `mask`<sup>Required</sup> <a name="mask" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.mask"></a>

```java
public java.lang.String getMask();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.offset"></a>

```java
public java.lang.Number getOffset();
```

- *Type:* java.lang.Number

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields">GoogleComputeRegionSecurityPolicyUserDefinedFields</a>

---



