# `google_compute_disk_resource_policy_attachment`

Refer to the Terraform Registory for docs: [`google_compute_disk_resource_policy_attachment`](https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_disk_resource_policy_attachment).

# `googleComputeDiskResourcePolicyAttachment` Submodule <a name="`googleComputeDiskResourcePolicyAttachment` Submodule" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeDiskResourcePolicyAttachment <a name="GoogleComputeDiskResourcePolicyAttachment" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_disk_resource_policy_attachment google_compute_disk_resource_policy_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_disk_resource_policy_attachment.GoogleComputeDiskResourcePolicyAttachment;

GoogleComputeDiskResourcePolicyAttachment.Builder.create(Construct scope, java.lang.String id)
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
    .disk(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleComputeDiskResourcePolicyAttachmentTimeouts)
//  .zone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.Initializer.parameter.disk">disk</a></code> | <code>java.lang.String</code> | The name of the disk in which the resource policies are attached to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The resource policy to be attached to the disk for scheduling snapshot creation. Do not specify the self link. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_disk_resource_policy_attachment#id GoogleComputeDiskResourcePolicyAttachment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_disk_resource_policy_attachment#project GoogleComputeDiskResourcePolicyAttachment#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeouts">GoogleComputeDiskResourcePolicyAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | A reference to the zone where the disk resides. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.Initializer.parameter.disk"></a>

- *Type:* java.lang.String

The name of the disk in which the resource policies are attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_disk_resource_policy_attachment#disk GoogleComputeDiskResourcePolicyAttachment#disk}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The resource policy to be attached to the disk for scheduling snapshot creation. Do not specify the self link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_disk_resource_policy_attachment#name GoogleComputeDiskResourcePolicyAttachment#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_disk_resource_policy_attachment#id GoogleComputeDiskResourcePolicyAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_disk_resource_policy_attachment#project GoogleComputeDiskResourcePolicyAttachment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeouts">GoogleComputeDiskResourcePolicyAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_disk_resource_policy_attachment#timeouts GoogleComputeDiskResourcePolicyAttachment#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

A reference to the zone where the disk resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_disk_resource_policy_attachment#zone GoogleComputeDiskResourcePolicyAttachment#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeDiskResourcePolicyAttachmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeouts">GoogleComputeDiskResourcePolicyAttachmentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.resetZone"></a>

```java
public void resetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_disk_resource_policy_attachment.GoogleComputeDiskResourcePolicyAttachment;

GoogleComputeDiskResourcePolicyAttachment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_disk_resource_policy_attachment.GoogleComputeDiskResourcePolicyAttachment;

GoogleComputeDiskResourcePolicyAttachment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_disk_resource_policy_attachment.GoogleComputeDiskResourcePolicyAttachment;

GoogleComputeDiskResourcePolicyAttachment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference">GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.diskInput">diskInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeouts">GoogleComputeDiskResourcePolicyAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.disk">disk</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.timeouts"></a>

```java
public GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference">GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference</a>

---

##### `diskInput`<sup>Optional</sup> <a name="diskInput" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.diskInput"></a>

```java
public java.lang.String getDiskInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeouts">GoogleComputeDiskResourcePolicyAttachmentTimeouts</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.disk"></a>

```java
public java.lang.String getDisk();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeDiskResourcePolicyAttachmentConfig <a name="GoogleComputeDiskResourcePolicyAttachmentConfig" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_disk_resource_policy_attachment.GoogleComputeDiskResourcePolicyAttachmentConfig;

GoogleComputeDiskResourcePolicyAttachmentConfig.builder()
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
    .disk(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleComputeDiskResourcePolicyAttachmentTimeouts)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentConfig.property.disk">disk</a></code> | <code>java.lang.String</code> | The name of the disk in which the resource policies are attached to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentConfig.property.name">name</a></code> | <code>java.lang.String</code> | The resource policy to be attached to the disk for scheduling snapshot creation. Do not specify the self link. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_disk_resource_policy_attachment#id GoogleComputeDiskResourcePolicyAttachment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_disk_resource_policy_attachment#project GoogleComputeDiskResourcePolicyAttachment#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeouts">GoogleComputeDiskResourcePolicyAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | A reference to the zone where the disk resides. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentConfig.property.disk"></a>

```java
public java.lang.String getDisk();
```

- *Type:* java.lang.String

The name of the disk in which the resource policies are attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_disk_resource_policy_attachment#disk GoogleComputeDiskResourcePolicyAttachment#disk}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The resource policy to be attached to the disk for scheduling snapshot creation. Do not specify the self link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_disk_resource_policy_attachment#name GoogleComputeDiskResourcePolicyAttachment#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_disk_resource_policy_attachment#id GoogleComputeDiskResourcePolicyAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_disk_resource_policy_attachment#project GoogleComputeDiskResourcePolicyAttachment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentConfig.property.timeouts"></a>

```java
public GoogleComputeDiskResourcePolicyAttachmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeouts">GoogleComputeDiskResourcePolicyAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_disk_resource_policy_attachment#timeouts GoogleComputeDiskResourcePolicyAttachment#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

A reference to the zone where the disk resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_disk_resource_policy_attachment#zone GoogleComputeDiskResourcePolicyAttachment#zone}

---

### GoogleComputeDiskResourcePolicyAttachmentTimeouts <a name="GoogleComputeDiskResourcePolicyAttachmentTimeouts" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_disk_resource_policy_attachment.GoogleComputeDiskResourcePolicyAttachmentTimeouts;

GoogleComputeDiskResourcePolicyAttachmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_disk_resource_policy_attachment#create GoogleComputeDiskResourcePolicyAttachment#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_disk_resource_policy_attachment#delete GoogleComputeDiskResourcePolicyAttachment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_disk_resource_policy_attachment#create GoogleComputeDiskResourcePolicyAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_disk_resource_policy_attachment#delete GoogleComputeDiskResourcePolicyAttachment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference <a name="GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_disk_resource_policy_attachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference;

new GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeouts">GoogleComputeDiskResourcePolicyAttachmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeDiskResourcePolicyAttachment.GoogleComputeDiskResourcePolicyAttachmentTimeouts">GoogleComputeDiskResourcePolicyAttachmentTimeouts</a>

---



