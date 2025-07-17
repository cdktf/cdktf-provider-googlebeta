# `googleIamWorkloadIdentityPoolNamespace` Submodule <a name="`googleIamWorkloadIdentityPoolNamespace` Submodule" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamWorkloadIdentityPoolNamespace <a name="GoogleIamWorkloadIdentityPoolNamespace" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_namespace google_iam_workload_identity_pool_namespace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iam_workload_identity_pool_namespace.GoogleIamWorkloadIdentityPoolNamespace;

GoogleIamWorkloadIdentityPoolNamespace.Builder.create(Construct scope, java.lang.String id)
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
    .workloadIdentityPoolId(java.lang.String)
    .workloadIdentityPoolNamespaceId(java.lang.String)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleIamWorkloadIdentityPoolNamespaceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.workloadIdentityPoolId">workloadIdentityPoolId</a></code> | <code>java.lang.String</code> | The ID to use for the pool, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.workloadIdentityPoolNamespaceId">workloadIdentityPoolNamespaceId</a></code> | <code>java.lang.String</code> | The ID to use for the namespace. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the namespace. Cannot exceed 256 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the namespace is disabled. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_namespace#id GoogleIamWorkloadIdentityPoolNamespace#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_namespace#project GoogleIamWorkloadIdentityPoolNamespace#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts">GoogleIamWorkloadIdentityPoolNamespaceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `workloadIdentityPoolId`<sup>Required</sup> <a name="workloadIdentityPoolId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.workloadIdentityPoolId"></a>

- *Type:* java.lang.String

The ID to use for the pool, which becomes the final component of the resource name.

This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_namespace#workload_identity_pool_id GoogleIamWorkloadIdentityPoolNamespace#workload_identity_pool_id}

---

##### `workloadIdentityPoolNamespaceId`<sup>Required</sup> <a name="workloadIdentityPoolNamespaceId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.workloadIdentityPoolNamespaceId"></a>

- *Type:* java.lang.String

The ID to use for the namespace.

This value must:

* contain at most 63 characters
* contain only lowercase alphanumeric characters or '-'
* start with an alphanumeric character
* end with an alphanumeric character

The prefix 'gcp-' will be reserved for future uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_namespace#workload_identity_pool_namespace_id GoogleIamWorkloadIdentityPoolNamespace#workload_identity_pool_namespace_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the namespace. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_namespace#description GoogleIamWorkloadIdentityPoolNamespace#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.disabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the namespace is disabled.

If disabled, credentials may no longer be issued for
identities within this namespace, however existing credentials will still be accepted until
they expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_namespace#disabled GoogleIamWorkloadIdentityPoolNamespace#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_namespace#id GoogleIamWorkloadIdentityPoolNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_namespace#project GoogleIamWorkloadIdentityPoolNamespace#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts">GoogleIamWorkloadIdentityPoolNamespaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_namespace#timeouts GoogleIamWorkloadIdentityPoolNamespace#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.putTimeouts"></a>

```java
public void putTimeouts(GoogleIamWorkloadIdentityPoolNamespaceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts">GoogleIamWorkloadIdentityPoolNamespaceTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIamWorkloadIdentityPoolNamespace resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iam_workload_identity_pool_namespace.GoogleIamWorkloadIdentityPoolNamespace;

GoogleIamWorkloadIdentityPoolNamespace.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iam_workload_identity_pool_namespace.GoogleIamWorkloadIdentityPoolNamespace;

GoogleIamWorkloadIdentityPoolNamespace.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iam_workload_identity_pool_namespace.GoogleIamWorkloadIdentityPoolNamespace;

GoogleIamWorkloadIdentityPoolNamespace.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iam_workload_identity_pool_namespace.GoogleIamWorkloadIdentityPoolNamespace;

GoogleIamWorkloadIdentityPoolNamespace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleIamWorkloadIdentityPoolNamespace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleIamWorkloadIdentityPoolNamespace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleIamWorkloadIdentityPoolNamespace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleIamWorkloadIdentityPoolNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIamWorkloadIdentityPoolNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.ownerService">ownerService</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList">GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference">GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts">GoogleIamWorkloadIdentityPoolNamespaceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.workloadIdentityPoolIdInput">workloadIdentityPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.workloadIdentityPoolNamespaceIdInput">workloadIdentityPoolNamespaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.workloadIdentityPoolId">workloadIdentityPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.workloadIdentityPoolNamespaceId">workloadIdentityPoolNamespaceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ownerService`<sup>Required</sup> <a name="ownerService" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.ownerService"></a>

```java
public GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList getOwnerService();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList">GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.timeouts"></a>

```java
public GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference">GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.disabledInput"></a>

```java
public java.lang.Object getDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts">GoogleIamWorkloadIdentityPoolNamespaceTimeouts</a>

---

##### `workloadIdentityPoolIdInput`<sup>Optional</sup> <a name="workloadIdentityPoolIdInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.workloadIdentityPoolIdInput"></a>

```java
public java.lang.String getWorkloadIdentityPoolIdInput();
```

- *Type:* java.lang.String

---

##### `workloadIdentityPoolNamespaceIdInput`<sup>Optional</sup> <a name="workloadIdentityPoolNamespaceIdInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.workloadIdentityPoolNamespaceIdInput"></a>

```java
public java.lang.String getWorkloadIdentityPoolNamespaceIdInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `workloadIdentityPoolId`<sup>Required</sup> <a name="workloadIdentityPoolId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.workloadIdentityPoolId"></a>

