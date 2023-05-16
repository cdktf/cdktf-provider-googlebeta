# `google_vertex_ai_endpoint`

Refer to the Terraform Registory for docs: [`google_vertex_ai_endpoint`](https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_endpoint).

# `googleVertexAiEndpoint` Submodule <a name="`googleVertexAiEndpoint` Submodule" id="@cdktf/provider-google-beta.googleVertexAiEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiEndpoint <a name="GoogleVertexAiEndpoint" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_endpoint google_vertex_ai_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_endpoint.GoogleVertexAiEndpoint;

GoogleVertexAiEndpoint.Builder.create(Construct scope, java.lang.String id)
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
    .displayName(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .encryptionSpec(GoogleVertexAiEndpointEncryptionSpec)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .network(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(GoogleVertexAiEndpointTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The resource name of the Endpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the Endpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpec">GoogleVertexAiEndpointEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_endpoint#id GoogleVertexAiEndpoint#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels with user-defined metadata to organize your Endpoints. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the Endpoint should be peered. Private services access must already be configured for the network. If left unspecified, the Endpoint is not peered with any network. Only one of the fields, network or enable_private_service_connect, can be set. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): 'projects/{project}/global/networks/{network}'. Where '{project}' is a project number, as in '12345', and '{network}' is network name. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_endpoint#project GoogleVertexAiEndpoint#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeouts">GoogleVertexAiEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Required.

The display name of the Endpoint. The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_endpoint#display_name GoogleVertexAiEndpoint#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_endpoint#location GoogleVertexAiEndpoint#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The resource name of the Endpoint.

The name must be numeric with no leading zeros and can be at most 10 digits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_endpoint#name GoogleVertexAiEndpoint#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the Endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_endpoint#description GoogleVertexAiEndpoint#description}

---

##### `encryptionSpec`<sup>Optional</sup> <a name="encryptionSpec" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.encryptionSpec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpec">GoogleVertexAiEndpointEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_endpoint#encryption_spec GoogleVertexAiEndpoint#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_endpoint#id GoogleVertexAiEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels with user-defined metadata to organize your Endpoints.

Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_endpoint#labels GoogleVertexAiEndpoint#labels}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.network"></a>

- *Type:* java.lang.String

The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the Endpoint should be peered. Private services access must already be configured for the network. If left unspecified, the Endpoint is not peered with any network. Only one of the fields, network or enable_private_service_connect, can be set. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): 'projects/{project}/global/networks/{network}'. Where '{project}' is a project number, as in '12345', and '{network}' is network name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_endpoint#network GoogleVertexAiEndpoint#network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_endpoint#project GoogleVertexAiEndpoint#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_endpoint#region GoogleVertexAiEndpoint#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeouts">GoogleVertexAiEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_endpoint#timeouts GoogleVertexAiEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.putEncryptionSpec">putEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetEncryptionSpec">resetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putEncryptionSpec` <a name="putEncryptionSpec" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.putEncryptionSpec"></a>

```java
public void putEncryptionSpec(GoogleVertexAiEndpointEncryptionSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpec">GoogleVertexAiEndpointEncryptionSpec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.putTimeouts"></a>

```java
public void putTimeouts(GoogleVertexAiEndpointTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeouts">GoogleVertexAiEndpointTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEncryptionSpec` <a name="resetEncryptionSpec" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetEncryptionSpec"></a>

```java
public void resetEncryptionSpec()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_endpoint.GoogleVertexAiEndpoint;

GoogleVertexAiEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_endpoint.GoogleVertexAiEndpoint;

GoogleVertexAiEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_endpoint.GoogleVertexAiEndpoint;

GoogleVertexAiEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.deployedModels">deployedModels</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList">GoogleVertexAiEndpointDeployedModelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference">GoogleVertexAiEndpointEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.modelDeploymentMonitoringJob">modelDeploymentMonitoringJob</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference">GoogleVertexAiEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.encryptionSpecInput">encryptionSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpec">GoogleVertexAiEndpointEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeouts">GoogleVertexAiEndpointTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `deployedModels`<sup>Required</sup> <a name="deployedModels" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.deployedModels"></a>

```java
public GoogleVertexAiEndpointDeployedModelsList getDeployedModels();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList">GoogleVertexAiEndpointDeployedModelsList</a>

---

##### `encryptionSpec`<sup>Required</sup> <a name="encryptionSpec" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.encryptionSpec"></a>

```java
public GoogleVertexAiEndpointEncryptionSpecOutputReference getEncryptionSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference">GoogleVertexAiEndpointEncryptionSpecOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `modelDeploymentMonitoringJob`<sup>Required</sup> <a name="modelDeploymentMonitoringJob" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.modelDeploymentMonitoringJob"></a>

```java
public java.lang.String getModelDeploymentMonitoringJob();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.timeouts"></a>

```java
public GoogleVertexAiEndpointTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference">GoogleVertexAiEndpointTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `encryptionSpecInput`<sup>Optional</sup> <a name="encryptionSpecInput" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.encryptionSpecInput"></a>

```java
public GoogleVertexAiEndpointEncryptionSpec getEncryptionSpecInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpec">GoogleVertexAiEndpointEncryptionSpec</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeouts">GoogleVertexAiEndpointTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiEndpointConfig <a name="GoogleVertexAiEndpointConfig" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_endpoint.GoogleVertexAiEndpointConfig;

GoogleVertexAiEndpointConfig.builder()
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
    .displayName(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .encryptionSpec(GoogleVertexAiEndpointEncryptionSpec)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .network(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(GoogleVertexAiEndpointTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.name">name</a></code> | <code>java.lang.String</code> | The resource name of the Endpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the Endpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpec">GoogleVertexAiEndpointEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_endpoint#id GoogleVertexAiEndpoint#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels with user-defined metadata to organize your Endpoints. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.network">network</a></code> | <code>java.lang.String</code> | The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the Endpoint should be peered. Private services access must already be configured for the network. If left unspecified, the Endpoint is not peered with any network. Only one of the fields, network or enable_private_service_connect, can be set. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): 'projects/{project}/global/networks/{network}'. Where '{project}' is a project number, as in '12345', and '{network}' is network name. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_endpoint#project GoogleVertexAiEndpoint#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeouts">GoogleVertexAiEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Required.

The display name of the Endpoint. The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_endpoint#display_name GoogleVertexAiEndpoint#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_endpoint#location GoogleVertexAiEndpoint#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The resource name of the Endpoint.

The name must be numeric with no leading zeros and can be at most 10 digits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_endpoint#name GoogleVertexAiEndpoint#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the Endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_endpoint#description GoogleVertexAiEndpoint#description}

---

##### `encryptionSpec`<sup>Optional</sup> <a name="encryptionSpec" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.encryptionSpec"></a>

```java
public GoogleVertexAiEndpointEncryptionSpec getEncryptionSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpec">GoogleVertexAiEndpointEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_endpoint#encryption_spec GoogleVertexAiEndpoint#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_endpoint#id GoogleVertexAiEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels with user-defined metadata to organize your Endpoints.

Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_endpoint#labels GoogleVertexAiEndpoint#labels}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the Endpoint should be peered. Private services access must already be configured for the network. If left unspecified, the Endpoint is not peered with any network. Only one of the fields, network or enable_private_service_connect, can be set. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): 'projects/{project}/global/networks/{network}'. Where '{project}' is a project number, as in '12345', and '{network}' is network name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_endpoint#network GoogleVertexAiEndpoint#network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_endpoint#project GoogleVertexAiEndpoint#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_endpoint#region GoogleVertexAiEndpoint#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.timeouts"></a>

```java
public GoogleVertexAiEndpointTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeouts">GoogleVertexAiEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_endpoint#timeouts GoogleVertexAiEndpoint#timeouts}

---

### GoogleVertexAiEndpointDeployedModels <a name="GoogleVertexAiEndpointDeployedModels" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModels.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_endpoint.GoogleVertexAiEndpointDeployedModels;

GoogleVertexAiEndpointDeployedModels.builder()
    .build();
```


### GoogleVertexAiEndpointDeployedModelsAutomaticResources <a name="GoogleVertexAiEndpointDeployedModelsAutomaticResources" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_endpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResources;

GoogleVertexAiEndpointDeployedModelsAutomaticResources.builder()
    .build();
```


### GoogleVertexAiEndpointDeployedModelsDedicatedResources <a name="GoogleVertexAiEndpointDeployedModelsDedicatedResources" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_endpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResources;

GoogleVertexAiEndpointDeployedModelsDedicatedResources.builder()
    .build();
```


### GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs <a name="GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_endpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs;

GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs.builder()
    .build();
```


### GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec <a name="GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_endpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec;

GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec.builder()
    .build();
```


### GoogleVertexAiEndpointDeployedModelsPrivateEndpoints <a name="GoogleVertexAiEndpointDeployedModelsPrivateEndpoints" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_endpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpoints;

GoogleVertexAiEndpointDeployedModelsPrivateEndpoints.builder()
    .build();
```


### GoogleVertexAiEndpointEncryptionSpec <a name="GoogleVertexAiEndpointEncryptionSpec" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_endpoint.GoogleVertexAiEndpointEncryptionSpec;

GoogleVertexAiEndpointEncryptionSpec.builder()
    .kmsKeyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpec.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | Required. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpec.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

Required.

The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource. Has the form: 'projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key'. The key needs to be in the same region as where the compute resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_endpoint#kms_key_name GoogleVertexAiEndpoint#kms_key_name}

---

### GoogleVertexAiEndpointTimeouts <a name="GoogleVertexAiEndpointTimeouts" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_endpoint.GoogleVertexAiEndpointTimeouts;

GoogleVertexAiEndpointTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_endpoint#create GoogleVertexAiEndpoint#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_endpoint#delete GoogleVertexAiEndpoint#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_endpoint#update GoogleVertexAiEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_endpoint#create GoogleVertexAiEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_endpoint#delete GoogleVertexAiEndpoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_vertex_ai_endpoint#update GoogleVertexAiEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList <a name="GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_endpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList;

new GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.get"></a>

```java
public GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference <a name="GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_endpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference;

new GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.property.maxReplicaCount">maxReplicaCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.property.minReplicaCount">minReplicaCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResources">GoogleVertexAiEndpointDeployedModelsAutomaticResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxReplicaCount`<sup>Required</sup> <a name="maxReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.property.maxReplicaCount"></a>

```java
public java.lang.Number getMaxReplicaCount();
```

- *Type:* java.lang.Number

---

##### `minReplicaCount`<sup>Required</sup> <a name="minReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.property.minReplicaCount"></a>

```java
public java.lang.Number getMinReplicaCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiEndpointDeployedModelsAutomaticResources getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResources">GoogleVertexAiEndpointDeployedModelsAutomaticResources</a>

---


### GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList <a name="GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_endpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList;

new GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.get"></a>

```java
public GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference <a name="GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_endpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference;

new GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.target">target</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs">GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.target"></a>

```java
public java.lang.Number getTarget();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs">GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs</a>

---


### GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList <a name="GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_endpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList;

new GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.get"></a>

```java
public GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList <a name="GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_endpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList;

new GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.get"></a>

```java
public GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference <a name="GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_endpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference;

new GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.acceleratorCount">acceleratorCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.acceleratorType">acceleratorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.machineType">machineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec">GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acceleratorCount`<sup>Required</sup> <a name="acceleratorCount" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.acceleratorCount"></a>

```java
public java.lang.Number getAcceleratorCount();
```

- *Type:* java.lang.Number

---

##### `acceleratorType`<sup>Required</sup> <a name="acceleratorType" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.acceleratorType"></a>

```java
public java.lang.String getAcceleratorType();
```

- *Type:* java.lang.String

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec">GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec</a>

---


### GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference <a name="GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_endpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference;

new GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.autoscalingMetricSpecs">autoscalingMetricSpecs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList">GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.machineSpec">machineSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList">GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.maxReplicaCount">maxReplicaCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.minReplicaCount">minReplicaCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResources">GoogleVertexAiEndpointDeployedModelsDedicatedResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoscalingMetricSpecs`<sup>Required</sup> <a name="autoscalingMetricSpecs" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.autoscalingMetricSpecs"></a>

```java
public GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList getAutoscalingMetricSpecs();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList">GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList</a>

---

##### `machineSpec`<sup>Required</sup> <a name="machineSpec" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.machineSpec"></a>

```java
public GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList getMachineSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList">GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList</a>

---

##### `maxReplicaCount`<sup>Required</sup> <a name="maxReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.maxReplicaCount"></a>

```java
public java.lang.Number getMaxReplicaCount();
```

- *Type:* java.lang.Number

---

##### `minReplicaCount`<sup>Required</sup> <a name="minReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.minReplicaCount"></a>

```java
public java.lang.Number getMinReplicaCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiEndpointDeployedModelsDedicatedResources getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResources">GoogleVertexAiEndpointDeployedModelsDedicatedResources</a>

---


### GoogleVertexAiEndpointDeployedModelsList <a name="GoogleVertexAiEndpointDeployedModelsList" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_endpoint.GoogleVertexAiEndpointDeployedModelsList;

new GoogleVertexAiEndpointDeployedModelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.get"></a>

```java
public GoogleVertexAiEndpointDeployedModelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleVertexAiEndpointDeployedModelsOutputReference <a name="GoogleVertexAiEndpointDeployedModelsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_endpoint.GoogleVertexAiEndpointDeployedModelsOutputReference;

new GoogleVertexAiEndpointDeployedModelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.automaticResources">automaticResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList">GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.dedicatedResources">dedicatedResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList">GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.enableAccessLogging">enableAccessLogging</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.enableContainerLogging">enableContainerLogging</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.model">model</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.modelVersionId">modelVersionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.privateEndpoints">privateEndpoints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList">GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.sharedResources">sharedResources</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModels">GoogleVertexAiEndpointDeployedModels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `automaticResources`<sup>Required</sup> <a name="automaticResources" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.automaticResources"></a>

```java
public GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList getAutomaticResources();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList">GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `dedicatedResources`<sup>Required</sup> <a name="dedicatedResources" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.dedicatedResources"></a>

```java
public GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList getDedicatedResources();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList">GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enableAccessLogging`<sup>Required</sup> <a name="enableAccessLogging" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.enableAccessLogging"></a>

```java
public IResolvable getEnableAccessLogging();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `enableContainerLogging`<sup>Required</sup> <a name="enableContainerLogging" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.enableContainerLogging"></a>

```java
public IResolvable getEnableContainerLogging();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

---

##### `modelVersionId`<sup>Required</sup> <a name="modelVersionId" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.modelVersionId"></a>

```java
public java.lang.String getModelVersionId();
```

- *Type:* java.lang.String

---

##### `privateEndpoints`<sup>Required</sup> <a name="privateEndpoints" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.privateEndpoints"></a>

```java
public GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList getPrivateEndpoints();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList">GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList</a>

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `sharedResources`<sup>Required</sup> <a name="sharedResources" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.sharedResources"></a>

```java
public java.lang.String getSharedResources();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiEndpointDeployedModels getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModels">GoogleVertexAiEndpointDeployedModels</a>

---


### GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList <a name="GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_endpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList;

new GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.get"></a>

```java
public GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference <a name="GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_endpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference;

new GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.explainHttpUri">explainHttpUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.healthHttpUri">healthHttpUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.predictHttpUri">predictHttpUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.serviceAttachment">serviceAttachment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpoints">GoogleVertexAiEndpointDeployedModelsPrivateEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `explainHttpUri`<sup>Required</sup> <a name="explainHttpUri" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.explainHttpUri"></a>

```java
public java.lang.String getExplainHttpUri();
```

- *Type:* java.lang.String

---

##### `healthHttpUri`<sup>Required</sup> <a name="healthHttpUri" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.healthHttpUri"></a>

```java
public java.lang.String getHealthHttpUri();
```

- *Type:* java.lang.String

---

##### `predictHttpUri`<sup>Required</sup> <a name="predictHttpUri" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.predictHttpUri"></a>

```java
public java.lang.String getPredictHttpUri();
```

- *Type:* java.lang.String

---

##### `serviceAttachment`<sup>Required</sup> <a name="serviceAttachment" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.serviceAttachment"></a>

```java
public java.lang.String getServiceAttachment();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiEndpointDeployedModelsPrivateEndpoints getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpoints">GoogleVertexAiEndpointDeployedModelsPrivateEndpoints</a>

---


### GoogleVertexAiEndpointEncryptionSpecOutputReference <a name="GoogleVertexAiEndpointEncryptionSpecOutputReference" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_endpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference;

new GoogleVertexAiEndpointEncryptionSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpec">GoogleVertexAiEndpointEncryptionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiEndpointEncryptionSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpec">GoogleVertexAiEndpointEncryptionSpec</a>

---


### GoogleVertexAiEndpointTimeoutsOutputReference <a name="GoogleVertexAiEndpointTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_endpoint.GoogleVertexAiEndpointTimeoutsOutputReference;

new GoogleVertexAiEndpointTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeouts">GoogleVertexAiEndpointTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeouts">GoogleVertexAiEndpointTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



