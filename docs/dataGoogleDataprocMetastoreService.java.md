# `dataGoogleDataprocMetastoreService` Submodule <a name="`dataGoogleDataprocMetastoreService` Submodule" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleDataprocMetastoreService <a name="DataGoogleDataprocMetastoreService" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/data-sources/google_dataproc_metastore_service google_dataproc_metastore_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreService;

DataGoogleDataprocMetastoreService.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .serviceId(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location where the metastore service should reside. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.Initializer.parameter.serviceId">serviceId</a></code> | <code>java.lang.String</code> | The ID of the metastore service. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/data-sources/google_dataproc_metastore_service#id DataGoogleDataprocMetastoreService#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/data-sources/google_dataproc_metastore_service#project DataGoogleDataprocMetastoreService#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location where the metastore service should reside. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/data-sources/google_dataproc_metastore_service#location DataGoogleDataprocMetastoreService#location}

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.Initializer.parameter.serviceId"></a>

- *Type:* java.lang.String

The ID of the metastore service.

The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/data-sources/google_dataproc_metastore_service#service_id DataGoogleDataprocMetastoreService#service_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/data-sources/google_dataproc_metastore_service#id DataGoogleDataprocMetastoreService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/data-sources/google_dataproc_metastore_service#project DataGoogleDataprocMetastoreService#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleDataprocMetastoreService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreService;

DataGoogleDataprocMetastoreService.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreService;

DataGoogleDataprocMetastoreService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreService;

DataGoogleDataprocMetastoreService.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreService;

DataGoogleDataprocMetastoreService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleDataprocMetastoreService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleDataprocMetastoreService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleDataprocMetastoreService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleDataprocMetastoreService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/data-sources/google_dataproc_metastore_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleDataprocMetastoreService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.artifactGcsUri">artifactGcsUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.databaseType">databaseType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.deletionProtection">deletionProtection</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList">DataGoogleDataprocMetastoreServiceEncryptionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.endpointUri">endpointUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.hiveMetastoreConfig">hiveMetastoreConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList">DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.labels">labels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList">DataGoogleDataprocMetastoreServiceMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.metadataIntegration">metadataIntegration</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList">DataGoogleDataprocMetastoreServiceMetadataIntegrationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList">DataGoogleDataprocMetastoreServiceNetworkConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.releaseChannel">releaseChannel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.scalingConfig">scalingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList">DataGoogleDataprocMetastoreServiceScalingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.scheduledBackup">scheduledBackup</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList">DataGoogleDataprocMetastoreServiceScheduledBackupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.stateMessage">stateMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.telemetryConfig">telemetryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList">DataGoogleDataprocMetastoreServiceTelemetryConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.tier">tier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.serviceIdInput">serviceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `artifactGcsUri`<sup>Required</sup> <a name="artifactGcsUri" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.artifactGcsUri"></a>

```java
public java.lang.String getArtifactGcsUri();
```

- *Type:* java.lang.String

---

##### `databaseType`<sup>Required</sup> <a name="databaseType" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.databaseType"></a>

```java
public java.lang.String getDatabaseType();
```

- *Type:* java.lang.String

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.deletionProtection"></a>

```java
public IResolvable getDeletionProtection();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `encryptionConfig`<sup>Required</sup> <a name="encryptionConfig" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.encryptionConfig"></a>

```java
public DataGoogleDataprocMetastoreServiceEncryptionConfigList getEncryptionConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList">DataGoogleDataprocMetastoreServiceEncryptionConfigList</a>

---

##### `endpointUri`<sup>Required</sup> <a name="endpointUri" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.endpointUri"></a>

```java
public java.lang.String getEndpointUri();
```

- *Type:* java.lang.String

---

##### `hiveMetastoreConfig`<sup>Required</sup> <a name="hiveMetastoreConfig" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.hiveMetastoreConfig"></a>

```java
public DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList getHiveMetastoreConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList">DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList</a>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.labels"></a>

```java
public StringMap getLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.maintenanceWindow"></a>

```java
public DataGoogleDataprocMetastoreServiceMaintenanceWindowList getMaintenanceWindow();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList">DataGoogleDataprocMetastoreServiceMaintenanceWindowList</a>

---

##### `metadataIntegration`<sup>Required</sup> <a name="metadataIntegration" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.metadataIntegration"></a>

```java
public DataGoogleDataprocMetastoreServiceMetadataIntegrationList getMetadataIntegration();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList">DataGoogleDataprocMetastoreServiceMetadataIntegrationList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.networkConfig"></a>

```java
public DataGoogleDataprocMetastoreServiceNetworkConfigList getNetworkConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList">DataGoogleDataprocMetastoreServiceNetworkConfigList</a>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `releaseChannel`<sup>Required</sup> <a name="releaseChannel" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.releaseChannel"></a>

```java
public java.lang.String getReleaseChannel();
```

- *Type:* java.lang.String

---

##### `scalingConfig`<sup>Required</sup> <a name="scalingConfig" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.scalingConfig"></a>

```java
public DataGoogleDataprocMetastoreServiceScalingConfigList getScalingConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList">DataGoogleDataprocMetastoreServiceScalingConfigList</a>

---

##### `scheduledBackup`<sup>Required</sup> <a name="scheduledBackup" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.scheduledBackup"></a>

```java
public DataGoogleDataprocMetastoreServiceScheduledBackupList getScheduledBackup();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList">DataGoogleDataprocMetastoreServiceScheduledBackupList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.stateMessage"></a>

```java
public java.lang.String getStateMessage();
```

- *Type:* java.lang.String

---

##### `telemetryConfig`<sup>Required</sup> <a name="telemetryConfig" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.telemetryConfig"></a>

```java
public DataGoogleDataprocMetastoreServiceTelemetryConfigList getTelemetryConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList">DataGoogleDataprocMetastoreServiceTelemetryConfigList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `serviceIdInput`<sup>Optional</sup> <a name="serviceIdInput" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.serviceIdInput"></a>

```java
public java.lang.String getServiceIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleDataprocMetastoreServiceConfig <a name="DataGoogleDataprocMetastoreServiceConfig" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceConfig;

DataGoogleDataprocMetastoreServiceConfig.builder()
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
    .location(java.lang.String)
    .serviceId(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location where the metastore service should reside. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | The ID of the metastore service. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/data-sources/google_dataproc_metastore_service#id DataGoogleDataprocMetastoreService#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/data-sources/google_dataproc_metastore_service#project DataGoogleDataprocMetastoreService#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location where the metastore service should reside. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/data-sources/google_dataproc_metastore_service#location DataGoogleDataprocMetastoreService#location}

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

The ID of the metastore service.

The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/data-sources/google_dataproc_metastore_service#service_id DataGoogleDataprocMetastoreService#service_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/data-sources/google_dataproc_metastore_service#id DataGoogleDataprocMetastoreService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/data-sources/google_dataproc_metastore_service#project DataGoogleDataprocMetastoreService#project}.

---

### DataGoogleDataprocMetastoreServiceEncryptionConfig <a name="DataGoogleDataprocMetastoreServiceEncryptionConfig" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceEncryptionConfig;

DataGoogleDataprocMetastoreServiceEncryptionConfig.builder()
    .build();
```


### DataGoogleDataprocMetastoreServiceHiveMetastoreConfig <a name="DataGoogleDataprocMetastoreServiceHiveMetastoreConfig" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceHiveMetastoreConfig;

DataGoogleDataprocMetastoreServiceHiveMetastoreConfig.builder()
    .build();
```


### DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions <a name="DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions;

DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions.builder()
    .build();
```


### DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig <a name="DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig;

DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig.builder()
    .build();
```


### DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab <a name="DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab;

DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab.builder()
    .build();
```


### DataGoogleDataprocMetastoreServiceMaintenanceWindow <a name="DataGoogleDataprocMetastoreServiceMaintenanceWindow" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceMaintenanceWindow;

DataGoogleDataprocMetastoreServiceMaintenanceWindow.builder()
    .build();
```


### DataGoogleDataprocMetastoreServiceMetadataIntegration <a name="DataGoogleDataprocMetastoreServiceMetadataIntegration" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceMetadataIntegration;

DataGoogleDataprocMetastoreServiceMetadataIntegration.builder()
    .build();
```


### DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig <a name="DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig;

DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig.builder()
    .build();
```


### DataGoogleDataprocMetastoreServiceNetworkConfig <a name="DataGoogleDataprocMetastoreServiceNetworkConfig" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceNetworkConfig;

DataGoogleDataprocMetastoreServiceNetworkConfig.builder()
    .build();
```


### DataGoogleDataprocMetastoreServiceNetworkConfigConsumers <a name="DataGoogleDataprocMetastoreServiceNetworkConfigConsumers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceNetworkConfigConsumers;

DataGoogleDataprocMetastoreServiceNetworkConfigConsumers.builder()
    .build();
```


### DataGoogleDataprocMetastoreServiceScalingConfig <a name="DataGoogleDataprocMetastoreServiceScalingConfig" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceScalingConfig;

DataGoogleDataprocMetastoreServiceScalingConfig.builder()
    .build();
```


### DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig <a name="DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig;

DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig.builder()
    .build();
```


### DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig <a name="DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig;

DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig.builder()
    .build();
```


### DataGoogleDataprocMetastoreServiceScheduledBackup <a name="DataGoogleDataprocMetastoreServiceScheduledBackup" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceScheduledBackup;

DataGoogleDataprocMetastoreServiceScheduledBackup.builder()
    .build();
```


### DataGoogleDataprocMetastoreServiceTelemetryConfig <a name="DataGoogleDataprocMetastoreServiceTelemetryConfig" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceTelemetryConfig;

DataGoogleDataprocMetastoreServiceTelemetryConfig.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleDataprocMetastoreServiceEncryptionConfigList <a name="DataGoogleDataprocMetastoreServiceEncryptionConfigList" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceEncryptionConfigList;

new DataGoogleDataprocMetastoreServiceEncryptionConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.get"></a>

```java
public DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference <a name="DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference;

new DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfig">DataGoogleDataprocMetastoreServiceEncryptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleDataprocMetastoreServiceEncryptionConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfig">DataGoogleDataprocMetastoreServiceEncryptionConfig</a>

---


### DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList <a name="DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList;

new DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.get"></a>

```java
public DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference <a name="DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference;

new DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.configOverrides">configOverrides</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configOverrides`<sup>Required</sup> <a name="configOverrides" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.configOverrides"></a>

```java
public StringMap getConfigOverrides();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.internalValue"></a>

```java
public DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a>

---


### DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList <a name="DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList;

new DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.get"></a>

```java
public DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference <a name="DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference;

new DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.cloudSecret">cloudSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab">DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudSecret`<sup>Required</sup> <a name="cloudSecret" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.cloudSecret"></a>

```java
public java.lang.String getCloudSecret();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.internalValue"></a>

```java
public DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab">DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab</a>

---


### DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList <a name="DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList;

new DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.get"></a>

```java
public DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference <a name="DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference;

new DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.keytab">keytab</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList">DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.krb5ConfigGcsUri">krb5ConfigGcsUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.principal">principal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig">DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keytab`<sup>Required</sup> <a name="keytab" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.keytab"></a>

```java
public DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList getKeytab();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList">DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList</a>

---

##### `krb5ConfigGcsUri`<sup>Required</sup> <a name="krb5ConfigGcsUri" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.krb5ConfigGcsUri"></a>

```java
public java.lang.String getKrb5ConfigGcsUri();
```

- *Type:* java.lang.String

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig">DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig</a>

---


### DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList <a name="DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList;

new DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.get"></a>

```java
public DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference <a name="DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference;

new DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.auxiliaryVersions">auxiliaryVersions</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList">DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.configOverrides">configOverrides</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.endpointProtocol">endpointProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.kerberosConfig">kerberosConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList">DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfig">DataGoogleDataprocMetastoreServiceHiveMetastoreConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `auxiliaryVersions`<sup>Required</sup> <a name="auxiliaryVersions" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.auxiliaryVersions"></a>

```java
public DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList getAuxiliaryVersions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList">DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList</a>

---

##### `configOverrides`<sup>Required</sup> <a name="configOverrides" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.configOverrides"></a>

```java
public StringMap getConfigOverrides();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `endpointProtocol`<sup>Required</sup> <a name="endpointProtocol" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.endpointProtocol"></a>

```java
public java.lang.String getEndpointProtocol();
```

- *Type:* java.lang.String

---

##### `kerberosConfig`<sup>Required</sup> <a name="kerberosConfig" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.kerberosConfig"></a>

```java
public DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList getKerberosConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList">DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleDataprocMetastoreServiceHiveMetastoreConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfig">DataGoogleDataprocMetastoreServiceHiveMetastoreConfig</a>

---


### DataGoogleDataprocMetastoreServiceMaintenanceWindowList <a name="DataGoogleDataprocMetastoreServiceMaintenanceWindowList" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceMaintenanceWindowList;

new DataGoogleDataprocMetastoreServiceMaintenanceWindowList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.get"></a>

```java
public DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference <a name="DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference;

new DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.hourOfDay">hourOfDay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindow">DataGoogleDataprocMetastoreServiceMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

---

##### `hourOfDay`<sup>Required</sup> <a name="hourOfDay" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.hourOfDay"></a>

```java
public java.lang.Number getHourOfDay();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.internalValue"></a>

```java
public DataGoogleDataprocMetastoreServiceMaintenanceWindow getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindow">DataGoogleDataprocMetastoreServiceMaintenanceWindow</a>

---


### DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList <a name="DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList;

new DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.get"></a>

```java
public DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference <a name="DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference;

new DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig">DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig">DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig</a>

---


### DataGoogleDataprocMetastoreServiceMetadataIntegrationList <a name="DataGoogleDataprocMetastoreServiceMetadataIntegrationList" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceMetadataIntegrationList;

new DataGoogleDataprocMetastoreServiceMetadataIntegrationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.get"></a>

```java
public DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference <a name="DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference;

new DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.dataCatalogConfig">dataCatalogConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList">DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegration">DataGoogleDataprocMetastoreServiceMetadataIntegration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataCatalogConfig`<sup>Required</sup> <a name="dataCatalogConfig" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.dataCatalogConfig"></a>

```java
public DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList getDataCatalogConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList">DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.internalValue"></a>

```java
public DataGoogleDataprocMetastoreServiceMetadataIntegration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegration">DataGoogleDataprocMetastoreServiceMetadataIntegration</a>

---


### DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList <a name="DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList;

new DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.get"></a>

```java
public DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference <a name="DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference;

new DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.endpointUri">endpointUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumers">DataGoogleDataprocMetastoreServiceNetworkConfigConsumers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endpointUri`<sup>Required</sup> <a name="endpointUri" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.endpointUri"></a>

```java
public java.lang.String getEndpointUri();
```

- *Type:* java.lang.String

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.internalValue"></a>

```java
public DataGoogleDataprocMetastoreServiceNetworkConfigConsumers getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumers">DataGoogleDataprocMetastoreServiceNetworkConfigConsumers</a>

---


### DataGoogleDataprocMetastoreServiceNetworkConfigList <a name="DataGoogleDataprocMetastoreServiceNetworkConfigList" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceNetworkConfigList;

new DataGoogleDataprocMetastoreServiceNetworkConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.get"></a>

```java
public DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference <a name="DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference;

new DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.consumers">consumers</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList">DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.customRoutesEnabled">customRoutesEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfig">DataGoogleDataprocMetastoreServiceNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `consumers`<sup>Required</sup> <a name="consumers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.consumers"></a>

```java
public DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList getConsumers();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList">DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList</a>

---

##### `customRoutesEnabled`<sup>Required</sup> <a name="customRoutesEnabled" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.customRoutesEnabled"></a>

```java
public IResolvable getCustomRoutesEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleDataprocMetastoreServiceNetworkConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfig">DataGoogleDataprocMetastoreServiceNetworkConfig</a>

---


### DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList <a name="DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList;

new DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.get"></a>

```java
public DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference <a name="DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference;

new DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.maxScalingFactor">maxScalingFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.minScalingFactor">minScalingFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig">DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxScalingFactor`<sup>Required</sup> <a name="maxScalingFactor" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.maxScalingFactor"></a>

```java
public java.lang.Number getMaxScalingFactor();
```

- *Type:* java.lang.Number

---

##### `minScalingFactor`<sup>Required</sup> <a name="minScalingFactor" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.minScalingFactor"></a>

```java
public java.lang.Number getMinScalingFactor();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig">DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig</a>

---


### DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList <a name="DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList;

new DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.get"></a>

```java
public DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference <a name="DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference;

new DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.autoscalingEnabled">autoscalingEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.limitConfig">limitConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList">DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig">DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoscalingEnabled`<sup>Required</sup> <a name="autoscalingEnabled" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.autoscalingEnabled"></a>

```java
public IResolvable getAutoscalingEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `limitConfig`<sup>Required</sup> <a name="limitConfig" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.limitConfig"></a>

```java
public DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList getLimitConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList">DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig">DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig</a>

---


### DataGoogleDataprocMetastoreServiceScalingConfigList <a name="DataGoogleDataprocMetastoreServiceScalingConfigList" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceScalingConfigList;

new DataGoogleDataprocMetastoreServiceScalingConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.get"></a>

```java
public DataGoogleDataprocMetastoreServiceScalingConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleDataprocMetastoreServiceScalingConfigOutputReference <a name="DataGoogleDataprocMetastoreServiceScalingConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference;

new DataGoogleDataprocMetastoreServiceScalingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.property.autoscalingConfig">autoscalingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList">DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.property.instanceSize">instanceSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.property.scalingFactor">scalingFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfig">DataGoogleDataprocMetastoreServiceScalingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoscalingConfig`<sup>Required</sup> <a name="autoscalingConfig" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.property.autoscalingConfig"></a>

```java
public DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList getAutoscalingConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList">DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList</a>

---

##### `instanceSize`<sup>Required</sup> <a name="instanceSize" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.property.instanceSize"></a>

```java
public java.lang.String getInstanceSize();
```

- *Type:* java.lang.String

---

##### `scalingFactor`<sup>Required</sup> <a name="scalingFactor" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.property.scalingFactor"></a>

```java
public java.lang.Number getScalingFactor();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleDataprocMetastoreServiceScalingConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfig">DataGoogleDataprocMetastoreServiceScalingConfig</a>

---


### DataGoogleDataprocMetastoreServiceScheduledBackupList <a name="DataGoogleDataprocMetastoreServiceScheduledBackupList" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceScheduledBackupList;

new DataGoogleDataprocMetastoreServiceScheduledBackupList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.get"></a>

```java
public DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference <a name="DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference;

new DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.backupLocation">backupLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.cronSchedule">cronSchedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackup">DataGoogleDataprocMetastoreServiceScheduledBackup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupLocation`<sup>Required</sup> <a name="backupLocation" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.backupLocation"></a>

```java
public java.lang.String getBackupLocation();
```

- *Type:* java.lang.String

---

##### `cronSchedule`<sup>Required</sup> <a name="cronSchedule" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.cronSchedule"></a>

```java
public java.lang.String getCronSchedule();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.internalValue"></a>

```java
public DataGoogleDataprocMetastoreServiceScheduledBackup getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackup">DataGoogleDataprocMetastoreServiceScheduledBackup</a>

---


### DataGoogleDataprocMetastoreServiceTelemetryConfigList <a name="DataGoogleDataprocMetastoreServiceTelemetryConfigList" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceTelemetryConfigList;

new DataGoogleDataprocMetastoreServiceTelemetryConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.get"></a>

```java
public DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference <a name="DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_dataproc_metastore_service.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference;

new DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.logFormat">logFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfig">DataGoogleDataprocMetastoreServiceTelemetryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logFormat`<sup>Required</sup> <a name="logFormat" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.logFormat"></a>

```java
public java.lang.String getLogFormat();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleDataprocMetastoreServiceTelemetryConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfig">DataGoogleDataprocMetastoreServiceTelemetryConfig</a>

---



