# `googleStorageTransferAgentPool` Submodule <a name="`googleStorageTransferAgentPool` Submodule" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleStorageTransferAgentPool <a name="GoogleStorageTransferAgentPool" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_storage_transfer_agent_pool google_storage_transfer_agent_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_transfer_agent_pool.GoogleStorageTransferAgentPool;

GoogleStorageTransferAgentPool.Builder.create(Construct scope, java.lang.String id)
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
//  .bandwidthLimit(GoogleStorageTransferAgentPoolBandwidthLimit)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleStorageTransferAgentPoolTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The ID of the agent pool to create. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.Initializer.parameter.bandwidthLimit">bandwidthLimit</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimit">GoogleStorageTransferAgentPoolBandwidthLimit</a></code> | bandwidth_limit block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Specifies the client-specified AgentPool description. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_storage_transfer_agent_pool#id GoogleStorageTransferAgentPool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_storage_transfer_agent_pool#project GoogleStorageTransferAgentPool#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeouts">GoogleStorageTransferAgentPoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The ID of the agent pool to create.

The agentPoolId must meet the following requirements:

* Length of 128 characters or less.
* Not start with the string goog.
* Start with a lowercase ASCII character, followed by:

  * Zero or more: lowercase Latin alphabet characters, numerals, hyphens (-), periods (.), underscores (_), or tildes (~).
  * One or more numerals or lowercase ASCII characters.

As expressed by the regular expression: ^(?!goog)[a-z](%5Ba-z0-9-._~%5D*%5Ba-z0-9%5D)?$.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_storage_transfer_agent_pool#name GoogleStorageTransferAgentPool#name}

---

##### `bandwidthLimit`<sup>Optional</sup> <a name="bandwidthLimit" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.Initializer.parameter.bandwidthLimit"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimit">GoogleStorageTransferAgentPoolBandwidthLimit</a>

bandwidth_limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_storage_transfer_agent_pool#bandwidth_limit GoogleStorageTransferAgentPool#bandwidth_limit}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Specifies the client-specified AgentPool description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_storage_transfer_agent_pool#display_name GoogleStorageTransferAgentPool#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_storage_transfer_agent_pool#id GoogleStorageTransferAgentPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_storage_transfer_agent_pool#project GoogleStorageTransferAgentPool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeouts">GoogleStorageTransferAgentPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_storage_transfer_agent_pool#timeouts GoogleStorageTransferAgentPool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.putBandwidthLimit">putBandwidthLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.resetBandwidthLimit">resetBandwidthLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBandwidthLimit` <a name="putBandwidthLimit" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.putBandwidthLimit"></a>

