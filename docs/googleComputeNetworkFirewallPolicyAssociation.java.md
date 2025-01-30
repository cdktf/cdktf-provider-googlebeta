# `googleComputeNetworkFirewallPolicyAssociation` Submodule <a name="`googleComputeNetworkFirewallPolicyAssociation` Submodule" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeNetworkFirewallPolicyAssociation <a name="GoogleComputeNetworkFirewallPolicyAssociation" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_association google_compute_network_firewall_policy_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_network_firewall_policy_association.GoogleComputeNetworkFirewallPolicyAssociation;

GoogleComputeNetworkFirewallPolicyAssociation.Builder.create(Construct scope, java.lang.String id)
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
    .attachmentTarget(java.lang.String)
    .firewallPolicy(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleComputeNetworkFirewallPolicyAssociationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.Initializer.parameter.attachmentTarget">attachmentTarget</a></code> | <code>java.lang.String</code> | The target that the firewall policy is attached to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.Initializer.parameter.firewallPolicy">firewallPolicy</a></code> | <code>java.lang.String</code> | The firewall policy of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name for an association. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_association#id GoogleComputeNetworkFirewallPolicyAssociation#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_association#project GoogleComputeNetworkFirewallPolicyAssociation#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeouts">GoogleComputeNetworkFirewallPolicyAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `attachmentTarget`<sup>Required</sup> <a name="attachmentTarget" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.Initializer.parameter.attachmentTarget"></a>

- *Type:* java.lang.String

The target that the firewall policy is attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_association#attachment_target GoogleComputeNetworkFirewallPolicyAssociation#attachment_target}

---

##### `firewallPolicy`<sup>Required</sup> <a name="firewallPolicy" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.Initializer.parameter.firewallPolicy"></a>

- *Type:* java.lang.String

The firewall policy of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_association#firewall_policy GoogleComputeNetworkFirewallPolicyAssociation#firewall_policy}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name for an association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_association#name GoogleComputeNetworkFirewallPolicyAssociation#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_association#id GoogleComputeNetworkFirewallPolicyAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_association#project GoogleComputeNetworkFirewallPolicyAssociation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeouts">GoogleComputeNetworkFirewallPolicyAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_association#timeouts GoogleComputeNetworkFirewallPolicyAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeNetworkFirewallPolicyAssociationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeouts">GoogleComputeNetworkFirewallPolicyAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeNetworkFirewallPolicyAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_network_firewall_policy_association.GoogleComputeNetworkFirewallPolicyAssociation;

GoogleComputeNetworkFirewallPolicyAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_network_firewall_policy_association.GoogleComputeNetworkFirewallPolicyAssociation;

GoogleComputeNetworkFirewallPolicyAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_network_firewall_policy_association.GoogleComputeNetworkFirewallPolicyAssociation;

GoogleComputeNetworkFirewallPolicyAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_network_firewall_policy_association.GoogleComputeNetworkFirewallPolicyAssociation;

GoogleComputeNetworkFirewallPolicyAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputeNetworkFirewallPolicyAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleComputeNetworkFirewallPolicyAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputeNetworkFirewallPolicyAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputeNetworkFirewallPolicyAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeNetworkFirewallPolicyAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.shortName">shortName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference">GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.attachmentTargetInput">attachmentTargetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.firewallPolicyInput">firewallPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeouts">GoogleComputeNetworkFirewallPolicyAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.attachmentTarget">attachmentTarget</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.firewallPolicy">firewallPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `shortName`<sup>Required</sup> <a name="shortName" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.shortName"></a>

```java
public java.lang.String getShortName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.timeouts"></a>

```java
public GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference">GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference</a>

---

##### `attachmentTargetInput`<sup>Optional</sup> <a name="attachmentTargetInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.attachmentTargetInput"></a>

```java
public java.lang.String getAttachmentTargetInput();
```

- *Type:* java.lang.String

---

##### `firewallPolicyInput`<sup>Optional</sup> <a name="firewallPolicyInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.firewallPolicyInput"></a>

```java
public java.lang.String getFirewallPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeouts">GoogleComputeNetworkFirewallPolicyAssociationTimeouts</a>

---

##### `attachmentTarget`<sup>Required</sup> <a name="attachmentTarget" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.attachmentTarget"></a>

```java
public java.lang.String getAttachmentTarget();
```

- *Type:* java.lang.String

---

##### `firewallPolicy`<sup>Required</sup> <a name="firewallPolicy" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.firewallPolicy"></a>

```java
public java.lang.String getFirewallPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeNetworkFirewallPolicyAssociationConfig <a name="GoogleComputeNetworkFirewallPolicyAssociationConfig" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_network_firewall_policy_association.GoogleComputeNetworkFirewallPolicyAssociationConfig;

GoogleComputeNetworkFirewallPolicyAssociationConfig.builder()
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
    .attachmentTarget(java.lang.String)
    .firewallPolicy(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleComputeNetworkFirewallPolicyAssociationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.attachmentTarget">attachmentTarget</a></code> | <code>java.lang.String</code> | The target that the firewall policy is attached to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.firewallPolicy">firewallPolicy</a></code> | <code>java.lang.String</code> | The firewall policy of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name for an association. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_association#id GoogleComputeNetworkFirewallPolicyAssociation#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_association#project GoogleComputeNetworkFirewallPolicyAssociation#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeouts">GoogleComputeNetworkFirewallPolicyAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `attachmentTarget`<sup>Required</sup> <a name="attachmentTarget" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.attachmentTarget"></a>

```java
public java.lang.String getAttachmentTarget();
```

- *Type:* java.lang.String

The target that the firewall policy is attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_association#attachment_target GoogleComputeNetworkFirewallPolicyAssociation#attachment_target}

---

##### `firewallPolicy`<sup>Required</sup> <a name="firewallPolicy" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.firewallPolicy"></a>

```java
public java.lang.String getFirewallPolicy();
```

- *Type:* java.lang.String

The firewall policy of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_association#firewall_policy GoogleComputeNetworkFirewallPolicyAssociation#firewall_policy}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name for an association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_association#name GoogleComputeNetworkFirewallPolicyAssociation#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_association#id GoogleComputeNetworkFirewallPolicyAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_association#project GoogleComputeNetworkFirewallPolicyAssociation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationConfig.property.timeouts"></a>

```java
public GoogleComputeNetworkFirewallPolicyAssociationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeouts">GoogleComputeNetworkFirewallPolicyAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_association#timeouts GoogleComputeNetworkFirewallPolicyAssociation#timeouts}

---

### GoogleComputeNetworkFirewallPolicyAssociationTimeouts <a name="GoogleComputeNetworkFirewallPolicyAssociationTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_network_firewall_policy_association.GoogleComputeNetworkFirewallPolicyAssociationTimeouts;

GoogleComputeNetworkFirewallPolicyAssociationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_association#create GoogleComputeNetworkFirewallPolicyAssociation#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_association#delete GoogleComputeNetworkFirewallPolicyAssociation#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_association#create GoogleComputeNetworkFirewallPolicyAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network_firewall_policy_association#delete GoogleComputeNetworkFirewallPolicyAssociation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference <a name="GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_network_firewall_policy_association.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference;

new GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeouts">GoogleComputeNetworkFirewallPolicyAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyAssociation.GoogleComputeNetworkFirewallPolicyAssociationTimeouts">GoogleComputeNetworkFirewallPolicyAssociationTimeouts</a>

---



