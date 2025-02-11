# `googleComputeNodeTemplate` Submodule <a name="`googleComputeNodeTemplate` Submodule" id="@cdktf/provider-google-beta.googleComputeNodeTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeNodeTemplate <a name="GoogleComputeNodeTemplate" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template google_compute_node_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_node_template.GoogleComputeNodeTemplate;

GoogleComputeNodeTemplate.Builder.create(Construct scope, java.lang.String id)
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
//  .accelerators(IResolvable)
//  .accelerators(java.util.List<GoogleComputeNodeTemplateAccelerators>)
//  .cpuOvercommitType(java.lang.String)
//  .description(java.lang.String)
//  .disks(IResolvable)
//  .disks(java.util.List<GoogleComputeNodeTemplateDisks>)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .nodeAffinityLabels(java.util.Map<java.lang.String, java.lang.String>)
//  .nodeType(java.lang.String)
//  .nodeTypeFlexibility(GoogleComputeNodeTemplateNodeTypeFlexibility)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .serverBinding(GoogleComputeNodeTemplateServerBinding)
//  .timeouts(GoogleComputeNodeTemplateTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.accelerators">accelerators</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAccelerators">GoogleComputeNodeTemplateAccelerators</a>></code> | accelerators block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.cpuOvercommitType">cpuOvercommitType</a></code> | <code>java.lang.String</code> | CPU overcommit. Default value: "NONE" Possible values: ["ENABLED", "NONE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional textual description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.disks">disks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisks">GoogleComputeNodeTemplateDisks</a>></code> | disks block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#id GoogleComputeNodeTemplate#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.nodeAffinityLabels">nodeAffinityLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels to use for node affinity, which will be used in instance scheduling. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.nodeType">nodeType</a></code> | <code>java.lang.String</code> | Node type to use for nodes group that are created from this template. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.nodeTypeFlexibility">nodeTypeFlexibility</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility">GoogleComputeNodeTemplateNodeTypeFlexibility</a></code> | node_type_flexibility block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#project GoogleComputeNodeTemplate#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where nodes using the node template will be created. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.serverBinding">serverBinding</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBinding">GoogleComputeNodeTemplateServerBinding</a></code> | server_binding block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeouts">GoogleComputeNodeTemplateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accelerators`<sup>Optional</sup> <a name="accelerators" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.accelerators"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAccelerators">GoogleComputeNodeTemplateAccelerators</a>>

accelerators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#accelerators GoogleComputeNodeTemplate#accelerators}

---

##### `cpuOvercommitType`<sup>Optional</sup> <a name="cpuOvercommitType" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.cpuOvercommitType"></a>

- *Type:* java.lang.String

