# `googleGkeonpremVmwareCluster` Submodule <a name="`googleGkeonpremVmwareCluster` Submodule" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGkeonpremVmwareCluster <a name="GoogleGkeonpremVmwareCluster" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster google_gkeonprem_vmware_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareCluster;

GoogleGkeonpremVmwareCluster.Builder.create(Construct scope, java.lang.String id)
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
    .adminClusterMembership(java.lang.String)
    .controlPlaneNode(GoogleGkeonpremVmwareClusterControlPlaneNode)
    .location(java.lang.String)
    .name(java.lang.String)
    .onPremVersion(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .antiAffinityGroups(GoogleGkeonpremVmwareClusterAntiAffinityGroups)
//  .authorization(GoogleGkeonpremVmwareClusterAuthorization)
//  .autoRepairConfig(GoogleGkeonpremVmwareClusterAutoRepairConfig)
//  .dataplaneV2(GoogleGkeonpremVmwareClusterDataplaneV2)
//  .description(java.lang.String)
//  .disableBundledIngress(java.lang.Boolean)
//  .disableBundledIngress(IResolvable)
//  .enableControlPlaneV2(java.lang.Boolean)
//  .enableControlPlaneV2(IResolvable)
//  .id(java.lang.String)
//  .loadBalancer(GoogleGkeonpremVmwareClusterLoadBalancer)
//  .networkConfig(GoogleGkeonpremVmwareClusterNetworkConfig)
//  .project(java.lang.String)
//  .storage(GoogleGkeonpremVmwareClusterStorage)
//  .timeouts(GoogleGkeonpremVmwareClusterTimeouts)
//  .upgradePolicy(GoogleGkeonpremVmwareClusterUpgradePolicy)
//  .vcenter(GoogleGkeonpremVmwareClusterVcenter)
//  .vmTrackingEnabled(java.lang.Boolean)
//  .vmTrackingEnabled(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.adminClusterMembership">adminClusterMembership</a></code> | <code>java.lang.String</code> | The admin cluster this VMware User Cluster belongs to. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.controlPlaneNode">controlPlaneNode</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode">GoogleGkeonpremVmwareClusterControlPlaneNode</a></code> | control_plane_node block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The VMware cluster name. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.onPremVersion">onPremVersion</a></code> | <code>java.lang.String</code> | The Anthos clusters on the VMware version for your user cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Annotations on the VMware User Cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.antiAffinityGroups">antiAffinityGroups</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroups">GoogleGkeonpremVmwareClusterAntiAffinityGroups</a></code> | anti_affinity_groups block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorization">GoogleGkeonpremVmwareClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.autoRepairConfig">autoRepairConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfig">GoogleGkeonpremVmwareClusterAutoRepairConfig</a></code> | auto_repair_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.dataplaneV2">dataplaneV2</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2">GoogleGkeonpremVmwareClusterDataplaneV2</a></code> | dataplane_v2 block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A human readable description of this VMware User Cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.disableBundledIngress">disableBundledIngress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disable bundled ingress. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.enableControlPlaneV2">enableControlPlaneV2</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable control plane V2. Default to false. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#id GoogleGkeonpremVmwareCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.loadBalancer">loadBalancer</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer">GoogleGkeonpremVmwareClusterLoadBalancer</a></code> | load_balancer block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig">GoogleGkeonpremVmwareClusterNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#project GoogleGkeonpremVmwareCluster#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.storage">storage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorage">GoogleGkeonpremVmwareClusterStorage</a></code> | storage block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts">GoogleGkeonpremVmwareClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.upgradePolicy">upgradePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicy">GoogleGkeonpremVmwareClusterUpgradePolicy</a></code> | upgrade_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.vcenter">vcenter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter">GoogleGkeonpremVmwareClusterVcenter</a></code> | vcenter block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.vmTrackingEnabled">vmTrackingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable VM tracking. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `adminClusterMembership`<sup>Required</sup> <a name="adminClusterMembership" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.adminClusterMembership"></a>

- *Type:* java.lang.String

The admin cluster this VMware User Cluster belongs to.

This is the full resource name of the admin cluster's hub membership.
In the future, references to other resource types might be allowed if
admin clusters are modeled as their own resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#admin_cluster_membership GoogleGkeonpremVmwareCluster#admin_cluster_membership}

---

##### `controlPlaneNode`<sup>Required</sup> <a name="controlPlaneNode" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.controlPlaneNode"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode">GoogleGkeonpremVmwareClusterControlPlaneNode</a>

control_plane_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#control_plane_node GoogleGkeonpremVmwareCluster#control_plane_node}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#location GoogleGkeonpremVmwareCluster#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The VMware cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#name GoogleGkeonpremVmwareCluster#name}

---

##### `onPremVersion`<sup>Required</sup> <a name="onPremVersion" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.onPremVersion"></a>

- *Type:* java.lang.String

The Anthos clusters on the VMware version for your user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#on_prem_version GoogleGkeonpremVmwareCluster#on_prem_version}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Annotations on the VMware User Cluster.

This field has the same restrictions as Kubernetes annotations.
The total size of all keys and values combined is limited to 256k.
Key can have 2 segments: prefix (optional) and name (required),
separated by a slash (/).
Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#annotations GoogleGkeonpremVmwareCluster#annotations}

---

##### `antiAffinityGroups`<sup>Optional</sup> <a name="antiAffinityGroups" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.antiAffinityGroups"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroups">GoogleGkeonpremVmwareClusterAntiAffinityGroups</a>

anti_affinity_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#anti_affinity_groups GoogleGkeonpremVmwareCluster#anti_affinity_groups}

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.authorization"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorization">GoogleGkeonpremVmwareClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#authorization GoogleGkeonpremVmwareCluster#authorization}

---

##### `autoRepairConfig`<sup>Optional</sup> <a name="autoRepairConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.autoRepairConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfig">GoogleGkeonpremVmwareClusterAutoRepairConfig</a>

auto_repair_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#auto_repair_config GoogleGkeonpremVmwareCluster#auto_repair_config}

---

##### `dataplaneV2`<sup>Optional</sup> <a name="dataplaneV2" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.dataplaneV2"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2">GoogleGkeonpremVmwareClusterDataplaneV2</a>

dataplane_v2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#dataplane_v2 GoogleGkeonpremVmwareCluster#dataplane_v2}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A human readable description of this VMware User Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#description GoogleGkeonpremVmwareCluster#description}

---

##### `disableBundledIngress`<sup>Optional</sup> <a name="disableBundledIngress" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.disableBundledIngress"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disable bundled ingress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#disable_bundled_ingress GoogleGkeonpremVmwareCluster#disable_bundled_ingress}

---

##### `enableControlPlaneV2`<sup>Optional</sup> <a name="enableControlPlaneV2" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.enableControlPlaneV2"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable control plane V2. Default to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#enable_control_plane_v2 GoogleGkeonpremVmwareCluster#enable_control_plane_v2}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#id GoogleGkeonpremVmwareCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loadBalancer`<sup>Optional</sup> <a name="loadBalancer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.loadBalancer"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer">GoogleGkeonpremVmwareClusterLoadBalancer</a>

load_balancer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#load_balancer GoogleGkeonpremVmwareCluster#load_balancer}

---

##### `networkConfig`<sup>Optional</sup> <a name="networkConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.networkConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig">GoogleGkeonpremVmwareClusterNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#network_config GoogleGkeonpremVmwareCluster#network_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#project GoogleGkeonpremVmwareCluster#project}.

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.storage"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorage">GoogleGkeonpremVmwareClusterStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#storage GoogleGkeonpremVmwareCluster#storage}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts">GoogleGkeonpremVmwareClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#timeouts GoogleGkeonpremVmwareCluster#timeouts}

---

##### `upgradePolicy`<sup>Optional</sup> <a name="upgradePolicy" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.upgradePolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicy">GoogleGkeonpremVmwareClusterUpgradePolicy</a>

upgrade_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#upgrade_policy GoogleGkeonpremVmwareCluster#upgrade_policy}

---

##### `vcenter`<sup>Optional</sup> <a name="vcenter" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.vcenter"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter">GoogleGkeonpremVmwareClusterVcenter</a>

vcenter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#vcenter GoogleGkeonpremVmwareCluster#vcenter}

---

##### `vmTrackingEnabled`<sup>Optional</sup> <a name="vmTrackingEnabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.vmTrackingEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable VM tracking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#vm_tracking_enabled GoogleGkeonpremVmwareCluster#vm_tracking_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putAntiAffinityGroups">putAntiAffinityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putAuthorization">putAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putAutoRepairConfig">putAutoRepairConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putControlPlaneNode">putControlPlaneNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putDataplaneV2">putDataplaneV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putLoadBalancer">putLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putNetworkConfig">putNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putStorage">putStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putUpgradePolicy">putUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putVcenter">putVcenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetAntiAffinityGroups">resetAntiAffinityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetAutoRepairConfig">resetAutoRepairConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetDataplaneV2">resetDataplaneV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetDisableBundledIngress">resetDisableBundledIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetEnableControlPlaneV2">resetEnableControlPlaneV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetLoadBalancer">resetLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetNetworkConfig">resetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetStorage">resetStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetUpgradePolicy">resetUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetVcenter">resetVcenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetVmTrackingEnabled">resetVmTrackingEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAntiAffinityGroups` <a name="putAntiAffinityGroups" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putAntiAffinityGroups"></a>

```java
public void putAntiAffinityGroups(GoogleGkeonpremVmwareClusterAntiAffinityGroups value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putAntiAffinityGroups.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroups">GoogleGkeonpremVmwareClusterAntiAffinityGroups</a>

---

##### `putAuthorization` <a name="putAuthorization" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putAuthorization"></a>

```java
public void putAuthorization(GoogleGkeonpremVmwareClusterAuthorization value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorization">GoogleGkeonpremVmwareClusterAuthorization</a>

---

##### `putAutoRepairConfig` <a name="putAutoRepairConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putAutoRepairConfig"></a>

```java
public void putAutoRepairConfig(GoogleGkeonpremVmwareClusterAutoRepairConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putAutoRepairConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfig">GoogleGkeonpremVmwareClusterAutoRepairConfig</a>

---

##### `putControlPlaneNode` <a name="putControlPlaneNode" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putControlPlaneNode"></a>

```java
public void putControlPlaneNode(GoogleGkeonpremVmwareClusterControlPlaneNode value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putControlPlaneNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode">GoogleGkeonpremVmwareClusterControlPlaneNode</a>

---

##### `putDataplaneV2` <a name="putDataplaneV2" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putDataplaneV2"></a>

```java
public void putDataplaneV2(GoogleGkeonpremVmwareClusterDataplaneV2 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putDataplaneV2.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2">GoogleGkeonpremVmwareClusterDataplaneV2</a>

---

##### `putLoadBalancer` <a name="putLoadBalancer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putLoadBalancer"></a>

```java
public void putLoadBalancer(GoogleGkeonpremVmwareClusterLoadBalancer value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putLoadBalancer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer">GoogleGkeonpremVmwareClusterLoadBalancer</a>

---

##### `putNetworkConfig` <a name="putNetworkConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putNetworkConfig"></a>

```java
public void putNetworkConfig(GoogleGkeonpremVmwareClusterNetworkConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig">GoogleGkeonpremVmwareClusterNetworkConfig</a>

---

##### `putStorage` <a name="putStorage" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putStorage"></a>

```java
public void putStorage(GoogleGkeonpremVmwareClusterStorage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorage">GoogleGkeonpremVmwareClusterStorage</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putTimeouts"></a>

```java
public void putTimeouts(GoogleGkeonpremVmwareClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts">GoogleGkeonpremVmwareClusterTimeouts</a>

---

##### `putUpgradePolicy` <a name="putUpgradePolicy" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putUpgradePolicy"></a>

```java
public void putUpgradePolicy(GoogleGkeonpremVmwareClusterUpgradePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putUpgradePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicy">GoogleGkeonpremVmwareClusterUpgradePolicy</a>

---

##### `putVcenter` <a name="putVcenter" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putVcenter"></a>

```java
public void putVcenter(GoogleGkeonpremVmwareClusterVcenter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putVcenter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter">GoogleGkeonpremVmwareClusterVcenter</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetAntiAffinityGroups` <a name="resetAntiAffinityGroups" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetAntiAffinityGroups"></a>

```java
public void resetAntiAffinityGroups()
```

##### `resetAuthorization` <a name="resetAuthorization" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetAuthorization"></a>

```java
public void resetAuthorization()
```

##### `resetAutoRepairConfig` <a name="resetAutoRepairConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetAutoRepairConfig"></a>

```java
public void resetAutoRepairConfig()
```

##### `resetDataplaneV2` <a name="resetDataplaneV2" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetDataplaneV2"></a>

```java
public void resetDataplaneV2()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisableBundledIngress` <a name="resetDisableBundledIngress" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetDisableBundledIngress"></a>

```java
public void resetDisableBundledIngress()
```

##### `resetEnableControlPlaneV2` <a name="resetEnableControlPlaneV2" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetEnableControlPlaneV2"></a>

```java
public void resetEnableControlPlaneV2()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetId"></a>

```java
public void resetId()
```

##### `resetLoadBalancer` <a name="resetLoadBalancer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetLoadBalancer"></a>

```java
public void resetLoadBalancer()
```

##### `resetNetworkConfig` <a name="resetNetworkConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetNetworkConfig"></a>

```java
public void resetNetworkConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetProject"></a>

```java
public void resetProject()
```

##### `resetStorage` <a name="resetStorage" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetStorage"></a>

```java
public void resetStorage()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUpgradePolicy` <a name="resetUpgradePolicy" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetUpgradePolicy"></a>

```java
public void resetUpgradePolicy()
```

##### `resetVcenter` <a name="resetVcenter" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetVcenter"></a>

```java
public void resetVcenter()
```

##### `resetVmTrackingEnabled` <a name="resetVmTrackingEnabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetVmTrackingEnabled"></a>

```java
public void resetVmTrackingEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleGkeonpremVmwareCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareCluster;

GoogleGkeonpremVmwareCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareCluster;

GoogleGkeonpremVmwareCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareCluster;

GoogleGkeonpremVmwareCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareCluster;

GoogleGkeonpremVmwareCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleGkeonpremVmwareCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleGkeonpremVmwareCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleGkeonpremVmwareCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleGkeonpremVmwareCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleGkeonpremVmwareCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.antiAffinityGroups">antiAffinityGroups</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference">GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference">GoogleGkeonpremVmwareClusterAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.autoRepairConfig">autoRepairConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference">GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.controlPlaneNode">controlPlaneNode</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference">GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.dataplaneV2">dataplaneV2</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference">GoogleGkeonpremVmwareClusterDataplaneV2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.deleteTime">deleteTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList">GoogleGkeonpremVmwareClusterFleetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.loadBalancer">loadBalancer</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference">GoogleGkeonpremVmwareClusterLoadBalancerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.localName">localName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference">GoogleGkeonpremVmwareClusterNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.reconciling">reconciling</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.status">status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList">GoogleGkeonpremVmwareClusterStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference">GoogleGkeonpremVmwareClusterStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference">GoogleGkeonpremVmwareClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.upgradePolicy">upgradePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference">GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.validationCheck">validationCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList">GoogleGkeonpremVmwareClusterValidationCheckList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.vcenter">vcenter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference">GoogleGkeonpremVmwareClusterVcenterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.adminClusterMembershipInput">adminClusterMembershipInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.antiAffinityGroupsInput">antiAffinityGroupsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroups">GoogleGkeonpremVmwareClusterAntiAffinityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.authorizationInput">authorizationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorization">GoogleGkeonpremVmwareClusterAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.autoRepairConfigInput">autoRepairConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfig">GoogleGkeonpremVmwareClusterAutoRepairConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.controlPlaneNodeInput">controlPlaneNodeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode">GoogleGkeonpremVmwareClusterControlPlaneNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.dataplaneV2Input">dataplaneV2Input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2">GoogleGkeonpremVmwareClusterDataplaneV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.disableBundledIngressInput">disableBundledIngressInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.enableControlPlaneV2Input">enableControlPlaneV2Input</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.loadBalancerInput">loadBalancerInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer">GoogleGkeonpremVmwareClusterLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.networkConfigInput">networkConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig">GoogleGkeonpremVmwareClusterNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.onPremVersionInput">onPremVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.storageInput">storageInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorage">GoogleGkeonpremVmwareClusterStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts">GoogleGkeonpremVmwareClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.upgradePolicyInput">upgradePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicy">GoogleGkeonpremVmwareClusterUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.vcenterInput">vcenterInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter">GoogleGkeonpremVmwareClusterVcenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.vmTrackingEnabledInput">vmTrackingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.adminClusterMembership">adminClusterMembership</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.disableBundledIngress">disableBundledIngress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.enableControlPlaneV2">enableControlPlaneV2</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.onPremVersion">onPremVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.vmTrackingEnabled">vmTrackingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `antiAffinityGroups`<sup>Required</sup> <a name="antiAffinityGroups" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.antiAffinityGroups"></a>

```java
public GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference getAntiAffinityGroups();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference">GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference</a>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.authorization"></a>

```java
public GoogleGkeonpremVmwareClusterAuthorizationOutputReference getAuthorization();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference">GoogleGkeonpremVmwareClusterAuthorizationOutputReference</a>

---

##### `autoRepairConfig`<sup>Required</sup> <a name="autoRepairConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.autoRepairConfig"></a>

```java
public GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference getAutoRepairConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference">GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference</a>

---

##### `controlPlaneNode`<sup>Required</sup> <a name="controlPlaneNode" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.controlPlaneNode"></a>

```java
public GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference getControlPlaneNode();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference">GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `dataplaneV2`<sup>Required</sup> <a name="dataplaneV2" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.dataplaneV2"></a>

```java
public GoogleGkeonpremVmwareClusterDataplaneV2OutputReference getDataplaneV2();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference">GoogleGkeonpremVmwareClusterDataplaneV2OutputReference</a>

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.deleteTime"></a>

```java
public java.lang.String getDeleteTime();
```

- *Type:* java.lang.String

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.fleet"></a>

```java
public GoogleGkeonpremVmwareClusterFleetList getFleet();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList">GoogleGkeonpremVmwareClusterFleetList</a>

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.loadBalancer"></a>

```java
public GoogleGkeonpremVmwareClusterLoadBalancerOutputReference getLoadBalancer();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference">GoogleGkeonpremVmwareClusterLoadBalancerOutputReference</a>

---

##### `localName`<sup>Required</sup> <a name="localName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.localName"></a>

```java
public java.lang.String getLocalName();
```

- *Type:* java.lang.String

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.networkConfig"></a>

```java
public GoogleGkeonpremVmwareClusterNetworkConfigOutputReference getNetworkConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference">GoogleGkeonpremVmwareClusterNetworkConfigOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.reconciling"></a>

```java
public IResolvable getReconciling();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.status"></a>

```java
public GoogleGkeonpremVmwareClusterStatusList getStatus();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList">GoogleGkeonpremVmwareClusterStatusList</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.storage"></a>

```java
public GoogleGkeonpremVmwareClusterStorageOutputReference getStorage();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference">GoogleGkeonpremVmwareClusterStorageOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.timeouts"></a>

```java
public GoogleGkeonpremVmwareClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference">GoogleGkeonpremVmwareClusterTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `upgradePolicy`<sup>Required</sup> <a name="upgradePolicy" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.upgradePolicy"></a>

```java
public GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference getUpgradePolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference">GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference</a>

---

##### `validationCheck`<sup>Required</sup> <a name="validationCheck" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.validationCheck"></a>

```java
public GoogleGkeonpremVmwareClusterValidationCheckList getValidationCheck();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList">GoogleGkeonpremVmwareClusterValidationCheckList</a>

---

##### `vcenter`<sup>Required</sup> <a name="vcenter" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.vcenter"></a>

```java
public GoogleGkeonpremVmwareClusterVcenterOutputReference getVcenter();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference">GoogleGkeonpremVmwareClusterVcenterOutputReference</a>

---

##### `adminClusterMembershipInput`<sup>Optional</sup> <a name="adminClusterMembershipInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.adminClusterMembershipInput"></a>

```java
public java.lang.String getAdminClusterMembershipInput();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `antiAffinityGroupsInput`<sup>Optional</sup> <a name="antiAffinityGroupsInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.antiAffinityGroupsInput"></a>

```java
public GoogleGkeonpremVmwareClusterAntiAffinityGroups getAntiAffinityGroupsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroups">GoogleGkeonpremVmwareClusterAntiAffinityGroups</a>

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.authorizationInput"></a>

```java
public GoogleGkeonpremVmwareClusterAuthorization getAuthorizationInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorization">GoogleGkeonpremVmwareClusterAuthorization</a>

---

##### `autoRepairConfigInput`<sup>Optional</sup> <a name="autoRepairConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.autoRepairConfigInput"></a>

```java
public GoogleGkeonpremVmwareClusterAutoRepairConfig getAutoRepairConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfig">GoogleGkeonpremVmwareClusterAutoRepairConfig</a>

---

##### `controlPlaneNodeInput`<sup>Optional</sup> <a name="controlPlaneNodeInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.controlPlaneNodeInput"></a>

```java
public GoogleGkeonpremVmwareClusterControlPlaneNode getControlPlaneNodeInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode">GoogleGkeonpremVmwareClusterControlPlaneNode</a>

---

##### `dataplaneV2Input`<sup>Optional</sup> <a name="dataplaneV2Input" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.dataplaneV2Input"></a>

```java
public GoogleGkeonpremVmwareClusterDataplaneV2 getDataplaneV2Input();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2">GoogleGkeonpremVmwareClusterDataplaneV2</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disableBundledIngressInput`<sup>Optional</sup> <a name="disableBundledIngressInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.disableBundledIngressInput"></a>

```java
public java.lang.Object getDisableBundledIngressInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableControlPlaneV2Input`<sup>Optional</sup> <a name="enableControlPlaneV2Input" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.enableControlPlaneV2Input"></a>

```java
public java.lang.Object getEnableControlPlaneV2Input();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `loadBalancerInput`<sup>Optional</sup> <a name="loadBalancerInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.loadBalancerInput"></a>

```java
public GoogleGkeonpremVmwareClusterLoadBalancer getLoadBalancerInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer">GoogleGkeonpremVmwareClusterLoadBalancer</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkConfigInput`<sup>Optional</sup> <a name="networkConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.networkConfigInput"></a>

```java
public GoogleGkeonpremVmwareClusterNetworkConfig getNetworkConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig">GoogleGkeonpremVmwareClusterNetworkConfig</a>

---

##### `onPremVersionInput`<sup>Optional</sup> <a name="onPremVersionInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.onPremVersionInput"></a>

```java
public java.lang.String getOnPremVersionInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `storageInput`<sup>Optional</sup> <a name="storageInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.storageInput"></a>

```java
public GoogleGkeonpremVmwareClusterStorage getStorageInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorage">GoogleGkeonpremVmwareClusterStorage</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts">GoogleGkeonpremVmwareClusterTimeouts</a>

---

##### `upgradePolicyInput`<sup>Optional</sup> <a name="upgradePolicyInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.upgradePolicyInput"></a>

```java
public GoogleGkeonpremVmwareClusterUpgradePolicy getUpgradePolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicy">GoogleGkeonpremVmwareClusterUpgradePolicy</a>

---

##### `vcenterInput`<sup>Optional</sup> <a name="vcenterInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.vcenterInput"></a>

```java
public GoogleGkeonpremVmwareClusterVcenter getVcenterInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter">GoogleGkeonpremVmwareClusterVcenter</a>

---

##### `vmTrackingEnabledInput`<sup>Optional</sup> <a name="vmTrackingEnabledInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.vmTrackingEnabledInput"></a>

```java
public java.lang.Object getVmTrackingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `adminClusterMembership`<sup>Required</sup> <a name="adminClusterMembership" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.adminClusterMembership"></a>

```java
public java.lang.String getAdminClusterMembership();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disableBundledIngress`<sup>Required</sup> <a name="disableBundledIngress" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.disableBundledIngress"></a>

```java
public java.lang.Object getDisableBundledIngress();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableControlPlaneV2`<sup>Required</sup> <a name="enableControlPlaneV2" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.enableControlPlaneV2"></a>

```java
public java.lang.Object getEnableControlPlaneV2();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `onPremVersion`<sup>Required</sup> <a name="onPremVersion" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.onPremVersion"></a>

```java
public java.lang.String getOnPremVersion();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `vmTrackingEnabled`<sup>Required</sup> <a name="vmTrackingEnabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.vmTrackingEnabled"></a>

```java
public java.lang.Object getVmTrackingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGkeonpremVmwareClusterAntiAffinityGroups <a name="GoogleGkeonpremVmwareClusterAntiAffinityGroups" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterAntiAffinityGroups;

GoogleGkeonpremVmwareClusterAntiAffinityGroups.builder()
    .aagConfigDisabled(java.lang.Boolean)
    .aagConfigDisabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroups.property.aagConfigDisabled">aagConfigDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Spread nodes across at least three physical hosts (requires at least three hosts). Enabled by default. |

---

##### `aagConfigDisabled`<sup>Required</sup> <a name="aagConfigDisabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroups.property.aagConfigDisabled"></a>

```java
public java.lang.Object getAagConfigDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Spread nodes across at least three physical hosts (requires at least three hosts). Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#aag_config_disabled GoogleGkeonpremVmwareCluster#aag_config_disabled}

---

### GoogleGkeonpremVmwareClusterAuthorization <a name="GoogleGkeonpremVmwareClusterAuthorization" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorization.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterAuthorization;

GoogleGkeonpremVmwareClusterAuthorization.builder()
//  .adminUsers(IResolvable)
//  .adminUsers(java.util.List<GoogleGkeonpremVmwareClusterAuthorizationAdminUsers>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorization.property.adminUsers">adminUsers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsers">GoogleGkeonpremVmwareClusterAuthorizationAdminUsers</a>></code> | admin_users block. |

---

##### `adminUsers`<sup>Optional</sup> <a name="adminUsers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorization.property.adminUsers"></a>

```java
public java.lang.Object getAdminUsers();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsers">GoogleGkeonpremVmwareClusterAuthorizationAdminUsers</a>>

admin_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#admin_users GoogleGkeonpremVmwareCluster#admin_users}

---

### GoogleGkeonpremVmwareClusterAuthorizationAdminUsers <a name="GoogleGkeonpremVmwareClusterAuthorizationAdminUsers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsers;

GoogleGkeonpremVmwareClusterAuthorizationAdminUsers.builder()
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsers.property.username">username</a></code> | <code>java.lang.String</code> | The name of the user, e.g. 'my-gcp-id@gmail.com'. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsers.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The name of the user, e.g. 'my-gcp-id@gmail.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#username GoogleGkeonpremVmwareCluster#username}

---

### GoogleGkeonpremVmwareClusterAutoRepairConfig <a name="GoogleGkeonpremVmwareClusterAutoRepairConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterAutoRepairConfig;

GoogleGkeonpremVmwareClusterAutoRepairConfig.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether auto repair is enabled. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether auto repair is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#enabled GoogleGkeonpremVmwareCluster#enabled}

---

### GoogleGkeonpremVmwareClusterConfig <a name="GoogleGkeonpremVmwareClusterConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterConfig;

GoogleGkeonpremVmwareClusterConfig.builder()
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
    .adminClusterMembership(java.lang.String)
    .controlPlaneNode(GoogleGkeonpremVmwareClusterControlPlaneNode)
    .location(java.lang.String)
    .name(java.lang.String)
    .onPremVersion(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .antiAffinityGroups(GoogleGkeonpremVmwareClusterAntiAffinityGroups)
//  .authorization(GoogleGkeonpremVmwareClusterAuthorization)
//  .autoRepairConfig(GoogleGkeonpremVmwareClusterAutoRepairConfig)
//  .dataplaneV2(GoogleGkeonpremVmwareClusterDataplaneV2)
//  .description(java.lang.String)
//  .disableBundledIngress(java.lang.Boolean)
//  .disableBundledIngress(IResolvable)
//  .enableControlPlaneV2(java.lang.Boolean)
//  .enableControlPlaneV2(IResolvable)
//  .id(java.lang.String)
//  .loadBalancer(GoogleGkeonpremVmwareClusterLoadBalancer)
//  .networkConfig(GoogleGkeonpremVmwareClusterNetworkConfig)
//  .project(java.lang.String)
//  .storage(GoogleGkeonpremVmwareClusterStorage)
//  .timeouts(GoogleGkeonpremVmwareClusterTimeouts)
//  .upgradePolicy(GoogleGkeonpremVmwareClusterUpgradePolicy)
//  .vcenter(GoogleGkeonpremVmwareClusterVcenter)
//  .vmTrackingEnabled(java.lang.Boolean)
//  .vmTrackingEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.adminClusterMembership">adminClusterMembership</a></code> | <code>java.lang.String</code> | The admin cluster this VMware User Cluster belongs to. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.controlPlaneNode">controlPlaneNode</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode">GoogleGkeonpremVmwareClusterControlPlaneNode</a></code> | control_plane_node block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.name">name</a></code> | <code>java.lang.String</code> | The VMware cluster name. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.onPremVersion">onPremVersion</a></code> | <code>java.lang.String</code> | The Anthos clusters on the VMware version for your user cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Annotations on the VMware User Cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.antiAffinityGroups">antiAffinityGroups</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroups">GoogleGkeonpremVmwareClusterAntiAffinityGroups</a></code> | anti_affinity_groups block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorization">GoogleGkeonpremVmwareClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.autoRepairConfig">autoRepairConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfig">GoogleGkeonpremVmwareClusterAutoRepairConfig</a></code> | auto_repair_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.dataplaneV2">dataplaneV2</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2">GoogleGkeonpremVmwareClusterDataplaneV2</a></code> | dataplane_v2 block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.description">description</a></code> | <code>java.lang.String</code> | A human readable description of this VMware User Cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.disableBundledIngress">disableBundledIngress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disable bundled ingress. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.enableControlPlaneV2">enableControlPlaneV2</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable control plane V2. Default to false. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#id GoogleGkeonpremVmwareCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.loadBalancer">loadBalancer</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer">GoogleGkeonpremVmwareClusterLoadBalancer</a></code> | load_balancer block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig">GoogleGkeonpremVmwareClusterNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#project GoogleGkeonpremVmwareCluster#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorage">GoogleGkeonpremVmwareClusterStorage</a></code> | storage block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts">GoogleGkeonpremVmwareClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.upgradePolicy">upgradePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicy">GoogleGkeonpremVmwareClusterUpgradePolicy</a></code> | upgrade_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.vcenter">vcenter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter">GoogleGkeonpremVmwareClusterVcenter</a></code> | vcenter block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.vmTrackingEnabled">vmTrackingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable VM tracking. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `adminClusterMembership`<sup>Required</sup> <a name="adminClusterMembership" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.adminClusterMembership"></a>

```java
public java.lang.String getAdminClusterMembership();
```

- *Type:* java.lang.String

The admin cluster this VMware User Cluster belongs to.

This is the full resource name of the admin cluster's hub membership.
In the future, references to other resource types might be allowed if
admin clusters are modeled as their own resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#admin_cluster_membership GoogleGkeonpremVmwareCluster#admin_cluster_membership}

---

##### `controlPlaneNode`<sup>Required</sup> <a name="controlPlaneNode" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.controlPlaneNode"></a>

```java
public GoogleGkeonpremVmwareClusterControlPlaneNode getControlPlaneNode();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode">GoogleGkeonpremVmwareClusterControlPlaneNode</a>

control_plane_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#control_plane_node GoogleGkeonpremVmwareCluster#control_plane_node}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#location GoogleGkeonpremVmwareCluster#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The VMware cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#name GoogleGkeonpremVmwareCluster#name}

---

##### `onPremVersion`<sup>Required</sup> <a name="onPremVersion" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.onPremVersion"></a>

```java
public java.lang.String getOnPremVersion();
```

- *Type:* java.lang.String

The Anthos clusters on the VMware version for your user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#on_prem_version GoogleGkeonpremVmwareCluster#on_prem_version}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Annotations on the VMware User Cluster.

This field has the same restrictions as Kubernetes annotations.
The total size of all keys and values combined is limited to 256k.
Key can have 2 segments: prefix (optional) and name (required),
separated by a slash (/).
Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#annotations GoogleGkeonpremVmwareCluster#annotations}

---

##### `antiAffinityGroups`<sup>Optional</sup> <a name="antiAffinityGroups" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.antiAffinityGroups"></a>

```java
public GoogleGkeonpremVmwareClusterAntiAffinityGroups getAntiAffinityGroups();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroups">GoogleGkeonpremVmwareClusterAntiAffinityGroups</a>

anti_affinity_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#anti_affinity_groups GoogleGkeonpremVmwareCluster#anti_affinity_groups}

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.authorization"></a>

```java
public GoogleGkeonpremVmwareClusterAuthorization getAuthorization();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorization">GoogleGkeonpremVmwareClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#authorization GoogleGkeonpremVmwareCluster#authorization}

---

##### `autoRepairConfig`<sup>Optional</sup> <a name="autoRepairConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.autoRepairConfig"></a>

```java
public GoogleGkeonpremVmwareClusterAutoRepairConfig getAutoRepairConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfig">GoogleGkeonpremVmwareClusterAutoRepairConfig</a>

auto_repair_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#auto_repair_config GoogleGkeonpremVmwareCluster#auto_repair_config}

---

##### `dataplaneV2`<sup>Optional</sup> <a name="dataplaneV2" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.dataplaneV2"></a>

```java
public GoogleGkeonpremVmwareClusterDataplaneV2 getDataplaneV2();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2">GoogleGkeonpremVmwareClusterDataplaneV2</a>

dataplane_v2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#dataplane_v2 GoogleGkeonpremVmwareCluster#dataplane_v2}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A human readable description of this VMware User Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#description GoogleGkeonpremVmwareCluster#description}

---

##### `disableBundledIngress`<sup>Optional</sup> <a name="disableBundledIngress" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.disableBundledIngress"></a>

```java
public java.lang.Object getDisableBundledIngress();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disable bundled ingress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#disable_bundled_ingress GoogleGkeonpremVmwareCluster#disable_bundled_ingress}

---

##### `enableControlPlaneV2`<sup>Optional</sup> <a name="enableControlPlaneV2" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.enableControlPlaneV2"></a>

```java
public java.lang.Object getEnableControlPlaneV2();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable control plane V2. Default to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#enable_control_plane_v2 GoogleGkeonpremVmwareCluster#enable_control_plane_v2}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#id GoogleGkeonpremVmwareCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loadBalancer`<sup>Optional</sup> <a name="loadBalancer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.loadBalancer"></a>

```java
public GoogleGkeonpremVmwareClusterLoadBalancer getLoadBalancer();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer">GoogleGkeonpremVmwareClusterLoadBalancer</a>

load_balancer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#load_balancer GoogleGkeonpremVmwareCluster#load_balancer}

---

##### `networkConfig`<sup>Optional</sup> <a name="networkConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.networkConfig"></a>

```java
public GoogleGkeonpremVmwareClusterNetworkConfig getNetworkConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig">GoogleGkeonpremVmwareClusterNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#network_config GoogleGkeonpremVmwareCluster#network_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#project GoogleGkeonpremVmwareCluster#project}.

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.storage"></a>

```java
public GoogleGkeonpremVmwareClusterStorage getStorage();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorage">GoogleGkeonpremVmwareClusterStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#storage GoogleGkeonpremVmwareCluster#storage}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.timeouts"></a>

```java
public GoogleGkeonpremVmwareClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts">GoogleGkeonpremVmwareClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#timeouts GoogleGkeonpremVmwareCluster#timeouts}

---

##### `upgradePolicy`<sup>Optional</sup> <a name="upgradePolicy" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.upgradePolicy"></a>

```java
public GoogleGkeonpremVmwareClusterUpgradePolicy getUpgradePolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicy">GoogleGkeonpremVmwareClusterUpgradePolicy</a>

upgrade_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#upgrade_policy GoogleGkeonpremVmwareCluster#upgrade_policy}

---

##### `vcenter`<sup>Optional</sup> <a name="vcenter" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.vcenter"></a>

```java
public GoogleGkeonpremVmwareClusterVcenter getVcenter();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter">GoogleGkeonpremVmwareClusterVcenter</a>

vcenter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#vcenter GoogleGkeonpremVmwareCluster#vcenter}

---

##### `vmTrackingEnabled`<sup>Optional</sup> <a name="vmTrackingEnabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.vmTrackingEnabled"></a>

```java
public java.lang.Object getVmTrackingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable VM tracking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#vm_tracking_enabled GoogleGkeonpremVmwareCluster#vm_tracking_enabled}

---

### GoogleGkeonpremVmwareClusterControlPlaneNode <a name="GoogleGkeonpremVmwareClusterControlPlaneNode" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterControlPlaneNode;

GoogleGkeonpremVmwareClusterControlPlaneNode.builder()
//  .autoResizeConfig(GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig)
//  .cpus(java.lang.Number)
//  .memory(java.lang.Number)
//  .replicas(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode.property.autoResizeConfig">autoResizeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig">GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig</a></code> | auto_resize_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode.property.cpus">cpus</a></code> | <code>java.lang.Number</code> | The number of CPUs for each admin cluster node that serve as control planes for this VMware User Cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode.property.memory">memory</a></code> | <code>java.lang.Number</code> | The megabytes of memory for each admin cluster node that serves as a control plane for this VMware User Cluster (default: 8192 MB memory). |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode.property.replicas">replicas</a></code> | <code>java.lang.Number</code> | The number of control plane nodes for this VMware User Cluster. (default: 1 replica). |

---

##### `autoResizeConfig`<sup>Optional</sup> <a name="autoResizeConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode.property.autoResizeConfig"></a>

```java
public GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig getAutoResizeConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig">GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig</a>

auto_resize_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#auto_resize_config GoogleGkeonpremVmwareCluster#auto_resize_config}

---

##### `cpus`<sup>Optional</sup> <a name="cpus" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode.property.cpus"></a>

```java
public java.lang.Number getCpus();
```

- *Type:* java.lang.Number

The number of CPUs for each admin cluster node that serve as control planes for this VMware User Cluster.

(default: 4 CPUs)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#cpus GoogleGkeonpremVmwareCluster#cpus}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode.property.memory"></a>

```java
public java.lang.Number getMemory();
```

- *Type:* java.lang.Number

The megabytes of memory for each admin cluster node that serves as a control plane for this VMware User Cluster (default: 8192 MB memory).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#memory GoogleGkeonpremVmwareCluster#memory}

---

##### `replicas`<sup>Optional</sup> <a name="replicas" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode.property.replicas"></a>

```java
public java.lang.Number getReplicas();
```

- *Type:* java.lang.Number

The number of control plane nodes for this VMware User Cluster. (default: 1 replica).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#replicas GoogleGkeonpremVmwareCluster#replicas}

---

### GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig <a name="GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig;

GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to enable control plane node auto resizing. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to enable control plane node auto resizing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#enabled GoogleGkeonpremVmwareCluster#enabled}

---

### GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfig <a name="GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfig;

GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfig.builder()
    .build();
```


### GoogleGkeonpremVmwareClusterDataplaneV2 <a name="GoogleGkeonpremVmwareClusterDataplaneV2" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterDataplaneV2;

GoogleGkeonpremVmwareClusterDataplaneV2.builder()
//  .advancedNetworking(java.lang.Boolean)
//  .advancedNetworking(IResolvable)
//  .dataplaneV2Enabled(java.lang.Boolean)
//  .dataplaneV2Enabled(IResolvable)
//  .windowsDataplaneV2Enabled(java.lang.Boolean)
//  .windowsDataplaneV2Enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2.property.advancedNetworking">advancedNetworking</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable advanced networking which requires dataplane_v2_enabled to be set true. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2.property.dataplaneV2Enabled">dataplaneV2Enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables Dataplane V2. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2.property.windowsDataplaneV2Enabled">windowsDataplaneV2Enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable Dataplane V2 for clusters with Windows nodes. |

---

##### `advancedNetworking`<sup>Optional</sup> <a name="advancedNetworking" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2.property.advancedNetworking"></a>

```java
public java.lang.Object getAdvancedNetworking();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable advanced networking which requires dataplane_v2_enabled to be set true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#advanced_networking GoogleGkeonpremVmwareCluster#advanced_networking}

---

##### `dataplaneV2Enabled`<sup>Optional</sup> <a name="dataplaneV2Enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2.property.dataplaneV2Enabled"></a>

```java
public java.lang.Object getDataplaneV2Enabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables Dataplane V2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#dataplane_v2_enabled GoogleGkeonpremVmwareCluster#dataplane_v2_enabled}

---

##### `windowsDataplaneV2Enabled`<sup>Optional</sup> <a name="windowsDataplaneV2Enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2.property.windowsDataplaneV2Enabled"></a>

```java
public java.lang.Object getWindowsDataplaneV2Enabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable Dataplane V2 for clusters with Windows nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#windows_dataplane_v2_enabled GoogleGkeonpremVmwareCluster#windows_dataplane_v2_enabled}

---

### GoogleGkeonpremVmwareClusterFleet <a name="GoogleGkeonpremVmwareClusterFleet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterFleet;

GoogleGkeonpremVmwareClusterFleet.builder()
    .build();
```


### GoogleGkeonpremVmwareClusterLoadBalancer <a name="GoogleGkeonpremVmwareClusterLoadBalancer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterLoadBalancer;

GoogleGkeonpremVmwareClusterLoadBalancer.builder()
//  .f5Config(GoogleGkeonpremVmwareClusterLoadBalancerF5Config)
//  .manualLbConfig(GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig)
//  .metalLbConfig(GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig)
//  .vipConfig(GoogleGkeonpremVmwareClusterLoadBalancerVipConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer.property.f5Config">f5Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config">GoogleGkeonpremVmwareClusterLoadBalancerF5Config</a></code> | f5_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer.property.manualLbConfig">manualLbConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig">GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig</a></code> | manual_lb_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer.property.metalLbConfig">metalLbConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig</a></code> | metal_lb_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer.property.vipConfig">vipConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig">GoogleGkeonpremVmwareClusterLoadBalancerVipConfig</a></code> | vip_config block. |

---

##### `f5Config`<sup>Optional</sup> <a name="f5Config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer.property.f5Config"></a>

```java
public GoogleGkeonpremVmwareClusterLoadBalancerF5Config getF5Config();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config">GoogleGkeonpremVmwareClusterLoadBalancerF5Config</a>

f5_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#f5_config GoogleGkeonpremVmwareCluster#f5_config}

---

##### `manualLbConfig`<sup>Optional</sup> <a name="manualLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer.property.manualLbConfig"></a>

```java
public GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig getManualLbConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig">GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig</a>

manual_lb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#manual_lb_config GoogleGkeonpremVmwareCluster#manual_lb_config}

---

##### `metalLbConfig`<sup>Optional</sup> <a name="metalLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer.property.metalLbConfig"></a>

```java
public GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig getMetalLbConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig</a>

metal_lb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#metal_lb_config GoogleGkeonpremVmwareCluster#metal_lb_config}

---

##### `vipConfig`<sup>Optional</sup> <a name="vipConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer.property.vipConfig"></a>

```java
public GoogleGkeonpremVmwareClusterLoadBalancerVipConfig getVipConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig">GoogleGkeonpremVmwareClusterLoadBalancerVipConfig</a>

vip_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#vip_config GoogleGkeonpremVmwareCluster#vip_config}

---

### GoogleGkeonpremVmwareClusterLoadBalancerF5Config <a name="GoogleGkeonpremVmwareClusterLoadBalancerF5Config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config;

GoogleGkeonpremVmwareClusterLoadBalancerF5Config.builder()
//  .address(java.lang.String)
//  .partition(java.lang.String)
//  .snatPool(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config.property.address">address</a></code> | <code>java.lang.String</code> | The load balancer's IP address. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config.property.partition">partition</a></code> | <code>java.lang.String</code> | he preexisting partition to be used by the load balancer. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config.property.snatPool">snatPool</a></code> | <code>java.lang.String</code> | The pool name. Only necessary, if using SNAT. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

The load balancer's IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#address GoogleGkeonpremVmwareCluster#address}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config.property.partition"></a>

```java
public java.lang.String getPartition();
```

- *Type:* java.lang.String

he preexisting partition to be used by the load balancer.

T
his partition is usually created for the admin cluster for example:
'my-f5-admin-partition'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#partition GoogleGkeonpremVmwareCluster#partition}

---

##### `snatPool`<sup>Optional</sup> <a name="snatPool" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config.property.snatPool"></a>

```java
public java.lang.String getSnatPool();
```

- *Type:* java.lang.String

The pool name. Only necessary, if using SNAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#snat_pool GoogleGkeonpremVmwareCluster#snat_pool}

---

### GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig <a name="GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig;

GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig.builder()
//  .controlPlaneNodePort(java.lang.Number)
//  .ingressHttpNodePort(java.lang.Number)
//  .ingressHttpsNodePort(java.lang.Number)
//  .konnectivityServerNodePort(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig.property.controlPlaneNodePort">controlPlaneNodePort</a></code> | <code>java.lang.Number</code> | NodePort for control plane service. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig.property.ingressHttpNodePort">ingressHttpNodePort</a></code> | <code>java.lang.Number</code> | NodePort for ingress service's http. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig.property.ingressHttpsNodePort">ingressHttpsNodePort</a></code> | <code>java.lang.Number</code> | NodePort for ingress service's https. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig.property.konnectivityServerNodePort">konnectivityServerNodePort</a></code> | <code>java.lang.Number</code> | NodePort for konnectivity server service running as a sidecar in each kube-apiserver pod (ex. 30564). |

---

##### `controlPlaneNodePort`<sup>Optional</sup> <a name="controlPlaneNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig.property.controlPlaneNodePort"></a>

```java
public java.lang.Number getControlPlaneNodePort();
```

- *Type:* java.lang.Number

NodePort for control plane service.

The Kubernetes API server in the admin
cluster is implemented as a Service of type NodePort (ex. 30968).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#control_plane_node_port GoogleGkeonpremVmwareCluster#control_plane_node_port}

---

##### `ingressHttpNodePort`<sup>Optional</sup> <a name="ingressHttpNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig.property.ingressHttpNodePort"></a>

```java
public java.lang.Number getIngressHttpNodePort();
```

- *Type:* java.lang.Number

NodePort for ingress service's http.

The ingress service in the admin
cluster is implemented as a Service of type NodePort (ex. 32527).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#ingress_http_node_port GoogleGkeonpremVmwareCluster#ingress_http_node_port}

---

##### `ingressHttpsNodePort`<sup>Optional</sup> <a name="ingressHttpsNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig.property.ingressHttpsNodePort"></a>

```java
public java.lang.Number getIngressHttpsNodePort();
```

- *Type:* java.lang.Number

NodePort for ingress service's https.

The ingress service in the admin
cluster is implemented as a Service of type NodePort (ex. 30139).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#ingress_https_node_port GoogleGkeonpremVmwareCluster#ingress_https_node_port}

---

##### `konnectivityServerNodePort`<sup>Optional</sup> <a name="konnectivityServerNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig.property.konnectivityServerNodePort"></a>

```java
public java.lang.Number getKonnectivityServerNodePort();
```

- *Type:* java.lang.Number

NodePort for konnectivity server service running as a sidecar in each kube-apiserver pod (ex. 30564).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#konnectivity_server_node_port GoogleGkeonpremVmwareCluster#konnectivity_server_node_port}

---

### GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig <a name="GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig;

GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig.builder()
    .addressPools(IResolvable)
    .addressPools(java.util.List<GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig.property.addressPools">addressPools</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools</a>></code> | address_pools block. |

---

##### `addressPools`<sup>Required</sup> <a name="addressPools" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig.property.addressPools"></a>

```java
public java.lang.Object getAddressPools();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools</a>>

address_pools block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#address_pools GoogleGkeonpremVmwareCluster#address_pools}

---

### GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools <a name="GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools;

GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.builder()
    .addresses(java.util.List<java.lang.String>)
    .pool(java.lang.String)
//  .avoidBuggyIps(java.lang.Boolean)
//  .avoidBuggyIps(IResolvable)
//  .manualAssign(java.lang.Boolean)
//  .manualAssign(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.property.addresses">addresses</a></code> | <code>java.util.List<java.lang.String></code> | The addresses that are part of this pool. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.property.pool">pool</a></code> | <code>java.lang.String</code> | The name of the address pool. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.property.avoidBuggyIps">avoidBuggyIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, avoid using IPs ending in .0 or .255. This avoids buggy consumer devices mistakenly dropping IPv4 traffic for those special IP addresses. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.property.manualAssign">manualAssign</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, prevent IP addresses from being automatically assigned. |

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.property.addresses"></a>

```java
public java.util.List<java.lang.String> getAddresses();
```

- *Type:* java.util.List<java.lang.String>

The addresses that are part of this pool.

Each address
must be either in the CIDR form (1.2.3.0/24) or range
form (1.2.3.1-1.2.3.5).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#addresses GoogleGkeonpremVmwareCluster#addresses}

---

##### `pool`<sup>Required</sup> <a name="pool" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.property.pool"></a>

```java
public java.lang.String getPool();
```

- *Type:* java.lang.String

The name of the address pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#pool GoogleGkeonpremVmwareCluster#pool}

---

##### `avoidBuggyIps`<sup>Optional</sup> <a name="avoidBuggyIps" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.property.avoidBuggyIps"></a>

```java
public java.lang.Object getAvoidBuggyIps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, avoid using IPs ending in .0 or .255. This avoids buggy consumer devices mistakenly dropping IPv4 traffic for those special IP addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#avoid_buggy_ips GoogleGkeonpremVmwareCluster#avoid_buggy_ips}

---

##### `manualAssign`<sup>Optional</sup> <a name="manualAssign" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.property.manualAssign"></a>

```java
public java.lang.Object getManualAssign();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, prevent IP addresses from being automatically assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#manual_assign GoogleGkeonpremVmwareCluster#manual_assign}

---

### GoogleGkeonpremVmwareClusterLoadBalancerVipConfig <a name="GoogleGkeonpremVmwareClusterLoadBalancerVipConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig;

GoogleGkeonpremVmwareClusterLoadBalancerVipConfig.builder()
//  .controlPlaneVip(java.lang.String)
//  .ingressVip(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig.property.controlPlaneVip">controlPlaneVip</a></code> | <code>java.lang.String</code> | The VIP which you previously set aside for the Kubernetes API of this cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig.property.ingressVip">ingressVip</a></code> | <code>java.lang.String</code> | The VIP which you previously set aside for ingress traffic into this cluster. |

---

##### `controlPlaneVip`<sup>Optional</sup> <a name="controlPlaneVip" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig.property.controlPlaneVip"></a>

```java
public java.lang.String getControlPlaneVip();
```

- *Type:* java.lang.String

The VIP which you previously set aside for the Kubernetes API of this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#control_plane_vip GoogleGkeonpremVmwareCluster#control_plane_vip}

---

##### `ingressVip`<sup>Optional</sup> <a name="ingressVip" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig.property.ingressVip"></a>

```java
public java.lang.String getIngressVip();
```

- *Type:* java.lang.String

The VIP which you previously set aside for ingress traffic into this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#ingress_vip GoogleGkeonpremVmwareCluster#ingress_vip}

---

### GoogleGkeonpremVmwareClusterNetworkConfig <a name="GoogleGkeonpremVmwareClusterNetworkConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterNetworkConfig;

GoogleGkeonpremVmwareClusterNetworkConfig.builder()
    .podAddressCidrBlocks(java.util.List<java.lang.String>)
    .serviceAddressCidrBlocks(java.util.List<java.lang.String>)
//  .controlPlaneV2Config(GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config)
//  .dhcpIpConfig(GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig)
//  .hostConfig(GoogleGkeonpremVmwareClusterNetworkConfigHostConfig)
//  .staticIpConfig(GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig)
//  .vcenterNetwork(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.property.podAddressCidrBlocks">podAddressCidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.property.serviceAddressCidrBlocks">serviceAddressCidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | All services in the cluster are assigned an RFC1918 IPv4 address from these ranges. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.property.controlPlaneV2Config">controlPlaneV2Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config</a></code> | control_plane_v2_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.property.dhcpIpConfig">dhcpIpConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig">GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig</a></code> | dhcp_ip_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.property.hostConfig">hostConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig">GoogleGkeonpremVmwareClusterNetworkConfigHostConfig</a></code> | host_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.property.staticIpConfig">staticIpConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig</a></code> | static_ip_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.property.vcenterNetwork">vcenterNetwork</a></code> | <code>java.lang.String</code> | vcenter_network specifies vCenter network name. Inherited from the admin cluster. |

---

##### `podAddressCidrBlocks`<sup>Required</sup> <a name="podAddressCidrBlocks" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.property.podAddressCidrBlocks"></a>

```java
public java.util.List<java.lang.String> getPodAddressCidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges.

Only a single range is supported. This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#pod_address_cidr_blocks GoogleGkeonpremVmwareCluster#pod_address_cidr_blocks}

---

##### `serviceAddressCidrBlocks`<sup>Required</sup> <a name="serviceAddressCidrBlocks" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.property.serviceAddressCidrBlocks"></a>

```java
public java.util.List<java.lang.String> getServiceAddressCidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

All services in the cluster are assigned an RFC1918 IPv4 address from these ranges.

Only a single range is supported.. This field
cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#service_address_cidr_blocks GoogleGkeonpremVmwareCluster#service_address_cidr_blocks}

---

##### `controlPlaneV2Config`<sup>Optional</sup> <a name="controlPlaneV2Config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.property.controlPlaneV2Config"></a>

```java
public GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config getControlPlaneV2Config();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config</a>

control_plane_v2_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#control_plane_v2_config GoogleGkeonpremVmwareCluster#control_plane_v2_config}

---

##### `dhcpIpConfig`<sup>Optional</sup> <a name="dhcpIpConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.property.dhcpIpConfig"></a>

```java
public GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig getDhcpIpConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig">GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig</a>

dhcp_ip_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#dhcp_ip_config GoogleGkeonpremVmwareCluster#dhcp_ip_config}

---

##### `hostConfig`<sup>Optional</sup> <a name="hostConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.property.hostConfig"></a>

```java
public GoogleGkeonpremVmwareClusterNetworkConfigHostConfig getHostConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig">GoogleGkeonpremVmwareClusterNetworkConfigHostConfig</a>

host_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#host_config GoogleGkeonpremVmwareCluster#host_config}

---

##### `staticIpConfig`<sup>Optional</sup> <a name="staticIpConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.property.staticIpConfig"></a>

```java
public GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig getStaticIpConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig</a>

static_ip_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#static_ip_config GoogleGkeonpremVmwareCluster#static_ip_config}

---

##### `vcenterNetwork`<sup>Optional</sup> <a name="vcenterNetwork" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.property.vcenterNetwork"></a>

```java
public java.lang.String getVcenterNetwork();
```

- *Type:* java.lang.String

vcenter_network specifies vCenter network name. Inherited from the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#vcenter_network GoogleGkeonpremVmwareCluster#vcenter_network}

---

### GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config <a name="GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config;

GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config.builder()
//  .controlPlaneIpBlock(GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config.property.controlPlaneIpBlock">controlPlaneIpBlock</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock</a></code> | control_plane_ip_block block. |

---

##### `controlPlaneIpBlock`<sup>Optional</sup> <a name="controlPlaneIpBlock" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config.property.controlPlaneIpBlock"></a>

```java
public GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock getControlPlaneIpBlock();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock</a>

control_plane_ip_block block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#control_plane_ip_block GoogleGkeonpremVmwareCluster#control_plane_ip_block}

---

### GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock <a name="GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock;

GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock.builder()
//  .gateway(java.lang.String)
//  .ips(IResolvable)
//  .ips(java.util.List<GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps>)
//  .netmask(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock.property.gateway">gateway</a></code> | <code>java.lang.String</code> | The network gateway used by the VMware User Cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock.property.ips">ips</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps</a>></code> | ips block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock.property.netmask">netmask</a></code> | <code>java.lang.String</code> | The netmask used by the VMware User Cluster. |

---

##### `gateway`<sup>Optional</sup> <a name="gateway" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock.property.gateway"></a>

```java
public java.lang.String getGateway();
```

- *Type:* java.lang.String

The network gateway used by the VMware User Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#gateway GoogleGkeonpremVmwareCluster#gateway}

---

##### `ips`<sup>Optional</sup> <a name="ips" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock.property.ips"></a>

```java
public java.lang.Object getIps();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps</a>>

ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#ips GoogleGkeonpremVmwareCluster#ips}

---

##### `netmask`<sup>Optional</sup> <a name="netmask" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock.property.netmask"></a>

```java
public java.lang.String getNetmask();
```

- *Type:* java.lang.String

The netmask used by the VMware User Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#netmask GoogleGkeonpremVmwareCluster#netmask}

---

### GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps <a name="GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps;

GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps.builder()
//  .hostname(java.lang.String)
//  .ip(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Hostname of the machine. VM's name will be used if this field is empty. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps.property.ip">ip</a></code> | <code>java.lang.String</code> | IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24). |

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Hostname of the machine. VM's name will be used if this field is empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#hostname GoogleGkeonpremVmwareCluster#hostname}

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#ip GoogleGkeonpremVmwareCluster#ip}

---

### GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig <a name="GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig;

GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | enabled is a flag to mark if DHCP IP allocation is used for VMware user clusters. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

enabled is a flag to mark if DHCP IP allocation is used for VMware user clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#enabled GoogleGkeonpremVmwareCluster#enabled}

---

### GoogleGkeonpremVmwareClusterNetworkConfigHostConfig <a name="GoogleGkeonpremVmwareClusterNetworkConfigHostConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig;

GoogleGkeonpremVmwareClusterNetworkConfigHostConfig.builder()
//  .dnsSearchDomains(java.util.List<java.lang.String>)
//  .dnsServers(java.util.List<java.lang.String>)
//  .ntpServers(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig.property.dnsSearchDomains">dnsSearchDomains</a></code> | <code>java.util.List<java.lang.String></code> | DNS search domains. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig.property.dnsServers">dnsServers</a></code> | <code>java.util.List<java.lang.String></code> | DNS servers. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig.property.ntpServers">ntpServers</a></code> | <code>java.util.List<java.lang.String></code> | NTP servers. |

---

##### `dnsSearchDomains`<sup>Optional</sup> <a name="dnsSearchDomains" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig.property.dnsSearchDomains"></a>

```java
public java.util.List<java.lang.String> getDnsSearchDomains();
```

- *Type:* java.util.List<java.lang.String>

DNS search domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#dns_search_domains GoogleGkeonpremVmwareCluster#dns_search_domains}

---

##### `dnsServers`<sup>Optional</sup> <a name="dnsServers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig.property.dnsServers"></a>

```java
public java.util.List<java.lang.String> getDnsServers();
```

- *Type:* java.util.List<java.lang.String>

DNS servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#dns_servers GoogleGkeonpremVmwareCluster#dns_servers}

---

##### `ntpServers`<sup>Optional</sup> <a name="ntpServers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig.property.ntpServers"></a>

```java
public java.util.List<java.lang.String> getNtpServers();
```

- *Type:* java.util.List<java.lang.String>

NTP servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#ntp_servers GoogleGkeonpremVmwareCluster#ntp_servers}

---

### GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig <a name="GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig;

GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig.builder()
    .ipBlocks(IResolvable)
    .ipBlocks(java.util.List<GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig.property.ipBlocks">ipBlocks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks</a>></code> | ip_blocks block. |

---

##### `ipBlocks`<sup>Required</sup> <a name="ipBlocks" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig.property.ipBlocks"></a>

```java
public java.lang.Object getIpBlocks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks</a>>

ip_blocks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#ip_blocks GoogleGkeonpremVmwareCluster#ip_blocks}

---

### GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks <a name="GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks;

GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks.builder()
    .gateway(java.lang.String)
    .ips(IResolvable)
    .ips(java.util.List<GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps>)
    .netmask(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks.property.gateway">gateway</a></code> | <code>java.lang.String</code> | The network gateway used by the VMware User Cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks.property.ips">ips</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps</a>></code> | ips block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks.property.netmask">netmask</a></code> | <code>java.lang.String</code> | The netmask used by the VMware User Cluster. |

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks.property.gateway"></a>

```java
public java.lang.String getGateway();
```

- *Type:* java.lang.String

The network gateway used by the VMware User Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#gateway GoogleGkeonpremVmwareCluster#gateway}

---

##### `ips`<sup>Required</sup> <a name="ips" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks.property.ips"></a>

```java
public java.lang.Object getIps();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps</a>>

ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#ips GoogleGkeonpremVmwareCluster#ips}

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks.property.netmask"></a>

```java
public java.lang.String getNetmask();
```

- *Type:* java.lang.String

The netmask used by the VMware User Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#netmask GoogleGkeonpremVmwareCluster#netmask}

---

### GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps <a name="GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps;

GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps.builder()
    .ip(java.lang.String)
//  .hostname(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps.property.ip">ip</a></code> | <code>java.lang.String</code> | IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24). |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Hostname of the machine. VM's name will be used if this field is empty. |

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#ip GoogleGkeonpremVmwareCluster#ip}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Hostname of the machine. VM's name will be used if this field is empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#hostname GoogleGkeonpremVmwareCluster#hostname}

---

### GoogleGkeonpremVmwareClusterStatus <a name="GoogleGkeonpremVmwareClusterStatus" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatus.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterStatus;

GoogleGkeonpremVmwareClusterStatus.builder()
    .build();
```


### GoogleGkeonpremVmwareClusterStatusConditions <a name="GoogleGkeonpremVmwareClusterStatusConditions" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterStatusConditions;

GoogleGkeonpremVmwareClusterStatusConditions.builder()
    .build();
```


### GoogleGkeonpremVmwareClusterStorage <a name="GoogleGkeonpremVmwareClusterStorage" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterStorage;

GoogleGkeonpremVmwareClusterStorage.builder()
    .vsphereCsiDisabled(java.lang.Boolean)
    .vsphereCsiDisabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorage.property.vsphereCsiDisabled">vsphereCsiDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to deploy vSphere CSI components in the VMware User Cluster. Enabled by default. |

---

##### `vsphereCsiDisabled`<sup>Required</sup> <a name="vsphereCsiDisabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorage.property.vsphereCsiDisabled"></a>

```java
public java.lang.Object getVsphereCsiDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to deploy vSphere CSI components in the VMware User Cluster. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#vsphere_csi_disabled GoogleGkeonpremVmwareCluster#vsphere_csi_disabled}

---

### GoogleGkeonpremVmwareClusterTimeouts <a name="GoogleGkeonpremVmwareClusterTimeouts" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterTimeouts;

GoogleGkeonpremVmwareClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#create GoogleGkeonpremVmwareCluster#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#delete GoogleGkeonpremVmwareCluster#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#update GoogleGkeonpremVmwareCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#create GoogleGkeonpremVmwareCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#delete GoogleGkeonpremVmwareCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#update GoogleGkeonpremVmwareCluster#update}.

---

### GoogleGkeonpremVmwareClusterUpgradePolicy <a name="GoogleGkeonpremVmwareClusterUpgradePolicy" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterUpgradePolicy;

GoogleGkeonpremVmwareClusterUpgradePolicy.builder()
//  .controlPlaneOnly(java.lang.Boolean)
//  .controlPlaneOnly(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicy.property.controlPlaneOnly">controlPlaneOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Controls whether the upgrade applies to the control plane only. |

---

##### `controlPlaneOnly`<sup>Optional</sup> <a name="controlPlaneOnly" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicy.property.controlPlaneOnly"></a>

```java
public java.lang.Object getControlPlaneOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Controls whether the upgrade applies to the control plane only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#control_plane_only GoogleGkeonpremVmwareCluster#control_plane_only}

---

### GoogleGkeonpremVmwareClusterValidationCheck <a name="GoogleGkeonpremVmwareClusterValidationCheck" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheck.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterValidationCheck;

GoogleGkeonpremVmwareClusterValidationCheck.builder()
    .build();
```


### GoogleGkeonpremVmwareClusterValidationCheckStatus <a name="GoogleGkeonpremVmwareClusterValidationCheckStatus" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatus.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterValidationCheckStatus;

GoogleGkeonpremVmwareClusterValidationCheckStatus.builder()
    .build();
```


### GoogleGkeonpremVmwareClusterValidationCheckStatusResult <a name="GoogleGkeonpremVmwareClusterValidationCheckStatusResult" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResult.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResult;

GoogleGkeonpremVmwareClusterValidationCheckStatusResult.builder()
    .build();
```


### GoogleGkeonpremVmwareClusterVcenter <a name="GoogleGkeonpremVmwareClusterVcenter" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterVcenter;

GoogleGkeonpremVmwareClusterVcenter.builder()
//  .caCertData(java.lang.String)
//  .cluster(java.lang.String)
//  .datacenter(java.lang.String)
//  .datastore(java.lang.String)
//  .folder(java.lang.String)
//  .resourcePool(java.lang.String)
//  .storagePolicyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.property.caCertData">caCertData</a></code> | <code>java.lang.String</code> | Contains the vCenter CA certificate public key for SSL verification. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.property.cluster">cluster</a></code> | <code>java.lang.String</code> | The name of the vCenter cluster for the user cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.property.datacenter">datacenter</a></code> | <code>java.lang.String</code> | The name of the vCenter datacenter for the user cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.property.datastore">datastore</a></code> | <code>java.lang.String</code> | The name of the vCenter datastore for the user cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.property.folder">folder</a></code> | <code>java.lang.String</code> | The name of the vCenter folder for the user cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.property.resourcePool">resourcePool</a></code> | <code>java.lang.String</code> | The name of the vCenter resource pool for the user cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.property.storagePolicyName">storagePolicyName</a></code> | <code>java.lang.String</code> | The name of the vCenter storage policy for the user cluster. |

---

##### `caCertData`<sup>Optional</sup> <a name="caCertData" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.property.caCertData"></a>

```java
public java.lang.String getCaCertData();
```

- *Type:* java.lang.String

Contains the vCenter CA certificate public key for SSL verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#ca_cert_data GoogleGkeonpremVmwareCluster#ca_cert_data}

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

The name of the vCenter cluster for the user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#cluster GoogleGkeonpremVmwareCluster#cluster}

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.property.datacenter"></a>

```java
public java.lang.String getDatacenter();
```

- *Type:* java.lang.String

The name of the vCenter datacenter for the user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#datacenter GoogleGkeonpremVmwareCluster#datacenter}

---

##### `datastore`<sup>Optional</sup> <a name="datastore" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.property.datastore"></a>

```java
public java.lang.String getDatastore();
```

- *Type:* java.lang.String

The name of the vCenter datastore for the user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#datastore GoogleGkeonpremVmwareCluster#datastore}

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

The name of the vCenter folder for the user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#folder GoogleGkeonpremVmwareCluster#folder}

---

##### `resourcePool`<sup>Optional</sup> <a name="resourcePool" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.property.resourcePool"></a>

```java
public java.lang.String getResourcePool();
```

- *Type:* java.lang.String

The name of the vCenter resource pool for the user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#resource_pool GoogleGkeonpremVmwareCluster#resource_pool}

---

##### `storagePolicyName`<sup>Optional</sup> <a name="storagePolicyName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.property.storagePolicyName"></a>

```java
public java.lang.String getStoragePolicyName();
```

- *Type:* java.lang.String

The name of the vCenter storage policy for the user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_vmware_cluster#storage_policy_name GoogleGkeonpremVmwareCluster#storage_policy_name}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference <a name="GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference;

new GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.aagConfigDisabledInput">aagConfigDisabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.aagConfigDisabled">aagConfigDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroups">GoogleGkeonpremVmwareClusterAntiAffinityGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aagConfigDisabledInput`<sup>Optional</sup> <a name="aagConfigDisabledInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.aagConfigDisabledInput"></a>

```java
public java.lang.Object getAagConfigDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `aagConfigDisabled`<sup>Required</sup> <a name="aagConfigDisabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.aagConfigDisabled"></a>

```java
public java.lang.Object getAagConfigDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.internalValue"></a>

```java
public GoogleGkeonpremVmwareClusterAntiAffinityGroups getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroups">GoogleGkeonpremVmwareClusterAntiAffinityGroups</a>

---


### GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList <a name="GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList;

new GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.get"></a>

```java
public GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsers">GoogleGkeonpremVmwareClusterAuthorizationAdminUsers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsers">GoogleGkeonpremVmwareClusterAuthorizationAdminUsers</a>>

---


### GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference <a name="GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference;

new GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsers">GoogleGkeonpremVmwareClusterAuthorizationAdminUsers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsers">GoogleGkeonpremVmwareClusterAuthorizationAdminUsers</a>

---


### GoogleGkeonpremVmwareClusterAuthorizationOutputReference <a name="GoogleGkeonpremVmwareClusterAuthorizationOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference;

new GoogleGkeonpremVmwareClusterAuthorizationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.putAdminUsers">putAdminUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.resetAdminUsers">resetAdminUsers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdminUsers` <a name="putAdminUsers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.putAdminUsers"></a>

```java
public void putAdminUsers(IResolvable OR java.util.List<GoogleGkeonpremVmwareClusterAuthorizationAdminUsers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.putAdminUsers.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsers">GoogleGkeonpremVmwareClusterAuthorizationAdminUsers</a>>

---

##### `resetAdminUsers` <a name="resetAdminUsers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.resetAdminUsers"></a>

```java
public void resetAdminUsers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.property.adminUsers">adminUsers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList">GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.property.adminUsersInput">adminUsersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsers">GoogleGkeonpremVmwareClusterAuthorizationAdminUsers</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorization">GoogleGkeonpremVmwareClusterAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adminUsers`<sup>Required</sup> <a name="adminUsers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.property.adminUsers"></a>

```java
public GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList getAdminUsers();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList">GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList</a>

---

##### `adminUsersInput`<sup>Optional</sup> <a name="adminUsersInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.property.adminUsersInput"></a>

```java
public java.lang.Object getAdminUsersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsers">GoogleGkeonpremVmwareClusterAuthorizationAdminUsers</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.property.internalValue"></a>

```java
public GoogleGkeonpremVmwareClusterAuthorization getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorization">GoogleGkeonpremVmwareClusterAuthorization</a>

---


### GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference <a name="GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference;

new GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfig">GoogleGkeonpremVmwareClusterAutoRepairConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.property.internalValue"></a>

```java
public GoogleGkeonpremVmwareClusterAutoRepairConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfig">GoogleGkeonpremVmwareClusterAutoRepairConfig</a>

---


### GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference <a name="GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference;

new GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig">GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.internalValue"></a>

```java
public GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig">GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig</a>

---


### GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference <a name="GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference;

new GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.putAutoResizeConfig">putAutoResizeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.resetAutoResizeConfig">resetAutoResizeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.resetCpus">resetCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.resetMemory">resetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.resetReplicas">resetReplicas</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoResizeConfig` <a name="putAutoResizeConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.putAutoResizeConfig"></a>

```java
public void putAutoResizeConfig(GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.putAutoResizeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig">GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig</a>

---

##### `resetAutoResizeConfig` <a name="resetAutoResizeConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.resetAutoResizeConfig"></a>

```java
public void resetAutoResizeConfig()
```

##### `resetCpus` <a name="resetCpus" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.resetCpus"></a>

```java
public void resetCpus()
```

##### `resetMemory` <a name="resetMemory" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.resetMemory"></a>

```java
public void resetMemory()
```

##### `resetReplicas` <a name="resetReplicas" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.resetReplicas"></a>

```java
public void resetReplicas()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.autoResizeConfig">autoResizeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference">GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.vsphereConfig">vsphereConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList">GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.autoResizeConfigInput">autoResizeConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig">GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.cpusInput">cpusInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.memoryInput">memoryInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.replicasInput">replicasInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.cpus">cpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.memory">memory</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.replicas">replicas</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode">GoogleGkeonpremVmwareClusterControlPlaneNode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoResizeConfig`<sup>Required</sup> <a name="autoResizeConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.autoResizeConfig"></a>

```java
public GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference getAutoResizeConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference">GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference</a>

---

##### `vsphereConfig`<sup>Required</sup> <a name="vsphereConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.vsphereConfig"></a>

```java
public GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList getVsphereConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList">GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList</a>

---

##### `autoResizeConfigInput`<sup>Optional</sup> <a name="autoResizeConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.autoResizeConfigInput"></a>

```java
public GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig getAutoResizeConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig">GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig</a>

---

##### `cpusInput`<sup>Optional</sup> <a name="cpusInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.cpusInput"></a>

```java
public java.lang.Number getCpusInput();
```

- *Type:* java.lang.Number

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.memoryInput"></a>

```java
public java.lang.Number getMemoryInput();
```

- *Type:* java.lang.Number

---

##### `replicasInput`<sup>Optional</sup> <a name="replicasInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.replicasInput"></a>

```java
public java.lang.Number getReplicasInput();
```

- *Type:* java.lang.Number

---

##### `cpus`<sup>Required</sup> <a name="cpus" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.cpus"></a>

```java
public java.lang.Number getCpus();
```

- *Type:* java.lang.Number

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.memory"></a>

```java
public java.lang.Number getMemory();
```

- *Type:* java.lang.Number

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.replicas"></a>

```java
public java.lang.Number getReplicas();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.internalValue"></a>

```java
public GoogleGkeonpremVmwareClusterControlPlaneNode getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode">GoogleGkeonpremVmwareClusterControlPlaneNode</a>

---


### GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList <a name="GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList;

new GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.get"></a>

```java
public GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference <a name="GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference;

new GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.datastore">datastore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.storagePolicyName">storagePolicyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfig">GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datastore`<sup>Required</sup> <a name="datastore" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.datastore"></a>

```java
public java.lang.String getDatastore();
```

- *Type:* java.lang.String

---

##### `storagePolicyName`<sup>Required</sup> <a name="storagePolicyName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.storagePolicyName"></a>

```java
public java.lang.String getStoragePolicyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.internalValue"></a>

```java
public GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfig">GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfig</a>

---


### GoogleGkeonpremVmwareClusterDataplaneV2OutputReference <a name="GoogleGkeonpremVmwareClusterDataplaneV2OutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference;

new GoogleGkeonpremVmwareClusterDataplaneV2OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.resetAdvancedNetworking">resetAdvancedNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.resetDataplaneV2Enabled">resetDataplaneV2Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.resetWindowsDataplaneV2Enabled">resetWindowsDataplaneV2Enabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdvancedNetworking` <a name="resetAdvancedNetworking" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.resetAdvancedNetworking"></a>

```java
public void resetAdvancedNetworking()
```

##### `resetDataplaneV2Enabled` <a name="resetDataplaneV2Enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.resetDataplaneV2Enabled"></a>

```java
public void resetDataplaneV2Enabled()
```

##### `resetWindowsDataplaneV2Enabled` <a name="resetWindowsDataplaneV2Enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.resetWindowsDataplaneV2Enabled"></a>

```java
public void resetWindowsDataplaneV2Enabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.advancedNetworkingInput">advancedNetworkingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.dataplaneV2EnabledInput">dataplaneV2EnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.windowsDataplaneV2EnabledInput">windowsDataplaneV2EnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.advancedNetworking">advancedNetworking</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.dataplaneV2Enabled">dataplaneV2Enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.windowsDataplaneV2Enabled">windowsDataplaneV2Enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2">GoogleGkeonpremVmwareClusterDataplaneV2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `advancedNetworkingInput`<sup>Optional</sup> <a name="advancedNetworkingInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.advancedNetworkingInput"></a>

```java
public java.lang.Object getAdvancedNetworkingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dataplaneV2EnabledInput`<sup>Optional</sup> <a name="dataplaneV2EnabledInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.dataplaneV2EnabledInput"></a>

```java
public java.lang.Object getDataplaneV2EnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `windowsDataplaneV2EnabledInput`<sup>Optional</sup> <a name="windowsDataplaneV2EnabledInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.windowsDataplaneV2EnabledInput"></a>

```java
public java.lang.Object getWindowsDataplaneV2EnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `advancedNetworking`<sup>Required</sup> <a name="advancedNetworking" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.advancedNetworking"></a>

```java
public java.lang.Object getAdvancedNetworking();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dataplaneV2Enabled`<sup>Required</sup> <a name="dataplaneV2Enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.dataplaneV2Enabled"></a>

```java
public java.lang.Object getDataplaneV2Enabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `windowsDataplaneV2Enabled`<sup>Required</sup> <a name="windowsDataplaneV2Enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.windowsDataplaneV2Enabled"></a>

```java
public java.lang.Object getWindowsDataplaneV2Enabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.internalValue"></a>

```java
public GoogleGkeonpremVmwareClusterDataplaneV2 getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2">GoogleGkeonpremVmwareClusterDataplaneV2</a>

---


### GoogleGkeonpremVmwareClusterFleetList <a name="GoogleGkeonpremVmwareClusterFleetList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterFleetList;

new GoogleGkeonpremVmwareClusterFleetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.get"></a>

```java
public GoogleGkeonpremVmwareClusterFleetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleGkeonpremVmwareClusterFleetOutputReference <a name="GoogleGkeonpremVmwareClusterFleetOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterFleetOutputReference;

new GoogleGkeonpremVmwareClusterFleetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.property.membership">membership</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleet">GoogleGkeonpremVmwareClusterFleet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `membership`<sup>Required</sup> <a name="membership" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.property.membership"></a>

```java
public java.lang.String getMembership();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.property.internalValue"></a>

```java
public GoogleGkeonpremVmwareClusterFleet getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleet">GoogleGkeonpremVmwareClusterFleet</a>

---


### GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference <a name="GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference;

new GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resetSnatPool">resetSnatPool</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resetAddress"></a>

```java
public void resetAddress()
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resetPartition"></a>

```java
public void resetPartition()
```

##### `resetSnatPool` <a name="resetSnatPool" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resetSnatPool"></a>

```java
public void resetSnatPool()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.partitionInput">partitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.snatPoolInput">snatPoolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.partition">partition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.snatPool">snatPool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config">GoogleGkeonpremVmwareClusterLoadBalancerF5Config</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.partitionInput"></a>

```java
public java.lang.String getPartitionInput();
```

- *Type:* java.lang.String

---

##### `snatPoolInput`<sup>Optional</sup> <a name="snatPoolInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.snatPoolInput"></a>

```java
public java.lang.String getSnatPoolInput();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.partition"></a>

```java
public java.lang.String getPartition();
```

- *Type:* java.lang.String

---

##### `snatPool`<sup>Required</sup> <a name="snatPool" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.snatPool"></a>

```java
public java.lang.String getSnatPool();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.internalValue"></a>

```java
public GoogleGkeonpremVmwareClusterLoadBalancerF5Config getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config">GoogleGkeonpremVmwareClusterLoadBalancerF5Config</a>

---


### GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference <a name="GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference;

new GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resetControlPlaneNodePort">resetControlPlaneNodePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resetIngressHttpNodePort">resetIngressHttpNodePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resetIngressHttpsNodePort">resetIngressHttpsNodePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resetKonnectivityServerNodePort">resetKonnectivityServerNodePort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetControlPlaneNodePort` <a name="resetControlPlaneNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resetControlPlaneNodePort"></a>

```java
public void resetControlPlaneNodePort()
```

##### `resetIngressHttpNodePort` <a name="resetIngressHttpNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resetIngressHttpNodePort"></a>

```java
public void resetIngressHttpNodePort()
```

##### `resetIngressHttpsNodePort` <a name="resetIngressHttpsNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resetIngressHttpsNodePort"></a>

```java
public void resetIngressHttpsNodePort()
```

##### `resetKonnectivityServerNodePort` <a name="resetKonnectivityServerNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resetKonnectivityServerNodePort"></a>

```java
public void resetKonnectivityServerNodePort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.controlPlaneNodePortInput">controlPlaneNodePortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpNodePortInput">ingressHttpNodePortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpsNodePortInput">ingressHttpsNodePortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.konnectivityServerNodePortInput">konnectivityServerNodePortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.controlPlaneNodePort">controlPlaneNodePort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpNodePort">ingressHttpNodePort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpsNodePort">ingressHttpsNodePort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.konnectivityServerNodePort">konnectivityServerNodePort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig">GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `controlPlaneNodePortInput`<sup>Optional</sup> <a name="controlPlaneNodePortInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.controlPlaneNodePortInput"></a>

```java
public java.lang.Number getControlPlaneNodePortInput();
```

- *Type:* java.lang.Number

---

##### `ingressHttpNodePortInput`<sup>Optional</sup> <a name="ingressHttpNodePortInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpNodePortInput"></a>

```java
public java.lang.Number getIngressHttpNodePortInput();
```

- *Type:* java.lang.Number

---

##### `ingressHttpsNodePortInput`<sup>Optional</sup> <a name="ingressHttpsNodePortInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpsNodePortInput"></a>

```java
public java.lang.Number getIngressHttpsNodePortInput();
```

- *Type:* java.lang.Number

---

##### `konnectivityServerNodePortInput`<sup>Optional</sup> <a name="konnectivityServerNodePortInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.konnectivityServerNodePortInput"></a>

```java
public java.lang.Number getKonnectivityServerNodePortInput();
```

- *Type:* java.lang.Number

---

##### `controlPlaneNodePort`<sup>Required</sup> <a name="controlPlaneNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.controlPlaneNodePort"></a>

```java
public java.lang.Number getControlPlaneNodePort();
```

- *Type:* java.lang.Number

---

##### `ingressHttpNodePort`<sup>Required</sup> <a name="ingressHttpNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpNodePort"></a>

```java
public java.lang.Number getIngressHttpNodePort();
```

- *Type:* java.lang.Number

---

##### `ingressHttpsNodePort`<sup>Required</sup> <a name="ingressHttpsNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpsNodePort"></a>

```java
public java.lang.Number getIngressHttpsNodePort();
```

- *Type:* java.lang.Number

---

##### `konnectivityServerNodePort`<sup>Required</sup> <a name="konnectivityServerNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.konnectivityServerNodePort"></a>

```java
public java.lang.Number getKonnectivityServerNodePort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.internalValue"></a>

```java
public GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig">GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig</a>

---


### GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList <a name="GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList;

new GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.get"></a>

```java
public GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools</a>>

---


### GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference <a name="GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference;

new GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.resetAvoidBuggyIps">resetAvoidBuggyIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.resetManualAssign">resetManualAssign</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvoidBuggyIps` <a name="resetAvoidBuggyIps" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.resetAvoidBuggyIps"></a>

```java
public void resetAvoidBuggyIps()
```

##### `resetManualAssign` <a name="resetManualAssign" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.resetManualAssign"></a>

```java
public void resetManualAssign()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.addressesInput">addressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.avoidBuggyIpsInput">avoidBuggyIpsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.manualAssignInput">manualAssignInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.poolInput">poolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.addresses">addresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.avoidBuggyIps">avoidBuggyIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.manualAssign">manualAssign</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.pool">pool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressesInput`<sup>Optional</sup> <a name="addressesInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.addressesInput"></a>

```java
public java.util.List<java.lang.String> getAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `avoidBuggyIpsInput`<sup>Optional</sup> <a name="avoidBuggyIpsInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.avoidBuggyIpsInput"></a>

```java
public java.lang.Object getAvoidBuggyIpsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `manualAssignInput`<sup>Optional</sup> <a name="manualAssignInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.manualAssignInput"></a>

```java
public java.lang.Object getManualAssignInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `poolInput`<sup>Optional</sup> <a name="poolInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.poolInput"></a>

```java
public java.lang.String getPoolInput();
```

- *Type:* java.lang.String

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.addresses"></a>

```java
public java.util.List<java.lang.String> getAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `avoidBuggyIps`<sup>Required</sup> <a name="avoidBuggyIps" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.avoidBuggyIps"></a>

```java
public java.lang.Object getAvoidBuggyIps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `manualAssign`<sup>Required</sup> <a name="manualAssign" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.manualAssign"></a>

```java
public java.lang.Object getManualAssign();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pool`<sup>Required</sup> <a name="pool" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.pool"></a>

```java
public java.lang.String getPool();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools</a>

---


### GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference <a name="GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference;

new GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.putAddressPools">putAddressPools</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAddressPools` <a name="putAddressPools" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.putAddressPools"></a>

```java
public void putAddressPools(IResolvable OR java.util.List<GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.putAddressPools.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.addressPools">addressPools</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.addressPoolsInput">addressPoolsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressPools`<sup>Required</sup> <a name="addressPools" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.addressPools"></a>

```java
public GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList getAddressPools();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList</a>

---

##### `addressPoolsInput`<sup>Optional</sup> <a name="addressPoolsInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.addressPoolsInput"></a>

```java
public java.lang.Object getAddressPoolsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.internalValue"></a>

```java
public GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig</a>

---


### GoogleGkeonpremVmwareClusterLoadBalancerOutputReference <a name="GoogleGkeonpremVmwareClusterLoadBalancerOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference;

new GoogleGkeonpremVmwareClusterLoadBalancerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.putF5Config">putF5Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.putManualLbConfig">putManualLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.putMetalLbConfig">putMetalLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.putVipConfig">putVipConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.resetF5Config">resetF5Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.resetManualLbConfig">resetManualLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.resetMetalLbConfig">resetMetalLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.resetVipConfig">resetVipConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putF5Config` <a name="putF5Config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.putF5Config"></a>

```java
public void putF5Config(GoogleGkeonpremVmwareClusterLoadBalancerF5Config value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.putF5Config.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config">GoogleGkeonpremVmwareClusterLoadBalancerF5Config</a>

---

##### `putManualLbConfig` <a name="putManualLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.putManualLbConfig"></a>

```java
public void putManualLbConfig(GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.putManualLbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig">GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig</a>

---

##### `putMetalLbConfig` <a name="putMetalLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.putMetalLbConfig"></a>

```java
public void putMetalLbConfig(GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.putMetalLbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig</a>

---

##### `putVipConfig` <a name="putVipConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.putVipConfig"></a>

```java
public void putVipConfig(GoogleGkeonpremVmwareClusterLoadBalancerVipConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.putVipConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig">GoogleGkeonpremVmwareClusterLoadBalancerVipConfig</a>

---

##### `resetF5Config` <a name="resetF5Config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.resetF5Config"></a>

```java
public void resetF5Config()
```

##### `resetManualLbConfig` <a name="resetManualLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.resetManualLbConfig"></a>

```java
public void resetManualLbConfig()
```

##### `resetMetalLbConfig` <a name="resetMetalLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.resetMetalLbConfig"></a>

```java
public void resetMetalLbConfig()
```

##### `resetVipConfig` <a name="resetVipConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.resetVipConfig"></a>

```java
public void resetVipConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.f5Config">f5Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference">GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.manualLbConfig">manualLbConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference">GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.metalLbConfig">metalLbConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.vipConfig">vipConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference">GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.f5ConfigInput">f5ConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config">GoogleGkeonpremVmwareClusterLoadBalancerF5Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.manualLbConfigInput">manualLbConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig">GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.metalLbConfigInput">metalLbConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.vipConfigInput">vipConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig">GoogleGkeonpremVmwareClusterLoadBalancerVipConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer">GoogleGkeonpremVmwareClusterLoadBalancer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `f5Config`<sup>Required</sup> <a name="f5Config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.f5Config"></a>

```java
public GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference getF5Config();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference">GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference</a>

---

##### `manualLbConfig`<sup>Required</sup> <a name="manualLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.manualLbConfig"></a>

```java
public GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference getManualLbConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference">GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference</a>

---

##### `metalLbConfig`<sup>Required</sup> <a name="metalLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.metalLbConfig"></a>

```java
public GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference getMetalLbConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference</a>

---

##### `vipConfig`<sup>Required</sup> <a name="vipConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.vipConfig"></a>

```java
public GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference getVipConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference">GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference</a>

---

##### `f5ConfigInput`<sup>Optional</sup> <a name="f5ConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.f5ConfigInput"></a>

```java
public GoogleGkeonpremVmwareClusterLoadBalancerF5Config getF5ConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config">GoogleGkeonpremVmwareClusterLoadBalancerF5Config</a>

---

##### `manualLbConfigInput`<sup>Optional</sup> <a name="manualLbConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.manualLbConfigInput"></a>

```java
public GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig getManualLbConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig">GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig</a>

---

##### `metalLbConfigInput`<sup>Optional</sup> <a name="metalLbConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.metalLbConfigInput"></a>

```java
public GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig getMetalLbConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig</a>

---

##### `vipConfigInput`<sup>Optional</sup> <a name="vipConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.vipConfigInput"></a>

```java
public GoogleGkeonpremVmwareClusterLoadBalancerVipConfig getVipConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig">GoogleGkeonpremVmwareClusterLoadBalancerVipConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.internalValue"></a>

```java
public GoogleGkeonpremVmwareClusterLoadBalancer getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer">GoogleGkeonpremVmwareClusterLoadBalancer</a>

---


### GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference <a name="GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference;

new GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.resetControlPlaneVip">resetControlPlaneVip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.resetIngressVip">resetIngressVip</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetControlPlaneVip` <a name="resetControlPlaneVip" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.resetControlPlaneVip"></a>

```java
public void resetControlPlaneVip()
```

##### `resetIngressVip` <a name="resetIngressVip" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.resetIngressVip"></a>

```java
public void resetIngressVip()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVipInput">controlPlaneVipInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.ingressVipInput">ingressVipInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVip">controlPlaneVip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.ingressVip">ingressVip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig">GoogleGkeonpremVmwareClusterLoadBalancerVipConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `controlPlaneVipInput`<sup>Optional</sup> <a name="controlPlaneVipInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVipInput"></a>

```java
public java.lang.String getControlPlaneVipInput();
```

- *Type:* java.lang.String

---

##### `ingressVipInput`<sup>Optional</sup> <a name="ingressVipInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.ingressVipInput"></a>

```java
public java.lang.String getIngressVipInput();
```

- *Type:* java.lang.String

---

##### `controlPlaneVip`<sup>Required</sup> <a name="controlPlaneVip" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVip"></a>

```java
public java.lang.String getControlPlaneVip();
```

- *Type:* java.lang.String

---

##### `ingressVip`<sup>Required</sup> <a name="ingressVip" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.ingressVip"></a>

```java
public java.lang.String getIngressVip();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.internalValue"></a>

```java
public GoogleGkeonpremVmwareClusterLoadBalancerVipConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig">GoogleGkeonpremVmwareClusterLoadBalancerVipConfig</a>

---


### GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList <a name="GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList;

new GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.get"></a>

```java
public GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps</a>>

---


### GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference <a name="GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference;

new GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.resetIp">resetIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.resetHostname"></a>

```java
public void resetHostname()
```

##### `resetIp` <a name="resetIp" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.resetIp"></a>

```java
public void resetIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.ipInput">ipInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.ip">ip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.ipInput"></a>

```java
public java.lang.String getIpInput();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps</a>

---


### GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference <a name="GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference;

new GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.putIps">putIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resetGateway">resetGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resetIps">resetIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resetNetmask">resetNetmask</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIps` <a name="putIps" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.putIps"></a>

```java
public void putIps(IResolvable OR java.util.List<GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.putIps.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps</a>>

---

##### `resetGateway` <a name="resetGateway" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resetGateway"></a>

```java
public void resetGateway()
```

##### `resetIps` <a name="resetIps" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resetIps"></a>

```java
public void resetIps()
```

##### `resetNetmask` <a name="resetNetmask" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resetNetmask"></a>

```java
public void resetNetmask()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.ips">ips</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.gatewayInput">gatewayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.ipsInput">ipsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.netmaskInput">netmaskInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.gateway">gateway</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.netmask">netmask</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ips`<sup>Required</sup> <a name="ips" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.ips"></a>

```java
public GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList getIps();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList</a>

---

##### `gatewayInput`<sup>Optional</sup> <a name="gatewayInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.gatewayInput"></a>

```java
public java.lang.String getGatewayInput();
```

- *Type:* java.lang.String

---

##### `ipsInput`<sup>Optional</sup> <a name="ipsInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.ipsInput"></a>

```java
public java.lang.Object getIpsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps</a>>

---

##### `netmaskInput`<sup>Optional</sup> <a name="netmaskInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.netmaskInput"></a>

```java
public java.lang.String getNetmaskInput();
```

- *Type:* java.lang.String

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.gateway"></a>

```java
public java.lang.String getGateway();
```

- *Type:* java.lang.String

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.netmask"></a>

```java
public java.lang.String getNetmask();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.internalValue"></a>

```java
public GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock</a>

---


### GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference <a name="GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference;

new GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.putControlPlaneIpBlock">putControlPlaneIpBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.resetControlPlaneIpBlock">resetControlPlaneIpBlock</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putControlPlaneIpBlock` <a name="putControlPlaneIpBlock" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.putControlPlaneIpBlock"></a>

```java
public void putControlPlaneIpBlock(GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.putControlPlaneIpBlock.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock</a>

---

##### `resetControlPlaneIpBlock` <a name="resetControlPlaneIpBlock" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.resetControlPlaneIpBlock"></a>

```java
public void resetControlPlaneIpBlock()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.controlPlaneIpBlock">controlPlaneIpBlock</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.controlPlaneIpBlockInput">controlPlaneIpBlockInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `controlPlaneIpBlock`<sup>Required</sup> <a name="controlPlaneIpBlock" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.controlPlaneIpBlock"></a>

```java
public GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference getControlPlaneIpBlock();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference</a>

---

##### `controlPlaneIpBlockInput`<sup>Optional</sup> <a name="controlPlaneIpBlockInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.controlPlaneIpBlockInput"></a>

```java
public GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock getControlPlaneIpBlockInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.internalValue"></a>

```java
public GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config</a>

---


### GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference <a name="GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference;

new GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig">GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.internalValue"></a>

```java
public GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig">GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig</a>

---


### GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference <a name="GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference;

new GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resetDnsSearchDomains">resetDnsSearchDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resetDnsServers">resetDnsServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resetNtpServers">resetNtpServers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDnsSearchDomains` <a name="resetDnsSearchDomains" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resetDnsSearchDomains"></a>

```java
public void resetDnsSearchDomains()
```

##### `resetDnsServers` <a name="resetDnsServers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resetDnsServers"></a>

```java
public void resetDnsServers()
```

##### `resetNtpServers` <a name="resetNtpServers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resetNtpServers"></a>

```java
public void resetNtpServers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.dnsSearchDomainsInput">dnsSearchDomainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.dnsServersInput">dnsServersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.ntpServersInput">ntpServersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.dnsSearchDomains">dnsSearchDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.dnsServers">dnsServers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.ntpServers">ntpServers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig">GoogleGkeonpremVmwareClusterNetworkConfigHostConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dnsSearchDomainsInput`<sup>Optional</sup> <a name="dnsSearchDomainsInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.dnsSearchDomainsInput"></a>

```java
public java.util.List<java.lang.String> getDnsSearchDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dnsServersInput`<sup>Optional</sup> <a name="dnsServersInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.dnsServersInput"></a>

```java
public java.util.List<java.lang.String> getDnsServersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ntpServersInput`<sup>Optional</sup> <a name="ntpServersInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.ntpServersInput"></a>

```java
public java.util.List<java.lang.String> getNtpServersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dnsSearchDomains`<sup>Required</sup> <a name="dnsSearchDomains" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.dnsSearchDomains"></a>

```java
public java.util.List<java.lang.String> getDnsSearchDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dnsServers`<sup>Required</sup> <a name="dnsServers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.dnsServers"></a>

```java
public java.util.List<java.lang.String> getDnsServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ntpServers`<sup>Required</sup> <a name="ntpServers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.ntpServers"></a>

```java
public java.util.List<java.lang.String> getNtpServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.internalValue"></a>

```java
public GoogleGkeonpremVmwareClusterNetworkConfigHostConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig">GoogleGkeonpremVmwareClusterNetworkConfigHostConfig</a>

---


### GoogleGkeonpremVmwareClusterNetworkConfigOutputReference <a name="GoogleGkeonpremVmwareClusterNetworkConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference;

new GoogleGkeonpremVmwareClusterNetworkConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.putControlPlaneV2Config">putControlPlaneV2Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.putDhcpIpConfig">putDhcpIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.putHostConfig">putHostConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.putStaticIpConfig">putStaticIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.resetControlPlaneV2Config">resetControlPlaneV2Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.resetDhcpIpConfig">resetDhcpIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.resetHostConfig">resetHostConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.resetStaticIpConfig">resetStaticIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.resetVcenterNetwork">resetVcenterNetwork</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putControlPlaneV2Config` <a name="putControlPlaneV2Config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.putControlPlaneV2Config"></a>

```java
public void putControlPlaneV2Config(GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.putControlPlaneV2Config.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config</a>

---

##### `putDhcpIpConfig` <a name="putDhcpIpConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.putDhcpIpConfig"></a>

```java
public void putDhcpIpConfig(GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.putDhcpIpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig">GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig</a>

---

##### `putHostConfig` <a name="putHostConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.putHostConfig"></a>

```java
public void putHostConfig(GoogleGkeonpremVmwareClusterNetworkConfigHostConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.putHostConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig">GoogleGkeonpremVmwareClusterNetworkConfigHostConfig</a>

---

##### `putStaticIpConfig` <a name="putStaticIpConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.putStaticIpConfig"></a>

```java
public void putStaticIpConfig(GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.putStaticIpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig</a>

---

##### `resetControlPlaneV2Config` <a name="resetControlPlaneV2Config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.resetControlPlaneV2Config"></a>

```java
public void resetControlPlaneV2Config()
```

##### `resetDhcpIpConfig` <a name="resetDhcpIpConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.resetDhcpIpConfig"></a>

```java
public void resetDhcpIpConfig()
```

##### `resetHostConfig` <a name="resetHostConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.resetHostConfig"></a>

```java
public void resetHostConfig()
```

##### `resetStaticIpConfig` <a name="resetStaticIpConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.resetStaticIpConfig"></a>

```java
public void resetStaticIpConfig()
```

##### `resetVcenterNetwork` <a name="resetVcenterNetwork" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.resetVcenterNetwork"></a>

```java
public void resetVcenterNetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.controlPlaneV2Config">controlPlaneV2Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.dhcpIpConfig">dhcpIpConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference">GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.hostConfig">hostConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference">GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.staticIpConfig">staticIpConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.controlPlaneV2ConfigInput">controlPlaneV2ConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.dhcpIpConfigInput">dhcpIpConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig">GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.hostConfigInput">hostConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig">GoogleGkeonpremVmwareClusterNetworkConfigHostConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.podAddressCidrBlocksInput">podAddressCidrBlocksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.serviceAddressCidrBlocksInput">serviceAddressCidrBlocksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.staticIpConfigInput">staticIpConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.vcenterNetworkInput">vcenterNetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.podAddressCidrBlocks">podAddressCidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.serviceAddressCidrBlocks">serviceAddressCidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.vcenterNetwork">vcenterNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig">GoogleGkeonpremVmwareClusterNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `controlPlaneV2Config`<sup>Required</sup> <a name="controlPlaneV2Config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.controlPlaneV2Config"></a>

```java
public GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference getControlPlaneV2Config();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference</a>

---

##### `dhcpIpConfig`<sup>Required</sup> <a name="dhcpIpConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.dhcpIpConfig"></a>

```java
public GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference getDhcpIpConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference">GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference</a>

---

##### `hostConfig`<sup>Required</sup> <a name="hostConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.hostConfig"></a>

```java
public GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference getHostConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference">GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference</a>

---

##### `staticIpConfig`<sup>Required</sup> <a name="staticIpConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.staticIpConfig"></a>

```java
public GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference getStaticIpConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference</a>

---

##### `controlPlaneV2ConfigInput`<sup>Optional</sup> <a name="controlPlaneV2ConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.controlPlaneV2ConfigInput"></a>

```java
public GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config getControlPlaneV2ConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config</a>

---

##### `dhcpIpConfigInput`<sup>Optional</sup> <a name="dhcpIpConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.dhcpIpConfigInput"></a>

```java
public GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig getDhcpIpConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig">GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig</a>

---

##### `hostConfigInput`<sup>Optional</sup> <a name="hostConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.hostConfigInput"></a>

```java
public GoogleGkeonpremVmwareClusterNetworkConfigHostConfig getHostConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig">GoogleGkeonpremVmwareClusterNetworkConfigHostConfig</a>

---

##### `podAddressCidrBlocksInput`<sup>Optional</sup> <a name="podAddressCidrBlocksInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.podAddressCidrBlocksInput"></a>

```java
public java.util.List<java.lang.String> getPodAddressCidrBlocksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceAddressCidrBlocksInput`<sup>Optional</sup> <a name="serviceAddressCidrBlocksInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.serviceAddressCidrBlocksInput"></a>

```java
public java.util.List<java.lang.String> getServiceAddressCidrBlocksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `staticIpConfigInput`<sup>Optional</sup> <a name="staticIpConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.staticIpConfigInput"></a>

```java
public GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig getStaticIpConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig</a>

---

##### `vcenterNetworkInput`<sup>Optional</sup> <a name="vcenterNetworkInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.vcenterNetworkInput"></a>

```java
public java.lang.String getVcenterNetworkInput();
```

- *Type:* java.lang.String

---

##### `podAddressCidrBlocks`<sup>Required</sup> <a name="podAddressCidrBlocks" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.podAddressCidrBlocks"></a>

```java
public java.util.List<java.lang.String> getPodAddressCidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceAddressCidrBlocks`<sup>Required</sup> <a name="serviceAddressCidrBlocks" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.serviceAddressCidrBlocks"></a>

```java
public java.util.List<java.lang.String> getServiceAddressCidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vcenterNetwork`<sup>Required</sup> <a name="vcenterNetwork" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.vcenterNetwork"></a>

```java
public java.lang.String getVcenterNetwork();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.internalValue"></a>

```java
public GoogleGkeonpremVmwareClusterNetworkConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig">GoogleGkeonpremVmwareClusterNetworkConfig</a>

---


### GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList <a name="GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList;

new GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.get"></a>

```java
public GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps</a>>

---


### GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference <a name="GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference;

new GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resetHostname">resetHostname</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resetHostname"></a>

```java
public void resetHostname()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.ipInput">ipInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.ip">ip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.ipInput"></a>

```java
public java.lang.String getIpInput();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps</a>

---


### GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList <a name="GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList;

new GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.get"></a>

```java
public GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks</a>>

---


### GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference <a name="GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference;

new GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.putIps">putIps</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIps` <a name="putIps" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.putIps"></a>

```java
public void putIps(IResolvable OR java.util.List<GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.putIps.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.ips">ips</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.gatewayInput">gatewayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.ipsInput">ipsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.netmaskInput">netmaskInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.gateway">gateway</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.netmask">netmask</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ips`<sup>Required</sup> <a name="ips" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.ips"></a>

```java
public GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList getIps();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList</a>

---

##### `gatewayInput`<sup>Optional</sup> <a name="gatewayInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.gatewayInput"></a>

```java
public java.lang.String getGatewayInput();
```

- *Type:* java.lang.String

---

##### `ipsInput`<sup>Optional</sup> <a name="ipsInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.ipsInput"></a>

```java
public java.lang.Object getIpsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps</a>>

---

##### `netmaskInput`<sup>Optional</sup> <a name="netmaskInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.netmaskInput"></a>

```java
public java.lang.String getNetmaskInput();
```

- *Type:* java.lang.String

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.gateway"></a>

```java
public java.lang.String getGateway();
```

- *Type:* java.lang.String

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.netmask"></a>

```java
public java.lang.String getNetmask();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks</a>

---


### GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference <a name="GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference;

new GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.putIpBlocks">putIpBlocks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpBlocks` <a name="putIpBlocks" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.putIpBlocks"></a>

```java
public void putIpBlocks(IResolvable OR java.util.List<GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.putIpBlocks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.ipBlocks">ipBlocks</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.ipBlocksInput">ipBlocksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipBlocks`<sup>Required</sup> <a name="ipBlocks" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.ipBlocks"></a>

```java
public GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList getIpBlocks();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList</a>

---

##### `ipBlocksInput`<sup>Optional</sup> <a name="ipBlocksInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.ipBlocksInput"></a>

```java
public java.lang.Object getIpBlocksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.internalValue"></a>

```java
public GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig</a>

---


### GoogleGkeonpremVmwareClusterStatusConditionsList <a name="GoogleGkeonpremVmwareClusterStatusConditionsList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterStatusConditionsList;

new GoogleGkeonpremVmwareClusterStatusConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.get"></a>

```java
public GoogleGkeonpremVmwareClusterStatusConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleGkeonpremVmwareClusterStatusConditionsOutputReference <a name="GoogleGkeonpremVmwareClusterStatusConditionsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference;

new GoogleGkeonpremVmwareClusterStatusConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.lastTransitionTime">lastTransitionTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.reason">reason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditions">GoogleGkeonpremVmwareClusterStatusConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lastTransitionTime`<sup>Required</sup> <a name="lastTransitionTime" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.lastTransitionTime"></a>

```java
public java.lang.String getLastTransitionTime();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.internalValue"></a>

```java
public GoogleGkeonpremVmwareClusterStatusConditions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditions">GoogleGkeonpremVmwareClusterStatusConditions</a>

---


### GoogleGkeonpremVmwareClusterStatusList <a name="GoogleGkeonpremVmwareClusterStatusList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterStatusList;

new GoogleGkeonpremVmwareClusterStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.get"></a>

```java
public GoogleGkeonpremVmwareClusterStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleGkeonpremVmwareClusterStatusOutputReference <a name="GoogleGkeonpremVmwareClusterStatusOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterStatusOutputReference;

new GoogleGkeonpremVmwareClusterStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList">GoogleGkeonpremVmwareClusterStatusConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.property.errorMessage">errorMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatus">GoogleGkeonpremVmwareClusterStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.property.conditions"></a>

```java
public GoogleGkeonpremVmwareClusterStatusConditionsList getConditions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList">GoogleGkeonpremVmwareClusterStatusConditionsList</a>

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.property.errorMessage"></a>

```java
public java.lang.String getErrorMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.property.internalValue"></a>

```java
public GoogleGkeonpremVmwareClusterStatus getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatus">GoogleGkeonpremVmwareClusterStatus</a>

---


### GoogleGkeonpremVmwareClusterStorageOutputReference <a name="GoogleGkeonpremVmwareClusterStorageOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterStorageOutputReference;

new GoogleGkeonpremVmwareClusterStorageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.property.vsphereCsiDisabledInput">vsphereCsiDisabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.property.vsphereCsiDisabled">vsphereCsiDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorage">GoogleGkeonpremVmwareClusterStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vsphereCsiDisabledInput`<sup>Optional</sup> <a name="vsphereCsiDisabledInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.property.vsphereCsiDisabledInput"></a>

```java
public java.lang.Object getVsphereCsiDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vsphereCsiDisabled`<sup>Required</sup> <a name="vsphereCsiDisabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.property.vsphereCsiDisabled"></a>

```java
public java.lang.Object getVsphereCsiDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.property.internalValue"></a>

```java
public GoogleGkeonpremVmwareClusterStorage getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorage">GoogleGkeonpremVmwareClusterStorage</a>

---


### GoogleGkeonpremVmwareClusterTimeoutsOutputReference <a name="GoogleGkeonpremVmwareClusterTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference;

new GoogleGkeonpremVmwareClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts">GoogleGkeonpremVmwareClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts">GoogleGkeonpremVmwareClusterTimeouts</a>

---


### GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference <a name="GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference;

new GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.resetControlPlaneOnly">resetControlPlaneOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetControlPlaneOnly` <a name="resetControlPlaneOnly" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.resetControlPlaneOnly"></a>

```java
public void resetControlPlaneOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.property.controlPlaneOnlyInput">controlPlaneOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.property.controlPlaneOnly">controlPlaneOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicy">GoogleGkeonpremVmwareClusterUpgradePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `controlPlaneOnlyInput`<sup>Optional</sup> <a name="controlPlaneOnlyInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.property.controlPlaneOnlyInput"></a>

```java
public java.lang.Object getControlPlaneOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `controlPlaneOnly`<sup>Required</sup> <a name="controlPlaneOnly" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.property.controlPlaneOnly"></a>

```java
public java.lang.Object getControlPlaneOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.property.internalValue"></a>

```java
public GoogleGkeonpremVmwareClusterUpgradePolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicy">GoogleGkeonpremVmwareClusterUpgradePolicy</a>

---


### GoogleGkeonpremVmwareClusterValidationCheckList <a name="GoogleGkeonpremVmwareClusterValidationCheckList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterValidationCheckList;

new GoogleGkeonpremVmwareClusterValidationCheckList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.get"></a>

```java
public GoogleGkeonpremVmwareClusterValidationCheckOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleGkeonpremVmwareClusterValidationCheckOutputReference <a name="GoogleGkeonpremVmwareClusterValidationCheckOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference;

new GoogleGkeonpremVmwareClusterValidationCheckOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.property.options">options</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.property.scenario">scenario</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.property.status">status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList">GoogleGkeonpremVmwareClusterValidationCheckStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheck">GoogleGkeonpremVmwareClusterValidationCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.property.options"></a>

```java
public java.lang.String getOptions();
```

- *Type:* java.lang.String

---

##### `scenario`<sup>Required</sup> <a name="scenario" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.property.scenario"></a>

```java
public java.lang.String getScenario();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.property.status"></a>

```java
public GoogleGkeonpremVmwareClusterValidationCheckStatusList getStatus();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList">GoogleGkeonpremVmwareClusterValidationCheckStatusList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.property.internalValue"></a>

```java
public GoogleGkeonpremVmwareClusterValidationCheck getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheck">GoogleGkeonpremVmwareClusterValidationCheck</a>

---


### GoogleGkeonpremVmwareClusterValidationCheckStatusList <a name="GoogleGkeonpremVmwareClusterValidationCheckStatusList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList;

new GoogleGkeonpremVmwareClusterValidationCheckStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.get"></a>

```java
public GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference <a name="GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference;

new GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.property.result">result</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList">GoogleGkeonpremVmwareClusterValidationCheckStatusResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatus">GoogleGkeonpremVmwareClusterValidationCheckStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.property.result"></a>

```java
public GoogleGkeonpremVmwareClusterValidationCheckStatusResultList getResult();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList">GoogleGkeonpremVmwareClusterValidationCheckStatusResultList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.property.internalValue"></a>

```java
public GoogleGkeonpremVmwareClusterValidationCheckStatus getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatus">GoogleGkeonpremVmwareClusterValidationCheckStatus</a>

---


### GoogleGkeonpremVmwareClusterValidationCheckStatusResultList <a name="GoogleGkeonpremVmwareClusterValidationCheckStatusResultList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList;

new GoogleGkeonpremVmwareClusterValidationCheckStatusResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.get"></a>

```java
public GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference <a name="GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference;

new GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.details">details</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.options">options</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.reason">reason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResult">GoogleGkeonpremVmwareClusterValidationCheckStatusResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.details"></a>

```java
public java.lang.String getDetails();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.options"></a>

```java
public java.lang.String getOptions();
```

- *Type:* java.lang.String

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.internalValue"></a>

```java
public GoogleGkeonpremVmwareClusterValidationCheckStatusResult getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResult">GoogleGkeonpremVmwareClusterValidationCheckStatusResult</a>

---


### GoogleGkeonpremVmwareClusterVcenterOutputReference <a name="GoogleGkeonpremVmwareClusterVcenterOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gkeonprem_vmware_cluster.GoogleGkeonpremVmwareClusterVcenterOutputReference;

new GoogleGkeonpremVmwareClusterVcenterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resetCaCertData">resetCaCertData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resetCluster">resetCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resetDatacenter">resetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resetDatastore">resetDatastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resetFolder">resetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resetResourcePool">resetResourcePool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resetStoragePolicyName">resetStoragePolicyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCaCertData` <a name="resetCaCertData" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resetCaCertData"></a>

```java
public void resetCaCertData()
```

##### `resetCluster` <a name="resetCluster" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resetCluster"></a>

```java
public void resetCluster()
```

##### `resetDatacenter` <a name="resetDatacenter" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resetDatacenter"></a>

```java
public void resetDatacenter()
```

##### `resetDatastore` <a name="resetDatastore" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resetDatastore"></a>

```java
public void resetDatastore()
```

##### `resetFolder` <a name="resetFolder" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resetFolder"></a>

```java
public void resetFolder()
```

##### `resetResourcePool` <a name="resetResourcePool" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resetResourcePool"></a>

```java
public void resetResourcePool()
```

##### `resetStoragePolicyName` <a name="resetStoragePolicyName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resetStoragePolicyName"></a>

```java
public void resetStoragePolicyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.caCertDataInput">caCertDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.clusterInput">clusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.datacenterInput">datacenterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.datastoreInput">datastoreInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.folderInput">folderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.resourcePoolInput">resourcePoolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.storagePolicyNameInput">storagePolicyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.caCertData">caCertData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.datacenter">datacenter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.datastore">datastore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.folder">folder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.resourcePool">resourcePool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.storagePolicyName">storagePolicyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter">GoogleGkeonpremVmwareClusterVcenter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `caCertDataInput`<sup>Optional</sup> <a name="caCertDataInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.caCertDataInput"></a>

```java
public java.lang.String getCaCertDataInput();
```

- *Type:* java.lang.String

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.clusterInput"></a>

```java
public java.lang.String getClusterInput();
```

- *Type:* java.lang.String

---

##### `datacenterInput`<sup>Optional</sup> <a name="datacenterInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.datacenterInput"></a>

```java
public java.lang.String getDatacenterInput();
```

- *Type:* java.lang.String

---

##### `datastoreInput`<sup>Optional</sup> <a name="datastoreInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.datastoreInput"></a>

```java
public java.lang.String getDatastoreInput();
```

- *Type:* java.lang.String

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.folderInput"></a>

```java
public java.lang.String getFolderInput();
```

- *Type:* java.lang.String

---

##### `resourcePoolInput`<sup>Optional</sup> <a name="resourcePoolInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.resourcePoolInput"></a>

```java
public java.lang.String getResourcePoolInput();
```

- *Type:* java.lang.String

---

##### `storagePolicyNameInput`<sup>Optional</sup> <a name="storagePolicyNameInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.storagePolicyNameInput"></a>

```java
public java.lang.String getStoragePolicyNameInput();
```

- *Type:* java.lang.String

---

##### `caCertData`<sup>Required</sup> <a name="caCertData" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.caCertData"></a>

```java
public java.lang.String getCaCertData();
```

- *Type:* java.lang.String

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.datacenter"></a>

```java
public java.lang.String getDatacenter();
```

- *Type:* java.lang.String

---

##### `datastore`<sup>Required</sup> <a name="datastore" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.datastore"></a>

```java
public java.lang.String getDatastore();
```

- *Type:* java.lang.String

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

---

##### `resourcePool`<sup>Required</sup> <a name="resourcePool" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.resourcePool"></a>

```java
public java.lang.String getResourcePool();
```

- *Type:* java.lang.String

---

##### `storagePolicyName`<sup>Required</sup> <a name="storagePolicyName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.storagePolicyName"></a>

```java
public java.lang.String getStoragePolicyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.internalValue"></a>

```java
public GoogleGkeonpremVmwareClusterVcenter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter">GoogleGkeonpremVmwareClusterVcenter</a>

---