```java
public void putBandwidthLimit(GoogleStorageTransferAgentPoolBandwidthLimit value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.putBandwidthLimit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimit">GoogleStorageTransferAgentPoolBandwidthLimit</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.putTimeouts"></a>

```java
public void putTimeouts(GoogleStorageTransferAgentPoolTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeouts">GoogleStorageTransferAgentPoolTimeouts</a>

---

##### `resetBandwidthLimit` <a name="resetBandwidthLimit" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.resetBandwidthLimit"></a>

```java
public void resetBandwidthLimit()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleStorageTransferAgentPool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_transfer_agent_pool.GoogleStorageTransferAgentPool;

GoogleStorageTransferAgentPool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_transfer_agent_pool.GoogleStorageTransferAgentPool;

GoogleStorageTransferAgentPool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_transfer_agent_pool.GoogleStorageTransferAgentPool;

GoogleStorageTransferAgentPool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_transfer_agent_pool.GoogleStorageTransferAgentPool;

GoogleStorageTransferAgentPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleStorageTransferAgentPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleStorageTransferAgentPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleStorageTransferAgentPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleStorageTransferAgentPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_storage_transfer_agent_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleStorageTransferAgentPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.bandwidthLimit">bandwidthLimit</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference">GoogleStorageTransferAgentPoolBandwidthLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference">GoogleStorageTransferAgentPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.bandwidthLimitInput">bandwidthLimitInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimit">GoogleStorageTransferAgentPoolBandwidthLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeouts">GoogleStorageTransferAgentPoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bandwidthLimit`<sup>Required</sup> <a name="bandwidthLimit" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.bandwidthLimit"></a>

```java
public GoogleStorageTransferAgentPoolBandwidthLimitOutputReference getBandwidthLimit();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference">GoogleStorageTransferAgentPoolBandwidthLimitOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.timeouts"></a>

```java
public GoogleStorageTransferAgentPoolTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference">GoogleStorageTransferAgentPoolTimeoutsOutputReference</a>

---

##### `bandwidthLimitInput`<sup>Optional</sup> <a name="bandwidthLimitInput" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.bandwidthLimitInput"></a>

```java
public GoogleStorageTransferAgentPoolBandwidthLimit getBandwidthLimitInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimit">GoogleStorageTransferAgentPoolBandwidthLimit</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeouts">GoogleStorageTransferAgentPoolTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleStorageTransferAgentPoolBandwidthLimit <a name="GoogleStorageTransferAgentPoolBandwidthLimit" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimit.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_transfer_agent_pool.GoogleStorageTransferAgentPoolBandwidthLimit;

GoogleStorageTransferAgentPoolBandwidthLimit.builder()
    .limitMbps(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimit.property.limitMbps">limitMbps</a></code> | <code>java.lang.String</code> | Bandwidth rate in megabytes per second, distributed across all the agents in the pool. |

---

##### `limitMbps`<sup>Required</sup> <a name="limitMbps" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimit.property.limitMbps"></a>

```java
public java.lang.String getLimitMbps();
```

- *Type:* java.lang.String

Bandwidth rate in megabytes per second, distributed across all the agents in the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_storage_transfer_agent_pool#limit_mbps GoogleStorageTransferAgentPool#limit_mbps}

---

### GoogleStorageTransferAgentPoolConfig <a name="GoogleStorageTransferAgentPoolConfig" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_transfer_agent_pool.GoogleStorageTransferAgentPoolConfig;

GoogleStorageTransferAgentPoolConfig.builder()
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
//  .bandwidthLimit(GoogleStorageTransferAgentPoolBandwidthLimit)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleStorageTransferAgentPoolTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.name">name</a></code> | <code>java.lang.String</code> | The ID of the agent pool to create. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.bandwidthLimit">bandwidthLimit</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimit">GoogleStorageTransferAgentPoolBandwidthLimit</a></code> | bandwidth_limit block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Specifies the client-specified AgentPool description. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_storage_transfer_agent_pool#id GoogleStorageTransferAgentPool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_storage_transfer_agent_pool#project GoogleStorageTransferAgentPool#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeouts">GoogleStorageTransferAgentPoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The ID of the agent pool to create.

The agentPoolId must meet the following requirements:

* Length of 128 characters or less.
* Not start with the string goog.
* Start with a lowercase ASCII character, followed by:

  * Zero or more: lowercase Latin alphabet characters, numerals, hyphens (-), periods (.), underscores (_), or tildes (~).
  * One or more numerals or lowercase ASCII characters.

As expressed by the regular expression: ^(?!goog)[a-z](%5Ba-z0-9-._~%5D*%5Ba-z0-9%5D)?$.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_storage_transfer_agent_pool#name GoogleStorageTransferAgentPool#name}

---

##### `bandwidthLimit`<sup>Optional</sup> <a name="bandwidthLimit" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.bandwidthLimit"></a>

```java
public GoogleStorageTransferAgentPoolBandwidthLimit getBandwidthLimit();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimit">GoogleStorageTransferAgentPoolBandwidthLimit</a>

bandwidth_limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_storage_transfer_agent_pool#bandwidth_limit GoogleStorageTransferAgentPool#bandwidth_limit}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Specifies the client-specified AgentPool description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_storage_transfer_agent_pool#display_name GoogleStorageTransferAgentPool#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_storage_transfer_agent_pool#id GoogleStorageTransferAgentPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_storage_transfer_agent_pool#project GoogleStorageTransferAgentPool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.timeouts"></a>

```java
public GoogleStorageTransferAgentPoolTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeouts">GoogleStorageTransferAgentPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_storage_transfer_agent_pool#timeouts GoogleStorageTransferAgentPool#timeouts}

---

### GoogleStorageTransferAgentPoolTimeouts <a name="GoogleStorageTransferAgentPoolTimeouts" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_transfer_agent_pool.GoogleStorageTransferAgentPoolTimeouts;

GoogleStorageTransferAgentPoolTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_storage_transfer_agent_pool#create GoogleStorageTransferAgentPool#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_storage_transfer_agent_pool#delete GoogleStorageTransferAgentPool#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_storage_transfer_agent_pool#update GoogleStorageTransferAgentPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_storage_transfer_agent_pool#create GoogleStorageTransferAgentPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_storage_transfer_agent_pool#delete GoogleStorageTransferAgentPool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_storage_transfer_agent_pool#update GoogleStorageTransferAgentPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleStorageTransferAgentPoolBandwidthLimitOutputReference <a name="GoogleStorageTransferAgentPoolBandwidthLimitOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_transfer_agent_pool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference;

new GoogleStorageTransferAgentPoolBandwidthLimitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.property.limitMbpsInput">limitMbpsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.property.limitMbps">limitMbps</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimit">GoogleStorageTransferAgentPoolBandwidthLimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `limitMbpsInput`<sup>Optional</sup> <a name="limitMbpsInput" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.property.limitMbpsInput"></a>

```java
public java.lang.String getLimitMbpsInput();
```

- *Type:* java.lang.String

---

##### `limitMbps`<sup>Required</sup> <a name="limitMbps" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.property.limitMbps"></a>

```java
public java.lang.String getLimitMbps();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.property.internalValue"></a>

```java
public GoogleStorageTransferAgentPoolBandwidthLimit getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimit">GoogleStorageTransferAgentPoolBandwidthLimit</a>

---


### GoogleStorageTransferAgentPoolTimeoutsOutputReference <a name="GoogleStorageTransferAgentPoolTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_transfer_agent_pool.GoogleStorageTransferAgentPoolTimeoutsOutputReference;

new GoogleStorageTransferAgentPoolTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeouts">GoogleStorageTransferAgentPoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeouts">GoogleStorageTransferAgentPoolTimeouts</a>

---



