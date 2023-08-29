# `google_network_connectivity_service_connection_policy`

Refer to the Terraform Registory for docs: [`google_network_connectivity_service_connection_policy`](https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_network_connectivity_service_connection_policy).

# `googleNetworkConnectivityServiceConnectionPolicy` Submodule <a name="`googleNetworkConnectivityServiceConnectionPolicy` Submodule" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkConnectivityServiceConnectionPolicy <a name="GoogleNetworkConnectivityServiceConnectionPolicy" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_network_connectivity_service_connection_policy google_network_connectivity_service_connection_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_connectivity_service_connection_policy.GoogleNetworkConnectivityServiceConnectionPolicy;

GoogleNetworkConnectivityServiceConnectionPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .network(java.lang.String)
    .serviceClass(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .pscConfig(GoogleNetworkConnectivityServiceConnectionPolicyPscConfig)
//  .timeouts(GoogleNetworkConnectivityServiceConnectionPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the ServiceConnectionPolicy. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of a ServiceConnectionPolicy. Format: projects/{project}/locations/{location}/serviceConnectionPolicies/{service_connection_policy} See: https://google.aip.dev/122#fields-representing-resource-names. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | The resource path of the consumer network. Example: - projects/{projectNumOrId}/global/networks/{resourceId}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.serviceClass">serviceClass</a></code> | <code>java.lang.String</code> | The service class identifier for which this ServiceConnectionPolicy is for. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Free-text description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_network_connectivity_service_connection_policy#id GoogleNetworkConnectivityServiceConnectionPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_network_connectivity_service_connection_policy#project GoogleNetworkConnectivityServiceConnectionPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.pscConfig">pscConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig">GoogleNetworkConnectivityServiceConnectionPolicyPscConfig</a></code> | psc_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts">GoogleNetworkConnectivityServiceConnectionPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the ServiceConnectionPolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_network_connectivity_service_connection_policy#location GoogleNetworkConnectivityServiceConnectionPolicy#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of a ServiceConnectionPolicy. Format: projects/{project}/locations/{location}/serviceConnectionPolicies/{service_connection_policy} See: https://google.aip.dev/122#fields-representing-resource-names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_network_connectivity_service_connection_policy#name GoogleNetworkConnectivityServiceConnectionPolicy#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.network"></a>

- *Type:* java.lang.String

The resource path of the consumer network. Example: - projects/{projectNumOrId}/global/networks/{resourceId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_network_connectivity_service_connection_policy#network GoogleNetworkConnectivityServiceConnectionPolicy#network}

---

##### `serviceClass`<sup>Required</sup> <a name="serviceClass" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.serviceClass"></a>

- *Type:* java.lang.String

The service class identifier for which this ServiceConnectionPolicy is for.

The service class identifier is a unique, symbolic representation of a ServiceClass.
It is provided by the Service Producer. Google services have a prefix of gcp. For example, gcp-cloud-sql. 3rd party services do not. For example, test-service-a3dfcx.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_network_connectivity_service_connection_policy#service_class GoogleNetworkConnectivityServiceConnectionPolicy#service_class}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Free-text description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_network_connectivity_service_connection_policy#description GoogleNetworkConnectivityServiceConnectionPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_network_connectivity_service_connection_policy#id GoogleNetworkConnectivityServiceConnectionPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_network_connectivity_service_connection_policy#labels GoogleNetworkConnectivityServiceConnectionPolicy#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_network_connectivity_service_connection_policy#project GoogleNetworkConnectivityServiceConnectionPolicy#project}.

---

##### `pscConfig`<sup>Optional</sup> <a name="pscConfig" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.pscConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig">GoogleNetworkConnectivityServiceConnectionPolicyPscConfig</a>

psc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_network_connectivity_service_connection_policy#psc_config GoogleNetworkConnectivityServiceConnectionPolicy#psc_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts">GoogleNetworkConnectivityServiceConnectionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_network_connectivity_service_connection_policy#timeouts GoogleNetworkConnectivityServiceConnectionPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.putPscConfig">putPscConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetPscConfig">resetPscConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putPscConfig` <a name="putPscConfig" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.putPscConfig"></a>

```java
public void putPscConfig(GoogleNetworkConnectivityServiceConnectionPolicyPscConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.putPscConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig">GoogleNetworkConnectivityServiceConnectionPolicyPscConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.putTimeouts"></a>

```java
public void putTimeouts(GoogleNetworkConnectivityServiceConnectionPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts">GoogleNetworkConnectivityServiceConnectionPolicyTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetProject"></a>

```java
public void resetProject()
```

##### `resetPscConfig` <a name="resetPscConfig" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetPscConfig"></a>

```java
public void resetPscConfig()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_connectivity_service_connection_policy.GoogleNetworkConnectivityServiceConnectionPolicy;

GoogleNetworkConnectivityServiceConnectionPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_connectivity_service_connection_policy.GoogleNetworkConnectivityServiceConnectionPolicy;

GoogleNetworkConnectivityServiceConnectionPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_connectivity_service_connection_policy.GoogleNetworkConnectivityServiceConnectionPolicy;

GoogleNetworkConnectivityServiceConnectionPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.infrastructure">infrastructure</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.pscConfig">pscConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference">GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.pscConnections">pscConnections</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference">GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.pscConfigInput">pscConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig">GoogleNetworkConnectivityServiceConnectionPolicyPscConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.serviceClassInput">serviceClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts">GoogleNetworkConnectivityServiceConnectionPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.serviceClass">serviceClass</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `infrastructure`<sup>Required</sup> <a name="infrastructure" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.infrastructure"></a>

```java
public java.lang.String getInfrastructure();
```

- *Type:* java.lang.String

---

##### `pscConfig`<sup>Required</sup> <a name="pscConfig" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.pscConfig"></a>

```java
public GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference getPscConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference">GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference</a>

---

##### `pscConnections`<sup>Required</sup> <a name="pscConnections" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.pscConnections"></a>

```java
public java.util.List<java.lang.String> getPscConnections();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.timeouts"></a>

```java
public GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference">GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `pscConfigInput`<sup>Optional</sup> <a name="pscConfigInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.pscConfigInput"></a>

```java
public GoogleNetworkConnectivityServiceConnectionPolicyPscConfig getPscConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig">GoogleNetworkConnectivityServiceConnectionPolicyPscConfig</a>

---

##### `serviceClassInput`<sup>Optional</sup> <a name="serviceClassInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.serviceClassInput"></a>

```java
public java.lang.String getServiceClassInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts">GoogleNetworkConnectivityServiceConnectionPolicyTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `serviceClass`<sup>Required</sup> <a name="serviceClass" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.serviceClass"></a>

```java
public java.lang.String getServiceClass();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkConnectivityServiceConnectionPolicyConfig <a name="GoogleNetworkConnectivityServiceConnectionPolicyConfig" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_connectivity_service_connection_policy.GoogleNetworkConnectivityServiceConnectionPolicyConfig;

GoogleNetworkConnectivityServiceConnectionPolicyConfig.builder()
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
    .name(java.lang.String)
    .network(java.lang.String)
    .serviceClass(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .pscConfig(GoogleNetworkConnectivityServiceConnectionPolicyPscConfig)
//  .timeouts(GoogleNetworkConnectivityServiceConnectionPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the ServiceConnectionPolicy. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of a ServiceConnectionPolicy. Format: projects/{project}/locations/{location}/serviceConnectionPolicies/{service_connection_policy} See: https://google.aip.dev/122#fields-representing-resource-names. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.network">network</a></code> | <code>java.lang.String</code> | The resource path of the consumer network. Example: - projects/{projectNumOrId}/global/networks/{resourceId}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.serviceClass">serviceClass</a></code> | <code>java.lang.String</code> | The service class identifier for which this ServiceConnectionPolicy is for. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | Free-text description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_network_connectivity_service_connection_policy#id GoogleNetworkConnectivityServiceConnectionPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_network_connectivity_service_connection_policy#project GoogleNetworkConnectivityServiceConnectionPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.pscConfig">pscConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig">GoogleNetworkConnectivityServiceConnectionPolicyPscConfig</a></code> | psc_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts">GoogleNetworkConnectivityServiceConnectionPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the ServiceConnectionPolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_network_connectivity_service_connection_policy#location GoogleNetworkConnectivityServiceConnectionPolicy#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of a ServiceConnectionPolicy. Format: projects/{project}/locations/{location}/serviceConnectionPolicies/{service_connection_policy} See: https://google.aip.dev/122#fields-representing-resource-names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_network_connectivity_service_connection_policy#name GoogleNetworkConnectivityServiceConnectionPolicy#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The resource path of the consumer network. Example: - projects/{projectNumOrId}/global/networks/{resourceId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_network_connectivity_service_connection_policy#network GoogleNetworkConnectivityServiceConnectionPolicy#network}

---

##### `serviceClass`<sup>Required</sup> <a name="serviceClass" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.serviceClass"></a>

```java
public java.lang.String getServiceClass();
```

- *Type:* java.lang.String

The service class identifier for which this ServiceConnectionPolicy is for.

The service class identifier is a unique, symbolic representation of a ServiceClass.
It is provided by the Service Producer. Google services have a prefix of gcp. For example, gcp-cloud-sql. 3rd party services do not. For example, test-service-a3dfcx.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_network_connectivity_service_connection_policy#service_class GoogleNetworkConnectivityServiceConnectionPolicy#service_class}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Free-text description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_network_connectivity_service_connection_policy#description GoogleNetworkConnectivityServiceConnectionPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_network_connectivity_service_connection_policy#id GoogleNetworkConnectivityServiceConnectionPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_network_connectivity_service_connection_policy#labels GoogleNetworkConnectivityServiceConnectionPolicy#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_network_connectivity_service_connection_policy#project GoogleNetworkConnectivityServiceConnectionPolicy#project}.

---

##### `pscConfig`<sup>Optional</sup> <a name="pscConfig" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.pscConfig"></a>

```java
public GoogleNetworkConnectivityServiceConnectionPolicyPscConfig getPscConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig">GoogleNetworkConnectivityServiceConnectionPolicyPscConfig</a>

psc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_network_connectivity_service_connection_policy#psc_config GoogleNetworkConnectivityServiceConnectionPolicy#psc_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.timeouts"></a>

```java
public GoogleNetworkConnectivityServiceConnectionPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts">GoogleNetworkConnectivityServiceConnectionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_network_connectivity_service_connection_policy#timeouts GoogleNetworkConnectivityServiceConnectionPolicy#timeouts}

---

### GoogleNetworkConnectivityServiceConnectionPolicyPscConfig <a name="GoogleNetworkConnectivityServiceConnectionPolicyPscConfig" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_connectivity_service_connection_policy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig;

GoogleNetworkConnectivityServiceConnectionPolicyPscConfig.builder()
    .subnetworks(java.util.List<java.lang.String>)
//  .limit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig.property.subnetworks">subnetworks</a></code> | <code>java.util.List<java.lang.String></code> | IDs of the subnetworks or fully qualified identifiers for the subnetworks. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig.property.limit">limit</a></code> | <code>java.lang.String</code> | Max number of PSC connections for this policy. |

---

##### `subnetworks`<sup>Required</sup> <a name="subnetworks" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig.property.subnetworks"></a>

```java
public java.util.List<java.lang.String> getSubnetworks();
```

- *Type:* java.util.List<java.lang.String>

IDs of the subnetworks or fully qualified identifiers for the subnetworks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_network_connectivity_service_connection_policy#subnetworks GoogleNetworkConnectivityServiceConnectionPolicy#subnetworks}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig.property.limit"></a>

```java
public java.lang.String getLimit();
```

- *Type:* java.lang.String

Max number of PSC connections for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_network_connectivity_service_connection_policy#limit GoogleNetworkConnectivityServiceConnectionPolicy#limit}

---

### GoogleNetworkConnectivityServiceConnectionPolicyTimeouts <a name="GoogleNetworkConnectivityServiceConnectionPolicyTimeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_connectivity_service_connection_policy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts;

GoogleNetworkConnectivityServiceConnectionPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_network_connectivity_service_connection_policy#create GoogleNetworkConnectivityServiceConnectionPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_network_connectivity_service_connection_policy#delete GoogleNetworkConnectivityServiceConnectionPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_network_connectivity_service_connection_policy#update GoogleNetworkConnectivityServiceConnectionPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_network_connectivity_service_connection_policy#create GoogleNetworkConnectivityServiceConnectionPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_network_connectivity_service_connection_policy#delete GoogleNetworkConnectivityServiceConnectionPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_network_connectivity_service_connection_policy#update GoogleNetworkConnectivityServiceConnectionPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference <a name="GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_connectivity_service_connection_policy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference;

new GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.resetLimit">resetLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLimit` <a name="resetLimit" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.resetLimit"></a>

```java
public void resetLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.limitInput">limitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.subnetworksInput">subnetworksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.limit">limit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.subnetworks">subnetworks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig">GoogleNetworkConnectivityServiceConnectionPolicyPscConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.limitInput"></a>

```java
public java.lang.String getLimitInput();
```

- *Type:* java.lang.String

---

##### `subnetworksInput`<sup>Optional</sup> <a name="subnetworksInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.subnetworksInput"></a>

```java
public java.util.List<java.lang.String> getSubnetworksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.limit"></a>

```java
public java.lang.String getLimit();
```

- *Type:* java.lang.String

---

##### `subnetworks`<sup>Required</sup> <a name="subnetworks" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.subnetworks"></a>

```java
public java.util.List<java.lang.String> getSubnetworks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.internalValue"></a>

```java
public GoogleNetworkConnectivityServiceConnectionPolicyPscConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig">GoogleNetworkConnectivityServiceConnectionPolicyPscConfig</a>

---


### GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference <a name="GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_connectivity_service_connection_policy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference;

new GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts">GoogleNetworkConnectivityServiceConnectionPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts">GoogleNetworkConnectivityServiceConnectionPolicyTimeouts</a>

---