CPU overcommit. Default value: "NONE" Possible values: ["ENABLED", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#cpu_overcommit_type GoogleComputeNodeTemplate#cpu_overcommit_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional textual description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#description GoogleComputeNodeTemplate#description}

---

##### `disks`<sup>Optional</sup> <a name="disks" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.disks"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisks">GoogleComputeNodeTemplateDisks</a>>

disks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#disks GoogleComputeNodeTemplate#disks}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#id GoogleComputeNodeTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#name GoogleComputeNodeTemplate#name}

---

##### `nodeAffinityLabels`<sup>Optional</sup> <a name="nodeAffinityLabels" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.nodeAffinityLabels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels to use for node affinity, which will be used in instance scheduling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#node_affinity_labels GoogleComputeNodeTemplate#node_affinity_labels}

---

##### `nodeType`<sup>Optional</sup> <a name="nodeType" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.nodeType"></a>

- *Type:* java.lang.String

Node type to use for nodes group that are created from this template.

Only one of nodeTypeFlexibility and nodeType can be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#node_type GoogleComputeNodeTemplate#node_type}

---

##### `nodeTypeFlexibility`<sup>Optional</sup> <a name="nodeTypeFlexibility" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.nodeTypeFlexibility"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility">GoogleComputeNodeTemplateNodeTypeFlexibility</a>

node_type_flexibility block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#node_type_flexibility GoogleComputeNodeTemplate#node_type_flexibility}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#project GoogleComputeNodeTemplate#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where nodes using the node template will be created. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#region GoogleComputeNodeTemplate#region}

---

##### `serverBinding`<sup>Optional</sup> <a name="serverBinding" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.serverBinding"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBinding">GoogleComputeNodeTemplateServerBinding</a>

server_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#server_binding GoogleComputeNodeTemplate#server_binding}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeouts">GoogleComputeNodeTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#timeouts GoogleComputeNodeTemplate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.putAccelerators">putAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.putDisks">putDisks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.putNodeTypeFlexibility">putNodeTypeFlexibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.putServerBinding">putServerBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetAccelerators">resetAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetCpuOvercommitType">resetCpuOvercommitType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetDisks">resetDisks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetNodeAffinityLabels">resetNodeAffinityLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetNodeType">resetNodeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetNodeTypeFlexibility">resetNodeTypeFlexibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetServerBinding">resetServerBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccelerators` <a name="putAccelerators" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.putAccelerators"></a>

```java
public void putAccelerators(IResolvable OR java.util.List<GoogleComputeNodeTemplateAccelerators> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.putAccelerators.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAccelerators">GoogleComputeNodeTemplateAccelerators</a>>

---

##### `putDisks` <a name="putDisks" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.putDisks"></a>

```java
public void putDisks(IResolvable OR java.util.List<GoogleComputeNodeTemplateDisks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.putDisks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisks">GoogleComputeNodeTemplateDisks</a>>

---

##### `putNodeTypeFlexibility` <a name="putNodeTypeFlexibility" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.putNodeTypeFlexibility"></a>

```java
public void putNodeTypeFlexibility(GoogleComputeNodeTemplateNodeTypeFlexibility value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.putNodeTypeFlexibility.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility">GoogleComputeNodeTemplateNodeTypeFlexibility</a>

---

##### `putServerBinding` <a name="putServerBinding" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.putServerBinding"></a>

```java
public void putServerBinding(GoogleComputeNodeTemplateServerBinding value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.putServerBinding.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBinding">GoogleComputeNodeTemplateServerBinding</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeNodeTemplateTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeouts">GoogleComputeNodeTemplateTimeouts</a>

---

##### `resetAccelerators` <a name="resetAccelerators" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetAccelerators"></a>

```java
public void resetAccelerators()
```

##### `resetCpuOvercommitType` <a name="resetCpuOvercommitType" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetCpuOvercommitType"></a>

```java
public void resetCpuOvercommitType()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisks` <a name="resetDisks" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetDisks"></a>

```java
public void resetDisks()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetName"></a>

```java
public void resetName()
```

##### `resetNodeAffinityLabels` <a name="resetNodeAffinityLabels" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetNodeAffinityLabels"></a>

```java
public void resetNodeAffinityLabels()
```

##### `resetNodeType` <a name="resetNodeType" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetNodeType"></a>

```java
public void resetNodeType()
```

##### `resetNodeTypeFlexibility` <a name="resetNodeTypeFlexibility" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetNodeTypeFlexibility"></a>

```java
public void resetNodeTypeFlexibility()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetServerBinding` <a name="resetServerBinding" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetServerBinding"></a>

```java
public void resetServerBinding()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeNodeTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_node_template.GoogleComputeNodeTemplate;

GoogleComputeNodeTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_node_template.GoogleComputeNodeTemplate;

GoogleComputeNodeTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_node_template.GoogleComputeNodeTemplate;

GoogleComputeNodeTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_node_template.GoogleComputeNodeTemplate;

GoogleComputeNodeTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputeNodeTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleComputeNodeTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputeNodeTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputeNodeTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeNodeTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.accelerators">accelerators</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsList">GoogleComputeNodeTemplateAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.disks">disks</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksList">GoogleComputeNodeTemplateDisksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.nodeTypeFlexibility">nodeTypeFlexibility</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference">GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.serverBinding">serverBinding</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference">GoogleComputeNodeTemplateServerBindingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference">GoogleComputeNodeTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.acceleratorsInput">acceleratorsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAccelerators">GoogleComputeNodeTemplateAccelerators</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.cpuOvercommitTypeInput">cpuOvercommitTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.disksInput">disksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisks">GoogleComputeNodeTemplateDisks</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.nodeAffinityLabelsInput">nodeAffinityLabelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.nodeTypeFlexibilityInput">nodeTypeFlexibilityInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility">GoogleComputeNodeTemplateNodeTypeFlexibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.nodeTypeInput">nodeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.serverBindingInput">serverBindingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBinding">GoogleComputeNodeTemplateServerBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeouts">GoogleComputeNodeTemplateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.cpuOvercommitType">cpuOvercommitType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.nodeAffinityLabels">nodeAffinityLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accelerators`<sup>Required</sup> <a name="accelerators" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.accelerators"></a>

```java
public GoogleComputeNodeTemplateAcceleratorsList getAccelerators();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsList">GoogleComputeNodeTemplateAcceleratorsList</a>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `disks`<sup>Required</sup> <a name="disks" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.disks"></a>

```java
public GoogleComputeNodeTemplateDisksList getDisks();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksList">GoogleComputeNodeTemplateDisksList</a>

---

##### `nodeTypeFlexibility`<sup>Required</sup> <a name="nodeTypeFlexibility" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.nodeTypeFlexibility"></a>

```java
public GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference getNodeTypeFlexibility();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference">GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `serverBinding`<sup>Required</sup> <a name="serverBinding" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.serverBinding"></a>

```java
public GoogleComputeNodeTemplateServerBindingOutputReference getServerBinding();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference">GoogleComputeNodeTemplateServerBindingOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.timeouts"></a>

```java
public GoogleComputeNodeTemplateTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference">GoogleComputeNodeTemplateTimeoutsOutputReference</a>

---

##### `acceleratorsInput`<sup>Optional</sup> <a name="acceleratorsInput" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.acceleratorsInput"></a>

```java
public java.lang.Object getAcceleratorsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAccelerators">GoogleComputeNodeTemplateAccelerators</a>>

---

##### `cpuOvercommitTypeInput`<sup>Optional</sup> <a name="cpuOvercommitTypeInput" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.cpuOvercommitTypeInput"></a>

```java
public java.lang.String getCpuOvercommitTypeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disksInput`<sup>Optional</sup> <a name="disksInput" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.disksInput"></a>

```java
public java.lang.Object getDisksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisks">GoogleComputeNodeTemplateDisks</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nodeAffinityLabelsInput`<sup>Optional</sup> <a name="nodeAffinityLabelsInput" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.nodeAffinityLabelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getNodeAffinityLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nodeTypeFlexibilityInput`<sup>Optional</sup> <a name="nodeTypeFlexibilityInput" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.nodeTypeFlexibilityInput"></a>

```java
public GoogleComputeNodeTemplateNodeTypeFlexibility getNodeTypeFlexibilityInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility">GoogleComputeNodeTemplateNodeTypeFlexibility</a>

---

##### `nodeTypeInput`<sup>Optional</sup> <a name="nodeTypeInput" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.nodeTypeInput"></a>

```java
public java.lang.String getNodeTypeInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `serverBindingInput`<sup>Optional</sup> <a name="serverBindingInput" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.serverBindingInput"></a>

```java
public GoogleComputeNodeTemplateServerBinding getServerBindingInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBinding">GoogleComputeNodeTemplateServerBinding</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeouts">GoogleComputeNodeTemplateTimeouts</a>

---

##### `cpuOvercommitType`<sup>Required</sup> <a name="cpuOvercommitType" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.cpuOvercommitType"></a>

```java
public java.lang.String getCpuOvercommitType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nodeAffinityLabels`<sup>Required</sup> <a name="nodeAffinityLabels" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.nodeAffinityLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getNodeAffinityLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeNodeTemplateAccelerators <a name="GoogleComputeNodeTemplateAccelerators" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAccelerators.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_node_template.GoogleComputeNodeTemplateAccelerators;

GoogleComputeNodeTemplateAccelerators.builder()
//  .acceleratorCount(java.lang.Number)
//  .acceleratorType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAccelerators.property.acceleratorCount">acceleratorCount</a></code> | <code>java.lang.Number</code> | The number of the guest accelerator cards exposed to this node template. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAccelerators.property.acceleratorType">acceleratorType</a></code> | <code>java.lang.String</code> | Full or partial URL of the accelerator type resource to expose to this node template. |

---

##### `acceleratorCount`<sup>Optional</sup> <a name="acceleratorCount" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAccelerators.property.acceleratorCount"></a>

```java
public java.lang.Number getAcceleratorCount();
```

- *Type:* java.lang.Number

The number of the guest accelerator cards exposed to this node template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#accelerator_count GoogleComputeNodeTemplate#accelerator_count}

---

##### `acceleratorType`<sup>Optional</sup> <a name="acceleratorType" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAccelerators.property.acceleratorType"></a>

```java
public java.lang.String getAcceleratorType();
```

- *Type:* java.lang.String

Full or partial URL of the accelerator type resource to expose to this node template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#accelerator_type GoogleComputeNodeTemplate#accelerator_type}

---

### GoogleComputeNodeTemplateConfig <a name="GoogleComputeNodeTemplateConfig" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_node_template.GoogleComputeNodeTemplateConfig;

GoogleComputeNodeTemplateConfig.builder()
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
//  .accelerators(IResolvable)
//  .accelerators(java.util.List<GoogleComputeNodeTemplateAccelerators>)
//  .cpuOvercommitType(java.lang.String)
//  .description(java.lang.String)
//  .disks(IResolvable)
//  .disks(java.util.List<GoogleComputeNodeTemplateDisks>)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .nodeAffinityLabels(java.util.Map<java.lang.String, java.lang.String>)
//  .nodeType(java.lang.String)
//  .nodeTypeFlexibility(GoogleComputeNodeTemplateNodeTypeFlexibility)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .serverBinding(GoogleComputeNodeTemplateServerBinding)
//  .timeouts(GoogleComputeNodeTemplateTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.accelerators">accelerators</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAccelerators">GoogleComputeNodeTemplateAccelerators</a>></code> | accelerators block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.cpuOvercommitType">cpuOvercommitType</a></code> | <code>java.lang.String</code> | CPU overcommit. Default value: "NONE" Possible values: ["ENABLED", "NONE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional textual description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.disks">disks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisks">GoogleComputeNodeTemplateDisks</a>></code> | disks block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#id GoogleComputeNodeTemplate#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.nodeAffinityLabels">nodeAffinityLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels to use for node affinity, which will be used in instance scheduling. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | Node type to use for nodes group that are created from this template. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.nodeTypeFlexibility">nodeTypeFlexibility</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility">GoogleComputeNodeTemplateNodeTypeFlexibility</a></code> | node_type_flexibility block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#project GoogleComputeNodeTemplate#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where nodes using the node template will be created. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.serverBinding">serverBinding</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBinding">GoogleComputeNodeTemplateServerBinding</a></code> | server_binding block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeouts">GoogleComputeNodeTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accelerators`<sup>Optional</sup> <a name="accelerators" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.accelerators"></a>

```java
public java.lang.Object getAccelerators();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAccelerators">GoogleComputeNodeTemplateAccelerators</a>>

accelerators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#accelerators GoogleComputeNodeTemplate#accelerators}

---

##### `cpuOvercommitType`<sup>Optional</sup> <a name="cpuOvercommitType" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.cpuOvercommitType"></a>

```java
public java.lang.String getCpuOvercommitType();
```

- *Type:* java.lang.String

CPU overcommit. Default value: "NONE" Possible values: ["ENABLED", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#cpu_overcommit_type GoogleComputeNodeTemplate#cpu_overcommit_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional textual description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#description GoogleComputeNodeTemplate#description}

---

##### `disks`<sup>Optional</sup> <a name="disks" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.disks"></a>

```java
public java.lang.Object getDisks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisks">GoogleComputeNodeTemplateDisks</a>>

disks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#disks GoogleComputeNodeTemplate#disks}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#id GoogleComputeNodeTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#name GoogleComputeNodeTemplate#name}

---

##### `nodeAffinityLabels`<sup>Optional</sup> <a name="nodeAffinityLabels" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.nodeAffinityLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getNodeAffinityLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels to use for node affinity, which will be used in instance scheduling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#node_affinity_labels GoogleComputeNodeTemplate#node_affinity_labels}

---

##### `nodeType`<sup>Optional</sup> <a name="nodeType" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

Node type to use for nodes group that are created from this template.

Only one of nodeTypeFlexibility and nodeType can be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#node_type GoogleComputeNodeTemplate#node_type}

---

##### `nodeTypeFlexibility`<sup>Optional</sup> <a name="nodeTypeFlexibility" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.nodeTypeFlexibility"></a>

```java
public GoogleComputeNodeTemplateNodeTypeFlexibility getNodeTypeFlexibility();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility">GoogleComputeNodeTemplateNodeTypeFlexibility</a>

node_type_flexibility block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#node_type_flexibility GoogleComputeNodeTemplate#node_type_flexibility}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#project GoogleComputeNodeTemplate#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where nodes using the node template will be created. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#region GoogleComputeNodeTemplate#region}

---

##### `serverBinding`<sup>Optional</sup> <a name="serverBinding" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.serverBinding"></a>

```java
public GoogleComputeNodeTemplateServerBinding getServerBinding();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBinding">GoogleComputeNodeTemplateServerBinding</a>

server_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#server_binding GoogleComputeNodeTemplate#server_binding}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.timeouts"></a>

```java
public GoogleComputeNodeTemplateTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeouts">GoogleComputeNodeTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#timeouts GoogleComputeNodeTemplate#timeouts}

---

### GoogleComputeNodeTemplateDisks <a name="GoogleComputeNodeTemplateDisks" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_node_template.GoogleComputeNodeTemplateDisks;

GoogleComputeNodeTemplateDisks.builder()
//  .diskCount(java.lang.Number)
//  .diskSizeGb(java.lang.Number)
//  .diskType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisks.property.diskCount">diskCount</a></code> | <code>java.lang.Number</code> | Specifies the number of such disks. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisks.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | Specifies the size of the disk in base-2 GB. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisks.property.diskType">diskType</a></code> | <code>java.lang.String</code> | Specifies the desired disk type on the node. |

---

##### `diskCount`<sup>Optional</sup> <a name="diskCount" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisks.property.diskCount"></a>

```java
public java.lang.Number getDiskCount();
```

- *Type:* java.lang.Number

Specifies the number of such disks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#disk_count GoogleComputeNodeTemplate#disk_count}

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisks.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

Specifies the size of the disk in base-2 GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#disk_size_gb GoogleComputeNodeTemplate#disk_size_gb}

---

##### `diskType`<sup>Optional</sup> <a name="diskType" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisks.property.diskType"></a>

```java
public java.lang.String getDiskType();
```

- *Type:* java.lang.String

Specifies the desired disk type on the node.

This disk type must be a local storage type (e.g.: local-ssd). Note that for nodeTemplates, this should be the name of the disk type and not its URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#disk_type GoogleComputeNodeTemplate#disk_type}

---

### GoogleComputeNodeTemplateNodeTypeFlexibility <a name="GoogleComputeNodeTemplateNodeTypeFlexibility" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_node_template.GoogleComputeNodeTemplateNodeTypeFlexibility;

GoogleComputeNodeTemplateNodeTypeFlexibility.builder()
//  .cpus(java.lang.String)
//  .memory(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility.property.cpus">cpus</a></code> | <code>java.lang.String</code> | Number of virtual CPUs to use. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility.property.memory">memory</a></code> | <code>java.lang.String</code> | Physical memory available to the node, defined in MB. |

---

##### `cpus`<sup>Optional</sup> <a name="cpus" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility.property.cpus"></a>

```java
public java.lang.String getCpus();
```

- *Type:* java.lang.String

Number of virtual CPUs to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#cpus GoogleComputeNodeTemplate#cpus}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility.property.memory"></a>

```java
public java.lang.String getMemory();
```

- *Type:* java.lang.String

Physical memory available to the node, defined in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#memory GoogleComputeNodeTemplate#memory}

---

### GoogleComputeNodeTemplateServerBinding <a name="GoogleComputeNodeTemplateServerBinding" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBinding.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_node_template.GoogleComputeNodeTemplateServerBinding;

GoogleComputeNodeTemplateServerBinding.builder()
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBinding.property.type">type</a></code> | <code>java.lang.String</code> | Type of server binding policy. If 'RESTART_NODE_ON_ANY_SERVER', nodes using this template will restart on any physical server following a maintenance event. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBinding.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type of server binding policy. If 'RESTART_NODE_ON_ANY_SERVER', nodes using this template will restart on any physical server following a maintenance event.

If 'RESTART_NODE_ON_MINIMAL_SERVER', nodes using this template
will restart on the same physical server following a maintenance
event, instead of being live migrated to or restarted on a new
physical server. This option may be useful if you are using
software licenses tied to the underlying server characteristics
such as physical sockets or cores, to avoid the need for
additional licenses when maintenance occurs. However, VMs on such
nodes will experience outages while maintenance is applied. Possible values: ["RESTART_NODE_ON_ANY_SERVER", "RESTART_NODE_ON_MINIMAL_SERVERS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#type GoogleComputeNodeTemplate#type}

---

### GoogleComputeNodeTemplateTimeouts <a name="GoogleComputeNodeTemplateTimeouts" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_node_template.GoogleComputeNodeTemplateTimeouts;

GoogleComputeNodeTemplateTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#create GoogleComputeNodeTemplate#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#delete GoogleComputeNodeTemplate#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#create GoogleComputeNodeTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_template#delete GoogleComputeNodeTemplate#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeNodeTemplateAcceleratorsList <a name="GoogleComputeNodeTemplateAcceleratorsList" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_node_template.GoogleComputeNodeTemplateAcceleratorsList;

new GoogleComputeNodeTemplateAcceleratorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsList.get"></a>

```java
public GoogleComputeNodeTemplateAcceleratorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAccelerators">GoogleComputeNodeTemplateAccelerators</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAccelerators">GoogleComputeNodeTemplateAccelerators</a>>

---


### GoogleComputeNodeTemplateAcceleratorsOutputReference <a name="GoogleComputeNodeTemplateAcceleratorsOutputReference" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_node_template.GoogleComputeNodeTemplateAcceleratorsOutputReference;

new GoogleComputeNodeTemplateAcceleratorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.resetAcceleratorCount">resetAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.resetAcceleratorType">resetAcceleratorType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAcceleratorCount` <a name="resetAcceleratorCount" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.resetAcceleratorCount"></a>

```java
public void resetAcceleratorCount()
```

##### `resetAcceleratorType` <a name="resetAcceleratorType" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.resetAcceleratorType"></a>

```java
public void resetAcceleratorType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.property.acceleratorCountInput">acceleratorCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.property.acceleratorTypeInput">acceleratorTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.property.acceleratorCount">acceleratorCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.property.acceleratorType">acceleratorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAccelerators">GoogleComputeNodeTemplateAccelerators</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acceleratorCountInput`<sup>Optional</sup> <a name="acceleratorCountInput" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.property.acceleratorCountInput"></a>

```java
public java.lang.Number getAcceleratorCountInput();
```

- *Type:* java.lang.Number

---

##### `acceleratorTypeInput`<sup>Optional</sup> <a name="acceleratorTypeInput" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.property.acceleratorTypeInput"></a>

```java
public java.lang.String getAcceleratorTypeInput();
```

- *Type:* java.lang.String

---

##### `acceleratorCount`<sup>Required</sup> <a name="acceleratorCount" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.property.acceleratorCount"></a>

```java
public java.lang.Number getAcceleratorCount();
```

- *Type:* java.lang.Number

---

##### `acceleratorType`<sup>Required</sup> <a name="acceleratorType" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.property.acceleratorType"></a>

```java
public java.lang.String getAcceleratorType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAcceleratorsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateAccelerators">GoogleComputeNodeTemplateAccelerators</a>

---


### GoogleComputeNodeTemplateDisksList <a name="GoogleComputeNodeTemplateDisksList" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_node_template.GoogleComputeNodeTemplateDisksList;

new GoogleComputeNodeTemplateDisksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksList.get"></a>

```java
public GoogleComputeNodeTemplateDisksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisks">GoogleComputeNodeTemplateDisks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisks">GoogleComputeNodeTemplateDisks</a>>

---


### GoogleComputeNodeTemplateDisksOutputReference <a name="GoogleComputeNodeTemplateDisksOutputReference" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_node_template.GoogleComputeNodeTemplateDisksOutputReference;

new GoogleComputeNodeTemplateDisksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.resetDiskCount">resetDiskCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.resetDiskType">resetDiskType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiskCount` <a name="resetDiskCount" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.resetDiskCount"></a>

```java
public void resetDiskCount()
```

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.resetDiskSizeGb"></a>

```java
public void resetDiskSizeGb()
```

##### `resetDiskType` <a name="resetDiskType" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.resetDiskType"></a>

```java
public void resetDiskType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.property.diskCountInput">diskCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.property.diskTypeInput">diskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.property.diskCount">diskCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.property.diskType">diskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisks">GoogleComputeNodeTemplateDisks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diskCountInput`<sup>Optional</sup> <a name="diskCountInput" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.property.diskCountInput"></a>

```java
public java.lang.Number getDiskCountInput();
```

- *Type:* java.lang.Number

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.property.diskSizeGbInput"></a>

```java
public java.lang.Number getDiskSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `diskTypeInput`<sup>Optional</sup> <a name="diskTypeInput" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.property.diskTypeInput"></a>

```java
public java.lang.String getDiskTypeInput();
```

- *Type:* java.lang.String

---

##### `diskCount`<sup>Required</sup> <a name="diskCount" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.property.diskCount"></a>

```java
public java.lang.Number getDiskCount();
```

- *Type:* java.lang.Number

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.property.diskType"></a>

```java
public java.lang.String getDiskType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateDisks">GoogleComputeNodeTemplateDisks</a>

---


### GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference <a name="GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_node_template.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference;

new GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.resetCpus">resetCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.resetMemory">resetMemory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpus` <a name="resetCpus" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.resetCpus"></a>

```java
public void resetCpus()
```

##### `resetMemory` <a name="resetMemory" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.resetMemory"></a>

```java
public void resetMemory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.localSsd">localSsd</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.cpusInput">cpusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.memoryInput">memoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.cpus">cpus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.memory">memory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility">GoogleComputeNodeTemplateNodeTypeFlexibility</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `localSsd`<sup>Required</sup> <a name="localSsd" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.localSsd"></a>

```java
public java.lang.String getLocalSsd();
```

- *Type:* java.lang.String

---

##### `cpusInput`<sup>Optional</sup> <a name="cpusInput" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.cpusInput"></a>

```java
public java.lang.String getCpusInput();
```

- *Type:* java.lang.String

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.memoryInput"></a>

```java
public java.lang.String getMemoryInput();
```

- *Type:* java.lang.String

---

##### `cpus`<sup>Required</sup> <a name="cpus" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.cpus"></a>

```java
public java.lang.String getCpus();
```

- *Type:* java.lang.String

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.memory"></a>

```java
public java.lang.String getMemory();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.internalValue"></a>

```java
public GoogleComputeNodeTemplateNodeTypeFlexibility getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility">GoogleComputeNodeTemplateNodeTypeFlexibility</a>

---


### GoogleComputeNodeTemplateServerBindingOutputReference <a name="GoogleComputeNodeTemplateServerBindingOutputReference" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_node_template.GoogleComputeNodeTemplateServerBindingOutputReference;

new GoogleComputeNodeTemplateServerBindingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBinding">GoogleComputeNodeTemplateServerBinding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.property.internalValue"></a>

```java
public GoogleComputeNodeTemplateServerBinding getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBinding">GoogleComputeNodeTemplateServerBinding</a>

---


### GoogleComputeNodeTemplateTimeoutsOutputReference <a name="GoogleComputeNodeTemplateTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_node_template.GoogleComputeNodeTemplateTimeoutsOutputReference;

new GoogleComputeNodeTemplateTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeouts">GoogleComputeNodeTemplateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeouts">GoogleComputeNodeTemplateTimeouts</a>

---



