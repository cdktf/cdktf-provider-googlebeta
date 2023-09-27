# `data_google_iam_workload_identity_pool_provider`

Refer to the Terraform Registory for docs: [`data_google_iam_workload_identity_pool_provider`](https://registry.terraform.io/providers/hashicorp/google-beta/4.84.0/docs/data-sources/google_iam_workload_identity_pool_provider).

# `dataGoogleIamWorkloadIdentityPoolProvider` Submodule <a name="`dataGoogleIamWorkloadIdentityPoolProvider` Submodule" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleIamWorkloadIdentityPoolProvider <a name="DataGoogleIamWorkloadIdentityPoolProvider" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.84.0/docs/data-sources/google_iam_workload_identity_pool_provider google_iam_workload_identity_pool_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_iam_workload_identity_pool_provider.DataGoogleIamWorkloadIdentityPoolProvider;

DataGoogleIamWorkloadIdentityPoolProvider.Builder.create(Construct scope, java.lang.String id)
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
    .workloadIdentityPoolProviderId(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.workloadIdentityPoolId">workloadIdentityPoolId</a></code> | <code>java.lang.String</code> | The ID used for the pool, which is the final component of the pool resource name. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.workloadIdentityPoolProviderId">workloadIdentityPoolProviderId</a></code> | <code>java.lang.String</code> | The ID for the provider, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.84.0/docs/data-sources/google_iam_workload_identity_pool_provider#id DataGoogleIamWorkloadIdentityPoolProvider#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.84.0/docs/data-sources/google_iam_workload_identity_pool_provider#project DataGoogleIamWorkloadIdentityPoolProvider#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `workloadIdentityPoolId`<sup>Required</sup> <a name="workloadIdentityPoolId" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.workloadIdentityPoolId"></a>

- *Type:* java.lang.String

The ID used for the pool, which is the final component of the pool resource name.

This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.84.0/docs/data-sources/google_iam_workload_identity_pool_provider#workload_identity_pool_id DataGoogleIamWorkloadIdentityPoolProvider#workload_identity_pool_id}

---

##### `workloadIdentityPoolProviderId`<sup>Required</sup> <a name="workloadIdentityPoolProviderId" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.workloadIdentityPoolProviderId"></a>

- *Type:* java.lang.String

The ID for the provider, which becomes the final component of the resource name.

This
value must be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.84.0/docs/data-sources/google_iam_workload_identity_pool_provider#workload_identity_pool_provider_id DataGoogleIamWorkloadIdentityPoolProvider#workload_identity_pool_provider_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.84.0/docs/data-sources/google_iam_workload_identity_pool_provider#id DataGoogleIamWorkloadIdentityPoolProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.84.0/docs/data-sources/google_iam_workload_identity_pool_provider#project DataGoogleIamWorkloadIdentityPoolProvider#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_iam_workload_identity_pool_provider.DataGoogleIamWorkloadIdentityPoolProvider;

DataGoogleIamWorkloadIdentityPoolProvider.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_iam_workload_identity_pool_provider.DataGoogleIamWorkloadIdentityPoolProvider;

DataGoogleIamWorkloadIdentityPoolProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_iam_workload_identity_pool_provider.DataGoogleIamWorkloadIdentityPoolProvider;

DataGoogleIamWorkloadIdentityPoolProvider.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.attributeCondition">attributeCondition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.attributeMapping">attributeMapping</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.aws">aws</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList">DataGoogleIamWorkloadIdentityPoolProviderAwsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.disabled">disabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.oidc">oidc</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList">DataGoogleIamWorkloadIdentityPoolProviderOidcList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.workloadIdentityPoolIdInput">workloadIdentityPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.workloadIdentityPoolProviderIdInput">workloadIdentityPoolProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.workloadIdentityPoolId">workloadIdentityPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.workloadIdentityPoolProviderId">workloadIdentityPoolProviderId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `attributeCondition`<sup>Required</sup> <a name="attributeCondition" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.attributeCondition"></a>

```java
public java.lang.String getAttributeCondition();
```

- *Type:* java.lang.String

---

##### `attributeMapping`<sup>Required</sup> <a name="attributeMapping" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.attributeMapping"></a>

```java
public StringMap getAttributeMapping();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.aws"></a>

```java
public DataGoogleIamWorkloadIdentityPoolProviderAwsList getAws();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList">DataGoogleIamWorkloadIdentityPoolProviderAwsList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.disabled"></a>

```java
public IResolvable getDisabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `oidc`<sup>Required</sup> <a name="oidc" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.oidc"></a>

```java
public DataGoogleIamWorkloadIdentityPoolProviderOidcList getOidc();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList">DataGoogleIamWorkloadIdentityPoolProviderOidcList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `workloadIdentityPoolIdInput`<sup>Optional</sup> <a name="workloadIdentityPoolIdInput" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.workloadIdentityPoolIdInput"></a>

```java
public java.lang.String getWorkloadIdentityPoolIdInput();
```

- *Type:* java.lang.String

---

##### `workloadIdentityPoolProviderIdInput`<sup>Optional</sup> <a name="workloadIdentityPoolProviderIdInput" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.workloadIdentityPoolProviderIdInput"></a>

```java
public java.lang.String getWorkloadIdentityPoolProviderIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `workloadIdentityPoolId`<sup>Required</sup> <a name="workloadIdentityPoolId" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.workloadIdentityPoolId"></a>

```java
public java.lang.String getWorkloadIdentityPoolId();
```

- *Type:* java.lang.String

---

##### `workloadIdentityPoolProviderId`<sup>Required</sup> <a name="workloadIdentityPoolProviderId" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.workloadIdentityPoolProviderId"></a>

```java
public java.lang.String getWorkloadIdentityPoolProviderId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleIamWorkloadIdentityPoolProviderAws <a name="DataGoogleIamWorkloadIdentityPoolProviderAws" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAws"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAws.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_iam_workload_identity_pool_provider.DataGoogleIamWorkloadIdentityPoolProviderAws;

DataGoogleIamWorkloadIdentityPoolProviderAws.builder()
    .build();
```


### DataGoogleIamWorkloadIdentityPoolProviderConfig <a name="DataGoogleIamWorkloadIdentityPoolProviderConfig" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_iam_workload_identity_pool_provider.DataGoogleIamWorkloadIdentityPoolProviderConfig;

DataGoogleIamWorkloadIdentityPoolProviderConfig.builder()
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
    .workloadIdentityPoolProviderId(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.workloadIdentityPoolId">workloadIdentityPoolId</a></code> | <code>java.lang.String</code> | The ID used for the pool, which is the final component of the pool resource name. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.workloadIdentityPoolProviderId">workloadIdentityPoolProviderId</a></code> | <code>java.lang.String</code> | The ID for the provider, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.84.0/docs/data-sources/google_iam_workload_identity_pool_provider#id DataGoogleIamWorkloadIdentityPoolProvider#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.84.0/docs/data-sources/google_iam_workload_identity_pool_provider#project DataGoogleIamWorkloadIdentityPoolProvider#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `workloadIdentityPoolId`<sup>Required</sup> <a name="workloadIdentityPoolId" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.workloadIdentityPoolId"></a>

```java
public java.lang.String getWorkloadIdentityPoolId();
```

- *Type:* java.lang.String

The ID used for the pool, which is the final component of the pool resource name.

This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.84.0/docs/data-sources/google_iam_workload_identity_pool_provider#workload_identity_pool_id DataGoogleIamWorkloadIdentityPoolProvider#workload_identity_pool_id}

---

##### `workloadIdentityPoolProviderId`<sup>Required</sup> <a name="workloadIdentityPoolProviderId" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.workloadIdentityPoolProviderId"></a>

```java
public java.lang.String getWorkloadIdentityPoolProviderId();
```

- *Type:* java.lang.String

The ID for the provider, which becomes the final component of the resource name.

This
value must be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.84.0/docs/data-sources/google_iam_workload_identity_pool_provider#workload_identity_pool_provider_id DataGoogleIamWorkloadIdentityPoolProvider#workload_identity_pool_provider_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.84.0/docs/data-sources/google_iam_workload_identity_pool_provider#id DataGoogleIamWorkloadIdentityPoolProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.84.0/docs/data-sources/google_iam_workload_identity_pool_provider#project DataGoogleIamWorkloadIdentityPoolProvider#project}.

---

### DataGoogleIamWorkloadIdentityPoolProviderOidc <a name="DataGoogleIamWorkloadIdentityPoolProviderOidc" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidc.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_iam_workload_identity_pool_provider.DataGoogleIamWorkloadIdentityPoolProviderOidc;

DataGoogleIamWorkloadIdentityPoolProviderOidc.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleIamWorkloadIdentityPoolProviderAwsList <a name="DataGoogleIamWorkloadIdentityPoolProviderAwsList" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_iam_workload_identity_pool_provider.DataGoogleIamWorkloadIdentityPoolProviderAwsList;

new DataGoogleIamWorkloadIdentityPoolProviderAwsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.get"></a>

```java
public DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference <a name="DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_iam_workload_identity_pool_provider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference;

new DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAws">DataGoogleIamWorkloadIdentityPoolProviderAws</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.property.internalValue"></a>

```java
public DataGoogleIamWorkloadIdentityPoolProviderAws getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAws">DataGoogleIamWorkloadIdentityPoolProviderAws</a>

---


### DataGoogleIamWorkloadIdentityPoolProviderOidcList <a name="DataGoogleIamWorkloadIdentityPoolProviderOidcList" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_iam_workload_identity_pool_provider.DataGoogleIamWorkloadIdentityPoolProviderOidcList;

new DataGoogleIamWorkloadIdentityPoolProviderOidcList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.get"></a>

```java
public DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference <a name="DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_iam_workload_identity_pool_provider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference;

new DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.allowedAudiences">allowedAudiences</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.issuerUri">issuerUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.jwksJson">jwksJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidc">DataGoogleIamWorkloadIdentityPoolProviderOidc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedAudiences`<sup>Required</sup> <a name="allowedAudiences" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.allowedAudiences"></a>

```java
public java.util.List<java.lang.String> getAllowedAudiences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `issuerUri`<sup>Required</sup> <a name="issuerUri" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.issuerUri"></a>

```java
public java.lang.String getIssuerUri();
```

- *Type:* java.lang.String

---

##### `jwksJson`<sup>Required</sup> <a name="jwksJson" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.jwksJson"></a>

```java
public java.lang.String getJwksJson();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.internalValue"></a>

```java
public DataGoogleIamWorkloadIdentityPoolProviderOidc getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidc">DataGoogleIamWorkloadIdentityPoolProviderOidc</a>

---