```java
public java.lang.String getWorkloadIdentityPoolId();
```

- *Type:* java.lang.String

---

##### `workloadIdentityPoolNamespaceId`<sup>Required</sup> <a name="workloadIdentityPoolNamespaceId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.workloadIdentityPoolNamespaceId"></a>

```java
public java.lang.String getWorkloadIdentityPoolNamespaceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamWorkloadIdentityPoolNamespaceConfig <a name="GoogleIamWorkloadIdentityPoolNamespaceConfig" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iam_workload_identity_pool_namespace.GoogleIamWorkloadIdentityPoolNamespaceConfig;

GoogleIamWorkloadIdentityPoolNamespaceConfig.builder()
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
    .workloadIdentityPoolId(java.lang.String)
    .workloadIdentityPoolNamespaceId(java.lang.String)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleIamWorkloadIdentityPoolNamespaceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.workloadIdentityPoolId">workloadIdentityPoolId</a></code> | <code>java.lang.String</code> | The ID to use for the pool, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.workloadIdentityPoolNamespaceId">workloadIdentityPoolNamespaceId</a></code> | <code>java.lang.String</code> | The ID to use for the namespace. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the namespace. Cannot exceed 256 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the namespace is disabled. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_namespace#id GoogleIamWorkloadIdentityPoolNamespace#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_namespace#project GoogleIamWorkloadIdentityPoolNamespace#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts">GoogleIamWorkloadIdentityPoolNamespaceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `workloadIdentityPoolId`<sup>Required</sup> <a name="workloadIdentityPoolId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.workloadIdentityPoolId"></a>

```java
public java.lang.String getWorkloadIdentityPoolId();
```

- *Type:* java.lang.String

The ID to use for the pool, which becomes the final component of the resource name.

This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_namespace#workload_identity_pool_id GoogleIamWorkloadIdentityPoolNamespace#workload_identity_pool_id}

---

##### `workloadIdentityPoolNamespaceId`<sup>Required</sup> <a name="workloadIdentityPoolNamespaceId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.workloadIdentityPoolNamespaceId"></a>

```java
public java.lang.String getWorkloadIdentityPoolNamespaceId();
```

- *Type:* java.lang.String

The ID to use for the namespace.

This value must:

* contain at most 63 characters
* contain only lowercase alphanumeric characters or '-'
* start with an alphanumeric character
* end with an alphanumeric character

The prefix 'gcp-' will be reserved for future uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_namespace#workload_identity_pool_namespace_id GoogleIamWorkloadIdentityPoolNamespace#workload_identity_pool_namespace_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the namespace. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_namespace#description GoogleIamWorkloadIdentityPoolNamespace#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the namespace is disabled.

If disabled, credentials may no longer be issued for
identities within this namespace, however existing credentials will still be accepted until
they expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_namespace#disabled GoogleIamWorkloadIdentityPoolNamespace#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_namespace#id GoogleIamWorkloadIdentityPoolNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_namespace#project GoogleIamWorkloadIdentityPoolNamespace#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.timeouts"></a>

```java
public GoogleIamWorkloadIdentityPoolNamespaceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts">GoogleIamWorkloadIdentityPoolNamespaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_namespace#timeouts GoogleIamWorkloadIdentityPoolNamespace#timeouts}

---

### GoogleIamWorkloadIdentityPoolNamespaceOwnerService <a name="GoogleIamWorkloadIdentityPoolNamespaceOwnerService" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iam_workload_identity_pool_namespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerService;

GoogleIamWorkloadIdentityPoolNamespaceOwnerService.builder()
    .build();
```


### GoogleIamWorkloadIdentityPoolNamespaceTimeouts <a name="GoogleIamWorkloadIdentityPoolNamespaceTimeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iam_workload_identity_pool_namespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts;

GoogleIamWorkloadIdentityPoolNamespaceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_namespace#create GoogleIamWorkloadIdentityPoolNamespace#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_namespace#delete GoogleIamWorkloadIdentityPoolNamespace#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_namespace#update GoogleIamWorkloadIdentityPoolNamespace#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_namespace#create GoogleIamWorkloadIdentityPoolNamespace#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_namespace#delete GoogleIamWorkloadIdentityPoolNamespace#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_namespace#update GoogleIamWorkloadIdentityPoolNamespace#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList <a name="GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iam_workload_identity_pool_namespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList;

new GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.get"></a>

```java
public GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference <a name="GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iam_workload_identity_pool_namespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference;

new GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.property.principalSubject">principalSubject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerService">GoogleIamWorkloadIdentityPoolNamespaceOwnerService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalSubject`<sup>Required</sup> <a name="principalSubject" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.property.principalSubject"></a>

```java
public java.lang.String getPrincipalSubject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.property.internalValue"></a>

```java
public GoogleIamWorkloadIdentityPoolNamespaceOwnerService getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerService">GoogleIamWorkloadIdentityPoolNamespaceOwnerService</a>

---


### GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference <a name="GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iam_workload_identity_pool_namespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference;

new GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts">GoogleIamWorkloadIdentityPoolNamespaceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts">GoogleIamWorkloadIdentityPoolNamespaceTimeouts</a>

---



