# `googleComputeInstanceGroupManager` Submodule <a name="`googleComputeInstanceGroupManager` Submodule" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeInstanceGroupManager <a name="GoogleComputeInstanceGroupManager" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager google_compute_instance_group_manager}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

new googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager(scope: Construct, id: string, config: GoogleComputeInstanceGroupManagerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig">GoogleComputeInstanceGroupManagerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig">GoogleComputeInstanceGroupManagerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putAllInstancesConfig">putAllInstancesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putAutoHealingPolicies">putAutoHealingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putInstanceLifecyclePolicy">putInstanceLifecyclePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putNamedPort">putNamedPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putParams">putParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStandbyPolicy">putStandbyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStatefulDisk">putStatefulDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStatefulExternalIp">putStatefulExternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStatefulInternalIp">putStatefulInternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putUpdatePolicy">putUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putVersion">putVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetAllInstancesConfig">resetAllInstancesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetAutoHealingPolicies">resetAutoHealingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetInstanceLifecyclePolicy">resetInstanceLifecyclePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetListManagedInstancesResults">resetListManagedInstancesResults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetNamedPort">resetNamedPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetParams">resetParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetStandbyPolicy">resetStandbyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetStatefulDisk">resetStatefulDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetStatefulExternalIp">resetStatefulExternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetStatefulInternalIp">resetStatefulInternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetTargetPools">resetTargetPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetTargetSize">resetTargetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetTargetStoppedSize">resetTargetStoppedSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetTargetSuspendedSize">resetTargetSuspendedSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetUpdatePolicy">resetUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetWaitForInstances">resetWaitForInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetWaitForInstancesStatus">resetWaitForInstancesStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAllInstancesConfig` <a name="putAllInstancesConfig" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putAllInstancesConfig"></a>

```typescript
public putAllInstancesConfig(value: GoogleComputeInstanceGroupManagerAllInstancesConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putAllInstancesConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig">GoogleComputeInstanceGroupManagerAllInstancesConfig</a>

---

##### `putAutoHealingPolicies` <a name="putAutoHealingPolicies" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putAutoHealingPolicies"></a>

```typescript
public putAutoHealingPolicies(value: GoogleComputeInstanceGroupManagerAutoHealingPolicies): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putAutoHealingPolicies.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies">GoogleComputeInstanceGroupManagerAutoHealingPolicies</a>

---

##### `putInstanceLifecyclePolicy` <a name="putInstanceLifecyclePolicy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putInstanceLifecyclePolicy"></a>

```typescript
public putInstanceLifecyclePolicy(value: GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putInstanceLifecyclePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy</a>

---

##### `putNamedPort` <a name="putNamedPort" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putNamedPort"></a>

```typescript
public putNamedPort(value: IResolvable | GoogleComputeInstanceGroupManagerNamedPort[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putNamedPort.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort">GoogleComputeInstanceGroupManagerNamedPort</a>[]

---

##### `putParams` <a name="putParams" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putParams"></a>

```typescript
public putParams(value: GoogleComputeInstanceGroupManagerParams): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putParams.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams">GoogleComputeInstanceGroupManagerParams</a>

---

##### `putStandbyPolicy` <a name="putStandbyPolicy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStandbyPolicy"></a>

```typescript
public putStandbyPolicy(value: GoogleComputeInstanceGroupManagerStandbyPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStandbyPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy">GoogleComputeInstanceGroupManagerStandbyPolicy</a>

---

##### `putStatefulDisk` <a name="putStatefulDisk" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStatefulDisk"></a>

```typescript
public putStatefulDisk(value: IResolvable | GoogleComputeInstanceGroupManagerStatefulDisk[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStatefulDisk.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk">GoogleComputeInstanceGroupManagerStatefulDisk</a>[]

---

##### `putStatefulExternalIp` <a name="putStatefulExternalIp" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStatefulExternalIp"></a>

```typescript
public putStatefulExternalIp(value: IResolvable | GoogleComputeInstanceGroupManagerStatefulExternalIp[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStatefulExternalIp.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp">GoogleComputeInstanceGroupManagerStatefulExternalIp</a>[]

---

##### `putStatefulInternalIp` <a name="putStatefulInternalIp" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStatefulInternalIp"></a>

```typescript
public putStatefulInternalIp(value: IResolvable | GoogleComputeInstanceGroupManagerStatefulInternalIp[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStatefulInternalIp.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp">GoogleComputeInstanceGroupManagerStatefulInternalIp</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeInstanceGroupManagerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts">GoogleComputeInstanceGroupManagerTimeouts</a>

---

##### `putUpdatePolicy` <a name="putUpdatePolicy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putUpdatePolicy"></a>

```typescript
public putUpdatePolicy(value: GoogleComputeInstanceGroupManagerUpdatePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putUpdatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy">GoogleComputeInstanceGroupManagerUpdatePolicy</a>

---

##### `putVersion` <a name="putVersion" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putVersion"></a>

```typescript
public putVersion(value: IResolvable | GoogleComputeInstanceGroupManagerVersion[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putVersion.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion">GoogleComputeInstanceGroupManagerVersion</a>[]

---

##### `resetAllInstancesConfig` <a name="resetAllInstancesConfig" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetAllInstancesConfig"></a>

```typescript
public resetAllInstancesConfig(): void
```

##### `resetAutoHealingPolicies` <a name="resetAutoHealingPolicies" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetAutoHealingPolicies"></a>

```typescript
public resetAutoHealingPolicies(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstanceLifecyclePolicy` <a name="resetInstanceLifecyclePolicy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetInstanceLifecyclePolicy"></a>

```typescript
public resetInstanceLifecyclePolicy(): void
```

##### `resetListManagedInstancesResults` <a name="resetListManagedInstancesResults" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetListManagedInstancesResults"></a>

```typescript
public resetListManagedInstancesResults(): void
```

##### `resetNamedPort` <a name="resetNamedPort" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetNamedPort"></a>

```typescript
public resetNamedPort(): void
```

##### `resetParams` <a name="resetParams" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetParams"></a>

```typescript
public resetParams(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetStandbyPolicy` <a name="resetStandbyPolicy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetStandbyPolicy"></a>

```typescript
public resetStandbyPolicy(): void
```

##### `resetStatefulDisk` <a name="resetStatefulDisk" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetStatefulDisk"></a>

```typescript
public resetStatefulDisk(): void
```

##### `resetStatefulExternalIp` <a name="resetStatefulExternalIp" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetStatefulExternalIp"></a>

```typescript
public resetStatefulExternalIp(): void
```

##### `resetStatefulInternalIp` <a name="resetStatefulInternalIp" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetStatefulInternalIp"></a>

```typescript
public resetStatefulInternalIp(): void
```

##### `resetTargetPools` <a name="resetTargetPools" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetTargetPools"></a>

```typescript
public resetTargetPools(): void
```

##### `resetTargetSize` <a name="resetTargetSize" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetTargetSize"></a>

```typescript
public resetTargetSize(): void
```

##### `resetTargetStoppedSize` <a name="resetTargetStoppedSize" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetTargetStoppedSize"></a>

```typescript
public resetTargetStoppedSize(): void
```

##### `resetTargetSuspendedSize` <a name="resetTargetSuspendedSize" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetTargetSuspendedSize"></a>

```typescript
public resetTargetSuspendedSize(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUpdatePolicy` <a name="resetUpdatePolicy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetUpdatePolicy"></a>

```typescript
public resetUpdatePolicy(): void
```

##### `resetWaitForInstances` <a name="resetWaitForInstances" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetWaitForInstances"></a>

```typescript
public resetWaitForInstances(): void
```

##### `resetWaitForInstancesStatus` <a name="resetWaitForInstancesStatus" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetWaitForInstancesStatus"></a>

```typescript
public resetWaitForInstancesStatus(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeInstanceGroupManager resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.isConstruct"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.isTerraformElement"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.isTerraformResource"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.generateConfigForImport"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleComputeInstanceGroupManager resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeInstanceGroupManager to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeInstanceGroupManager that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeInstanceGroupManager to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.allInstancesConfig">allInstancesConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference">GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.autoHealingPolicies">autoHealingPolicies</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference">GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.instanceGroup">instanceGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.instanceGroupManagerId">instanceGroupManagerId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.instanceLifecyclePolicy">instanceLifecyclePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.namedPort">namedPort</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList">GoogleComputeInstanceGroupManagerNamedPortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.operation">operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.params">params</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference">GoogleComputeInstanceGroupManagerParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.standbyPolicy">standbyPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference">GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulDisk">statefulDisk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList">GoogleComputeInstanceGroupManagerStatefulDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulExternalIp">statefulExternalIp</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList">GoogleComputeInstanceGroupManagerStatefulExternalIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulInternalIp">statefulInternalIp</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList">GoogleComputeInstanceGroupManagerStatefulInternalIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.status">status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList">GoogleComputeInstanceGroupManagerStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference">GoogleComputeInstanceGroupManagerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.updatePolicy">updatePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference">GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.version">version</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList">GoogleComputeInstanceGroupManagerVersionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.allInstancesConfigInput">allInstancesConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig">GoogleComputeInstanceGroupManagerAllInstancesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.autoHealingPoliciesInput">autoHealingPoliciesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies">GoogleComputeInstanceGroupManagerAutoHealingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.baseInstanceNameInput">baseInstanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.instanceLifecyclePolicyInput">instanceLifecyclePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.listManagedInstancesResultsInput">listManagedInstancesResultsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.namedPortInput">namedPortInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort">GoogleComputeInstanceGroupManagerNamedPort</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.paramsInput">paramsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams">GoogleComputeInstanceGroupManagerParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.standbyPolicyInput">standbyPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy">GoogleComputeInstanceGroupManagerStandbyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulDiskInput">statefulDiskInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk">GoogleComputeInstanceGroupManagerStatefulDisk</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulExternalIpInput">statefulExternalIpInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp">GoogleComputeInstanceGroupManagerStatefulExternalIp</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulInternalIpInput">statefulInternalIpInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp">GoogleComputeInstanceGroupManagerStatefulInternalIp</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetPoolsInput">targetPoolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetSizeInput">targetSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetStoppedSizeInput">targetStoppedSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetSuspendedSizeInput">targetSuspendedSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts">GoogleComputeInstanceGroupManagerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.updatePolicyInput">updatePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy">GoogleComputeInstanceGroupManagerUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.versionInput">versionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion">GoogleComputeInstanceGroupManagerVersion</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.waitForInstancesInput">waitForInstancesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.waitForInstancesStatusInput">waitForInstancesStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.baseInstanceName">baseInstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.listManagedInstancesResults">listManagedInstancesResults</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetPools">targetPools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetSize">targetSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetStoppedSize">targetStoppedSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetSuspendedSize">targetSuspendedSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.waitForInstances">waitForInstances</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.waitForInstancesStatus">waitForInstancesStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allInstancesConfig`<sup>Required</sup> <a name="allInstancesConfig" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.allInstancesConfig"></a>

```typescript
public readonly allInstancesConfig: GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference">GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference</a>

---

##### `autoHealingPolicies`<sup>Required</sup> <a name="autoHealingPolicies" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.autoHealingPolicies"></a>

```typescript
public readonly autoHealingPolicies: GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference">GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference</a>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `instanceGroup`<sup>Required</sup> <a name="instanceGroup" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.instanceGroup"></a>

```typescript
public readonly instanceGroup: string;
```

- *Type:* string

---

##### `instanceGroupManagerId`<sup>Required</sup> <a name="instanceGroupManagerId" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.instanceGroupManagerId"></a>

```typescript
public readonly instanceGroupManagerId: number;
```

- *Type:* number

---

##### `instanceLifecyclePolicy`<sup>Required</sup> <a name="instanceLifecyclePolicy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.instanceLifecyclePolicy"></a>

```typescript
public readonly instanceLifecyclePolicy: GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference</a>

---

##### `namedPort`<sup>Required</sup> <a name="namedPort" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.namedPort"></a>

```typescript
public readonly namedPort: GoogleComputeInstanceGroupManagerNamedPortList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList">GoogleComputeInstanceGroupManagerNamedPortList</a>

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.params"></a>

```typescript
public readonly params: GoogleComputeInstanceGroupManagerParamsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference">GoogleComputeInstanceGroupManagerParamsOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `standbyPolicy`<sup>Required</sup> <a name="standbyPolicy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.standbyPolicy"></a>

```typescript
public readonly standbyPolicy: GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference">GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference</a>

---

##### `statefulDisk`<sup>Required</sup> <a name="statefulDisk" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulDisk"></a>

```typescript
public readonly statefulDisk: GoogleComputeInstanceGroupManagerStatefulDiskList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList">GoogleComputeInstanceGroupManagerStatefulDiskList</a>

---

##### `statefulExternalIp`<sup>Required</sup> <a name="statefulExternalIp" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulExternalIp"></a>

```typescript
public readonly statefulExternalIp: GoogleComputeInstanceGroupManagerStatefulExternalIpList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList">GoogleComputeInstanceGroupManagerStatefulExternalIpList</a>

---

##### `statefulInternalIp`<sup>Required</sup> <a name="statefulInternalIp" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulInternalIp"></a>

```typescript
public readonly statefulInternalIp: GoogleComputeInstanceGroupManagerStatefulInternalIpList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList">GoogleComputeInstanceGroupManagerStatefulInternalIpList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.status"></a>

```typescript
public readonly status: GoogleComputeInstanceGroupManagerStatusList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList">GoogleComputeInstanceGroupManagerStatusList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeInstanceGroupManagerTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference">GoogleComputeInstanceGroupManagerTimeoutsOutputReference</a>

---

##### `updatePolicy`<sup>Required</sup> <a name="updatePolicy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.updatePolicy"></a>

```typescript
public readonly updatePolicy: GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference">GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.version"></a>

```typescript
public readonly version: GoogleComputeInstanceGroupManagerVersionList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList">GoogleComputeInstanceGroupManagerVersionList</a>

---

##### `allInstancesConfigInput`<sup>Optional</sup> <a name="allInstancesConfigInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.allInstancesConfigInput"></a>

```typescript
public readonly allInstancesConfigInput: GoogleComputeInstanceGroupManagerAllInstancesConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig">GoogleComputeInstanceGroupManagerAllInstancesConfig</a>

---

##### `autoHealingPoliciesInput`<sup>Optional</sup> <a name="autoHealingPoliciesInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.autoHealingPoliciesInput"></a>

```typescript
public readonly autoHealingPoliciesInput: GoogleComputeInstanceGroupManagerAutoHealingPolicies;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies">GoogleComputeInstanceGroupManagerAutoHealingPolicies</a>

---

##### `baseInstanceNameInput`<sup>Optional</sup> <a name="baseInstanceNameInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.baseInstanceNameInput"></a>

```typescript
public readonly baseInstanceNameInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceLifecyclePolicyInput`<sup>Optional</sup> <a name="instanceLifecyclePolicyInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.instanceLifecyclePolicyInput"></a>

```typescript
public readonly instanceLifecyclePolicyInput: GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy</a>

---

##### `listManagedInstancesResultsInput`<sup>Optional</sup> <a name="listManagedInstancesResultsInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.listManagedInstancesResultsInput"></a>

```typescript
public readonly listManagedInstancesResultsInput: string;
```

- *Type:* string

---

##### `namedPortInput`<sup>Optional</sup> <a name="namedPortInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.namedPortInput"></a>

```typescript
public readonly namedPortInput: IResolvable | GoogleComputeInstanceGroupManagerNamedPort[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort">GoogleComputeInstanceGroupManagerNamedPort</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `paramsInput`<sup>Optional</sup> <a name="paramsInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.paramsInput"></a>

```typescript
public readonly paramsInput: GoogleComputeInstanceGroupManagerParams;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams">GoogleComputeInstanceGroupManagerParams</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `standbyPolicyInput`<sup>Optional</sup> <a name="standbyPolicyInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.standbyPolicyInput"></a>

```typescript
public readonly standbyPolicyInput: GoogleComputeInstanceGroupManagerStandbyPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy">GoogleComputeInstanceGroupManagerStandbyPolicy</a>

---

##### `statefulDiskInput`<sup>Optional</sup> <a name="statefulDiskInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulDiskInput"></a>

```typescript
public readonly statefulDiskInput: IResolvable | GoogleComputeInstanceGroupManagerStatefulDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk">GoogleComputeInstanceGroupManagerStatefulDisk</a>[]

---

##### `statefulExternalIpInput`<sup>Optional</sup> <a name="statefulExternalIpInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulExternalIpInput"></a>

```typescript
public readonly statefulExternalIpInput: IResolvable | GoogleComputeInstanceGroupManagerStatefulExternalIp[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp">GoogleComputeInstanceGroupManagerStatefulExternalIp</a>[]

---

##### `statefulInternalIpInput`<sup>Optional</sup> <a name="statefulInternalIpInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulInternalIpInput"></a>

```typescript
public readonly statefulInternalIpInput: IResolvable | GoogleComputeInstanceGroupManagerStatefulInternalIp[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp">GoogleComputeInstanceGroupManagerStatefulInternalIp</a>[]

---

##### `targetPoolsInput`<sup>Optional</sup> <a name="targetPoolsInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetPoolsInput"></a>

```typescript
public readonly targetPoolsInput: string[];
```

- *Type:* string[]

---

##### `targetSizeInput`<sup>Optional</sup> <a name="targetSizeInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetSizeInput"></a>

```typescript
public readonly targetSizeInput: number;
```

- *Type:* number

---

##### `targetStoppedSizeInput`<sup>Optional</sup> <a name="targetStoppedSizeInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetStoppedSizeInput"></a>

```typescript
public readonly targetStoppedSizeInput: number;
```

- *Type:* number

---

##### `targetSuspendedSizeInput`<sup>Optional</sup> <a name="targetSuspendedSizeInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetSuspendedSizeInput"></a>

```typescript
public readonly targetSuspendedSizeInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeInstanceGroupManagerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts">GoogleComputeInstanceGroupManagerTimeouts</a>

---

##### `updatePolicyInput`<sup>Optional</sup> <a name="updatePolicyInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.updatePolicyInput"></a>

```typescript
public readonly updatePolicyInput: GoogleComputeInstanceGroupManagerUpdatePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy">GoogleComputeInstanceGroupManagerUpdatePolicy</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.versionInput"></a>

```typescript
public readonly versionInput: IResolvable | GoogleComputeInstanceGroupManagerVersion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion">GoogleComputeInstanceGroupManagerVersion</a>[]

---

##### `waitForInstancesInput`<sup>Optional</sup> <a name="waitForInstancesInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.waitForInstancesInput"></a>

```typescript
public readonly waitForInstancesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `waitForInstancesStatusInput`<sup>Optional</sup> <a name="waitForInstancesStatusInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.waitForInstancesStatusInput"></a>

```typescript
public readonly waitForInstancesStatusInput: string;
```

- *Type:* string

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `baseInstanceName`<sup>Required</sup> <a name="baseInstanceName" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.baseInstanceName"></a>

```typescript
public readonly baseInstanceName: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `listManagedInstancesResults`<sup>Required</sup> <a name="listManagedInstancesResults" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.listManagedInstancesResults"></a>

```typescript
public readonly listManagedInstancesResults: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `targetPools`<sup>Required</sup> <a name="targetPools" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetPools"></a>

```typescript
public readonly targetPools: string[];
```

- *Type:* string[]

---

##### `targetSize`<sup>Required</sup> <a name="targetSize" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetSize"></a>

```typescript
public readonly targetSize: number;
```

- *Type:* number

---

##### `targetStoppedSize`<sup>Required</sup> <a name="targetStoppedSize" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetStoppedSize"></a>

```typescript
public readonly targetStoppedSize: number;
```

- *Type:* number

---

##### `targetSuspendedSize`<sup>Required</sup> <a name="targetSuspendedSize" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetSuspendedSize"></a>

```typescript
public readonly targetSuspendedSize: number;
```

- *Type:* number

---

##### `waitForInstances`<sup>Required</sup> <a name="waitForInstances" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.waitForInstances"></a>

```typescript
public readonly waitForInstances: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `waitForInstancesStatus`<sup>Required</sup> <a name="waitForInstancesStatus" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.waitForInstancesStatus"></a>

```typescript
public readonly waitForInstancesStatus: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeInstanceGroupManagerAllInstancesConfig <a name="GoogleComputeInstanceGroupManagerAllInstancesConfig" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

const googleComputeInstanceGroupManagerAllInstancesConfig: googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The label key-value pairs that you want to patch onto the instance,. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | The metadata key-value pairs that you want to patch onto the instance. |

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The label key-value pairs that you want to patch onto the instance,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#labels GoogleComputeInstanceGroupManager#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The metadata key-value pairs that you want to patch onto the instance.

For more information, see Project and instance metadata,

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#metadata GoogleComputeInstanceGroupManager#metadata}

---

### GoogleComputeInstanceGroupManagerAutoHealingPolicies <a name="GoogleComputeInstanceGroupManagerAutoHealingPolicies" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

const googleComputeInstanceGroupManagerAutoHealingPolicies: googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies.property.healthCheck">healthCheck</a></code> | <code>string</code> | The health check resource that signals autohealing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies.property.initialDelaySec">initialDelaySec</a></code> | <code>number</code> | The number of seconds that the managed instance group waits before it applies autohealing policies to new instances or recently recreated instances. |

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies.property.healthCheck"></a>

```typescript
public readonly healthCheck: string;
```

- *Type:* string

The health check resource that signals autohealing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#health_check GoogleComputeInstanceGroupManager#health_check}

---

##### `initialDelaySec`<sup>Required</sup> <a name="initialDelaySec" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies.property.initialDelaySec"></a>

```typescript
public readonly initialDelaySec: number;
```

- *Type:* number

The number of seconds that the managed instance group waits before it applies autohealing policies to new instances or recently recreated instances.

Between 0 and 3600.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#initial_delay_sec GoogleComputeInstanceGroupManager#initial_delay_sec}

---

### GoogleComputeInstanceGroupManagerConfig <a name="GoogleComputeInstanceGroupManagerConfig" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

const googleComputeInstanceGroupManagerConfig: googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.baseInstanceName">baseInstanceName</a></code> | <code>string</code> | The base instance name to use for instances in this group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.name">name</a></code> | <code>string</code> | The name of the instance group manager. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.version">version</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion">GoogleComputeInstanceGroupManagerVersion</a>[]</code> | version block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.allInstancesConfig">allInstancesConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig">GoogleComputeInstanceGroupManagerAllInstancesConfig</a></code> | all_instances_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.autoHealingPolicies">autoHealingPolicies</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies">GoogleComputeInstanceGroupManagerAutoHealingPolicies</a></code> | auto_healing_policies block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.description">description</a></code> | <code>string</code> | An optional textual description of the instance group manager. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#id GoogleComputeInstanceGroupManager#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.instanceLifecyclePolicy">instanceLifecyclePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy</a></code> | instance_lifecycle_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.listManagedInstancesResults">listManagedInstancesResults</a></code> | <code>string</code> | Pagination behavior of the listManagedInstances API method for this managed instance group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.namedPort">namedPort</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort">GoogleComputeInstanceGroupManagerNamedPort</a>[]</code> | named_port block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.params">params</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams">GoogleComputeInstanceGroupManagerParams</a></code> | params block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.project">project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.standbyPolicy">standbyPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy">GoogleComputeInstanceGroupManagerStandbyPolicy</a></code> | standby_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.statefulDisk">statefulDisk</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk">GoogleComputeInstanceGroupManagerStatefulDisk</a>[]</code> | stateful_disk block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.statefulExternalIp">statefulExternalIp</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp">GoogleComputeInstanceGroupManagerStatefulExternalIp</a>[]</code> | stateful_external_ip block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.statefulInternalIp">statefulInternalIp</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp">GoogleComputeInstanceGroupManagerStatefulInternalIp</a>[]</code> | stateful_internal_ip block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.targetPools">targetPools</a></code> | <code>string[]</code> | The full URL of all target pools to which new instances in the group are added. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.targetSize">targetSize</a></code> | <code>number</code> | The target number of running instances for this managed instance group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.targetStoppedSize">targetStoppedSize</a></code> | <code>number</code> | The target number of stopped instances for this managed instance group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.targetSuspendedSize">targetSuspendedSize</a></code> | <code>number</code> | The target number of suspended instances for this managed instance group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts">GoogleComputeInstanceGroupManagerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.updatePolicy">updatePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy">GoogleComputeInstanceGroupManagerUpdatePolicy</a></code> | update_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.waitForInstances">waitForInstances</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to wait for all instances to be created/updated before returning. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.waitForInstancesStatus">waitForInstancesStatus</a></code> | <code>string</code> | When used with wait_for_instances specifies the status to wait for. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.zone">zone</a></code> | <code>string</code> | The zone that instances in this group should be created in. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `baseInstanceName`<sup>Required</sup> <a name="baseInstanceName" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.baseInstanceName"></a>

```typescript
public readonly baseInstanceName: string;
```

- *Type:* string

The base instance name to use for instances in this group.

The value must be a valid RFC1035 name. Supported characters are lowercase letters, numbers, and hyphens (-). Instances are named by appending a hyphen and a random four-character string to the base instance name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#base_instance_name GoogleComputeInstanceGroupManager#base_instance_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the instance group manager.

Must be 1-63 characters long and comply with RFC1035. Supported characters include lowercase letters, numbers, and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#name GoogleComputeInstanceGroupManager#name}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.version"></a>

```typescript
public readonly version: IResolvable | GoogleComputeInstanceGroupManagerVersion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion">GoogleComputeInstanceGroupManagerVersion</a>[]

version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#version GoogleComputeInstanceGroupManager#version}

---

##### `allInstancesConfig`<sup>Optional</sup> <a name="allInstancesConfig" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.allInstancesConfig"></a>

```typescript
public readonly allInstancesConfig: GoogleComputeInstanceGroupManagerAllInstancesConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig">GoogleComputeInstanceGroupManagerAllInstancesConfig</a>

all_instances_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#all_instances_config GoogleComputeInstanceGroupManager#all_instances_config}

---

##### `autoHealingPolicies`<sup>Optional</sup> <a name="autoHealingPolicies" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.autoHealingPolicies"></a>

```typescript
public readonly autoHealingPolicies: GoogleComputeInstanceGroupManagerAutoHealingPolicies;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies">GoogleComputeInstanceGroupManagerAutoHealingPolicies</a>

auto_healing_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#auto_healing_policies GoogleComputeInstanceGroupManager#auto_healing_policies}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional textual description of the instance group manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#description GoogleComputeInstanceGroupManager#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#id GoogleComputeInstanceGroupManager#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceLifecyclePolicy`<sup>Optional</sup> <a name="instanceLifecyclePolicy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.instanceLifecyclePolicy"></a>

```typescript
public readonly instanceLifecyclePolicy: GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy</a>

instance_lifecycle_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#instance_lifecycle_policy GoogleComputeInstanceGroupManager#instance_lifecycle_policy}

---

##### `listManagedInstancesResults`<sup>Optional</sup> <a name="listManagedInstancesResults" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.listManagedInstancesResults"></a>

```typescript
public readonly listManagedInstancesResults: string;
```

- *Type:* string

Pagination behavior of the listManagedInstances API method for this managed instance group.

Valid values are: "PAGELESS", "PAGINATED". If PAGELESS (default), Pagination is disabled for the group's listManagedInstances API method. maxResults and pageToken query parameters are ignored and all instances are returned in a single response. If PAGINATED, pagination is enabled, maxResults and pageToken query parameters are respected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#list_managed_instances_results GoogleComputeInstanceGroupManager#list_managed_instances_results}

---

##### `namedPort`<sup>Optional</sup> <a name="namedPort" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.namedPort"></a>

```typescript
public readonly namedPort: IResolvable | GoogleComputeInstanceGroupManagerNamedPort[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort">GoogleComputeInstanceGroupManagerNamedPort</a>[]

named_port block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#named_port GoogleComputeInstanceGroupManager#named_port}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.params"></a>

```typescript
public readonly params: GoogleComputeInstanceGroupManagerParams;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams">GoogleComputeInstanceGroupManagerParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#params GoogleComputeInstanceGroupManager#params}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#project GoogleComputeInstanceGroupManager#project}

---

##### `standbyPolicy`<sup>Optional</sup> <a name="standbyPolicy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.standbyPolicy"></a>

```typescript
public readonly standbyPolicy: GoogleComputeInstanceGroupManagerStandbyPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy">GoogleComputeInstanceGroupManagerStandbyPolicy</a>

standby_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#standby_policy GoogleComputeInstanceGroupManager#standby_policy}

---

##### `statefulDisk`<sup>Optional</sup> <a name="statefulDisk" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.statefulDisk"></a>

```typescript
public readonly statefulDisk: IResolvable | GoogleComputeInstanceGroupManagerStatefulDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk">GoogleComputeInstanceGroupManagerStatefulDisk</a>[]

stateful_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#stateful_disk GoogleComputeInstanceGroupManager#stateful_disk}

---

##### `statefulExternalIp`<sup>Optional</sup> <a name="statefulExternalIp" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.statefulExternalIp"></a>

```typescript
public readonly statefulExternalIp: IResolvable | GoogleComputeInstanceGroupManagerStatefulExternalIp[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp">GoogleComputeInstanceGroupManagerStatefulExternalIp</a>[]

stateful_external_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#stateful_external_ip GoogleComputeInstanceGroupManager#stateful_external_ip}

---

##### `statefulInternalIp`<sup>Optional</sup> <a name="statefulInternalIp" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.statefulInternalIp"></a>

```typescript
public readonly statefulInternalIp: IResolvable | GoogleComputeInstanceGroupManagerStatefulInternalIp[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp">GoogleComputeInstanceGroupManagerStatefulInternalIp</a>[]

stateful_internal_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#stateful_internal_ip GoogleComputeInstanceGroupManager#stateful_internal_ip}

---

##### `targetPools`<sup>Optional</sup> <a name="targetPools" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.targetPools"></a>

```typescript
public readonly targetPools: string[];
```

- *Type:* string[]

The full URL of all target pools to which new instances in the group are added.

Updating the target pools attribute does not affect existing instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#target_pools GoogleComputeInstanceGroupManager#target_pools}

---

##### `targetSize`<sup>Optional</sup> <a name="targetSize" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.targetSize"></a>

```typescript
public readonly targetSize: number;
```

- *Type:* number

The target number of running instances for this managed instance group.

This value should always be explicitly set unless this resource is attached to an autoscaler, in which case it should never be set. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#target_size GoogleComputeInstanceGroupManager#target_size}

---

##### `targetStoppedSize`<sup>Optional</sup> <a name="targetStoppedSize" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.targetStoppedSize"></a>

```typescript
public readonly targetStoppedSize: number;
```

- *Type:* number

The target number of stopped instances for this managed instance group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#target_stopped_size GoogleComputeInstanceGroupManager#target_stopped_size}

---

##### `targetSuspendedSize`<sup>Optional</sup> <a name="targetSuspendedSize" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.targetSuspendedSize"></a>

```typescript
public readonly targetSuspendedSize: number;
```

- *Type:* number

The target number of suspended instances for this managed instance group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#target_suspended_size GoogleComputeInstanceGroupManager#target_suspended_size}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeInstanceGroupManagerTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts">GoogleComputeInstanceGroupManagerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#timeouts GoogleComputeInstanceGroupManager#timeouts}

---

##### `updatePolicy`<sup>Optional</sup> <a name="updatePolicy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.updatePolicy"></a>

```typescript
public readonly updatePolicy: GoogleComputeInstanceGroupManagerUpdatePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy">GoogleComputeInstanceGroupManagerUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#update_policy GoogleComputeInstanceGroupManager#update_policy}

---

##### `waitForInstances`<sup>Optional</sup> <a name="waitForInstances" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.waitForInstances"></a>

```typescript
public readonly waitForInstances: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to wait for all instances to be created/updated before returning.

Note that if this is set to true and the operation does not succeed, Terraform will continue trying until it times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#wait_for_instances GoogleComputeInstanceGroupManager#wait_for_instances}

---

##### `waitForInstancesStatus`<sup>Optional</sup> <a name="waitForInstancesStatus" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.waitForInstancesStatus"></a>

```typescript
public readonly waitForInstancesStatus: string;
```

- *Type:* string

When used with wait_for_instances specifies the status to wait for.

When STABLE is specified this resource will wait until the instances are stable before returning. When UPDATED is set, it will wait for the version target to be reached and any per instance configs to be effective and all instances configs to be effective as well as all instances to be stable before returning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#wait_for_instances_status GoogleComputeInstanceGroupManager#wait_for_instances_status}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

The zone that instances in this group should be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#zone GoogleComputeInstanceGroupManager#zone}

---

### GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy <a name="GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

const googleComputeInstanceGroupManagerInstanceLifecyclePolicy: googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy.property.defaultActionOnFailure">defaultActionOnFailure</a></code> | <code>string</code> | Default behavior for all instance or health check failures. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy.property.forceUpdateOnRepair">forceUpdateOnRepair</a></code> | <code>string</code> | Specifies whether to apply the group's latest configuration when repairing a VM. |

---

##### `defaultActionOnFailure`<sup>Optional</sup> <a name="defaultActionOnFailure" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy.property.defaultActionOnFailure"></a>

```typescript
public readonly defaultActionOnFailure: string;
```

- *Type:* string

Default behavior for all instance or health check failures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#default_action_on_failure GoogleComputeInstanceGroupManager#default_action_on_failure}

---

##### `forceUpdateOnRepair`<sup>Optional</sup> <a name="forceUpdateOnRepair" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy.property.forceUpdateOnRepair"></a>

```typescript
public readonly forceUpdateOnRepair: string;
```

- *Type:* string

Specifies whether to apply the group's latest configuration when repairing a VM.

Valid options are: YES, NO. If YES and you updated the group's instance template or per-instance configurations after the VM was created, then these changes are applied when VM is repaired. If NO (default), then updates are applied in accordance with the group's update policy type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#force_update_on_repair GoogleComputeInstanceGroupManager#force_update_on_repair}

---

### GoogleComputeInstanceGroupManagerNamedPort <a name="GoogleComputeInstanceGroupManagerNamedPort" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

const googleComputeInstanceGroupManagerNamedPort: googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort.property.name">name</a></code> | <code>string</code> | The name of the port. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort.property.port">port</a></code> | <code>number</code> | The port number. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#name GoogleComputeInstanceGroupManager#name}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#port GoogleComputeInstanceGroupManager#port}

---

### GoogleComputeInstanceGroupManagerParams <a name="GoogleComputeInstanceGroupManagerParams" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

const googleComputeInstanceGroupManagerParams: googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams.property.resourceManagerTags">resourceManagerTags</a></code> | <code>{[ key: string ]: string}</code> | Resource manager tags to bind to the managed instance group. |

---

##### `resourceManagerTags`<sup>Optional</sup> <a name="resourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams.property.resourceManagerTags"></a>

```typescript
public readonly resourceManagerTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Resource manager tags to bind to the managed instance group.

The tags are key-value pairs. Keys must be in the format tagKeys/123 and values in the format tagValues/456.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#resource_manager_tags GoogleComputeInstanceGroupManager#resource_manager_tags}

---

### GoogleComputeInstanceGroupManagerStandbyPolicy <a name="GoogleComputeInstanceGroupManagerStandbyPolicy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

const googleComputeInstanceGroupManagerStandbyPolicy: googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy.property.initialDelaySec">initialDelaySec</a></code> | <code>number</code> | Specifies the number of seconds that the MIG should wait to suspend or stop a VM after that VM was created. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy.property.mode">mode</a></code> | <code>string</code> | Defines how a MIG resumes or starts VMs from a standby pool when the group scales out. |

---

##### `initialDelaySec`<sup>Optional</sup> <a name="initialDelaySec" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy.property.initialDelaySec"></a>

```typescript
public readonly initialDelaySec: number;
```

- *Type:* number

Specifies the number of seconds that the MIG should wait to suspend or stop a VM after that VM was created.

The initial delay gives the initialization script the time to prepare your VM for a quick scale out. The value of initial delay must be between 0 and 3600 seconds. The default value is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#initial_delay_sec GoogleComputeInstanceGroupManager#initial_delay_sec}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Defines how a MIG resumes or starts VMs from a standby pool when the group scales out.

The default mode is "MANUAL".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#mode GoogleComputeInstanceGroupManager#mode}

---

### GoogleComputeInstanceGroupManagerStatefulDisk <a name="GoogleComputeInstanceGroupManagerStatefulDisk" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

const googleComputeInstanceGroupManagerStatefulDisk: googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk.property.deviceName">deviceName</a></code> | <code>string</code> | The device name of the disk to be attached. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk.property.deleteRule">deleteRule</a></code> | <code>string</code> | A value that prescribes what should happen to the stateful disk when the VM instance is deleted. |

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

The device name of the disk to be attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#device_name GoogleComputeInstanceGroupManager#device_name}

---

##### `deleteRule`<sup>Optional</sup> <a name="deleteRule" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk.property.deleteRule"></a>

```typescript
public readonly deleteRule: string;
```

- *Type:* string

A value that prescribes what should happen to the stateful disk when the VM instance is deleted.

The available options are NEVER and ON_PERMANENT_INSTANCE_DELETION. NEVER - detach the disk when the VM is deleted, but do not delete the disk. ON_PERMANENT_INSTANCE_DELETION will delete the stateful disk when the VM is permanently deleted from the instance group. The default is NEVER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#delete_rule GoogleComputeInstanceGroupManager#delete_rule}

---

### GoogleComputeInstanceGroupManagerStatefulExternalIp <a name="GoogleComputeInstanceGroupManagerStatefulExternalIp" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

const googleComputeInstanceGroupManagerStatefulExternalIp: googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp.property.deleteRule">deleteRule</a></code> | <code>string</code> | A value that prescribes what should happen to an associated static Address resource when a VM instance is permanently deleted. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp.property.interfaceName">interfaceName</a></code> | <code>string</code> | The network interface name. |

---

##### `deleteRule`<sup>Optional</sup> <a name="deleteRule" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp.property.deleteRule"></a>

```typescript
public readonly deleteRule: string;
```

- *Type:* string

A value that prescribes what should happen to an associated static Address resource when a VM instance is permanently deleted.

The available options are NEVER and ON_PERMANENT_INSTANCE_DELETION. NEVER - detach the IP when the VM is deleted, but do not delete the address resource. ON_PERMANENT_INSTANCE_DELETION will delete the stateful address when the VM is permanently deleted from the instance group. The default is NEVER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#delete_rule GoogleComputeInstanceGroupManager#delete_rule}

---

##### `interfaceName`<sup>Optional</sup> <a name="interfaceName" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp.property.interfaceName"></a>

```typescript
public readonly interfaceName: string;
```

- *Type:* string

The network interface name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#interface_name GoogleComputeInstanceGroupManager#interface_name}

---

### GoogleComputeInstanceGroupManagerStatefulInternalIp <a name="GoogleComputeInstanceGroupManagerStatefulInternalIp" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

const googleComputeInstanceGroupManagerStatefulInternalIp: googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp.property.deleteRule">deleteRule</a></code> | <code>string</code> | A value that prescribes what should happen to an associated static Address resource when a VM instance is permanently deleted. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp.property.interfaceName">interfaceName</a></code> | <code>string</code> | The network interface name. |

---

##### `deleteRule`<sup>Optional</sup> <a name="deleteRule" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp.property.deleteRule"></a>

```typescript
public readonly deleteRule: string;
```

- *Type:* string

A value that prescribes what should happen to an associated static Address resource when a VM instance is permanently deleted.

The available options are NEVER and ON_PERMANENT_INSTANCE_DELETION. NEVER - detach the IP when the VM is deleted, but do not delete the address resource. ON_PERMANENT_INSTANCE_DELETION will delete the stateful address when the VM is permanently deleted from the instance group. The default is NEVER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#delete_rule GoogleComputeInstanceGroupManager#delete_rule}

---

##### `interfaceName`<sup>Optional</sup> <a name="interfaceName" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp.property.interfaceName"></a>

```typescript
public readonly interfaceName: string;
```

- *Type:* string

The network interface name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#interface_name GoogleComputeInstanceGroupManager#interface_name}

---

### GoogleComputeInstanceGroupManagerStatus <a name="GoogleComputeInstanceGroupManagerStatus" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatus.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

const googleComputeInstanceGroupManagerStatus: googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatus = { ... }
```


### GoogleComputeInstanceGroupManagerStatusAllInstancesConfig <a name="GoogleComputeInstanceGroupManagerStatusAllInstancesConfig" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfig.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

const googleComputeInstanceGroupManagerStatusAllInstancesConfig: googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfig = { ... }
```


### GoogleComputeInstanceGroupManagerStatusStateful <a name="GoogleComputeInstanceGroupManagerStatusStateful" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStateful"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStateful.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

const googleComputeInstanceGroupManagerStatusStateful: googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStateful = { ... }
```


### GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs <a name="GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

const googleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs: googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs = { ... }
```


### GoogleComputeInstanceGroupManagerStatusVersionTarget <a name="GoogleComputeInstanceGroupManagerStatusVersionTarget" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTarget.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

const googleComputeInstanceGroupManagerStatusVersionTarget: googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTarget = { ... }
```


### GoogleComputeInstanceGroupManagerTimeouts <a name="GoogleComputeInstanceGroupManagerTimeouts" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

const googleComputeInstanceGroupManagerTimeouts: googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#create GoogleComputeInstanceGroupManager#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#delete GoogleComputeInstanceGroupManager#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#update GoogleComputeInstanceGroupManager#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#create GoogleComputeInstanceGroupManager#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#delete GoogleComputeInstanceGroupManager#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#update GoogleComputeInstanceGroupManager#update}.

---

### GoogleComputeInstanceGroupManagerUpdatePolicy <a name="GoogleComputeInstanceGroupManagerUpdatePolicy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

const googleComputeInstanceGroupManagerUpdatePolicy: googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.minimalAction">minimalAction</a></code> | <code>string</code> | Minimal action to be taken on an instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.type">type</a></code> | <code>string</code> | The type of update process. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.maxSurgeFixed">maxSurgeFixed</a></code> | <code>number</code> | Specifies a fixed number of VM instances. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.maxSurgePercent">maxSurgePercent</a></code> | <code>number</code> | Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%. Conflicts with max_surge_fixed. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.maxUnavailableFixed">maxUnavailableFixed</a></code> | <code>number</code> | Specifies a fixed number of VM instances. This must be a positive integer. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.maxUnavailablePercent">maxUnavailablePercent</a></code> | <code>number</code> | Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.minReadySec">minReadySec</a></code> | <code>number</code> | Minimum number of seconds to wait for after a newly created instance becomes available. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.mostDisruptiveAllowedAction">mostDisruptiveAllowedAction</a></code> | <code>string</code> | Most disruptive action that is allowed to be taken on an instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.replacementMethod">replacementMethod</a></code> | <code>string</code> | The instance replacement method for managed instance groups. |

---

##### `minimalAction`<sup>Required</sup> <a name="minimalAction" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.minimalAction"></a>

```typescript
public readonly minimalAction: string;
```

- *Type:* string

Minimal action to be taken on an instance.

You can specify either NONE to forbid any actions, REFRESH to update without stopping instances, RESTART to restart existing instances or REPLACE to delete and create new instances from the target template. If you specify a REFRESH, the Updater will attempt to perform that action only. However, if the Updater determines that the minimal action you specify is not enough to perform the update, it might perform a more disruptive action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#minimal_action GoogleComputeInstanceGroupManager#minimal_action}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of update process.

You can specify either PROACTIVE so that the instance group manager proactively executes actions in order to bring instances to their target versions or OPPORTUNISTIC so that no action is proactively executed but the update will be performed as part of other actions (for example, resizes or recreateInstances calls).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#type GoogleComputeInstanceGroupManager#type}

---

##### `maxSurgeFixed`<sup>Optional</sup> <a name="maxSurgeFixed" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.maxSurgeFixed"></a>

```typescript
public readonly maxSurgeFixed: number;
```

- *Type:* number

Specifies a fixed number of VM instances.

This must be a positive integer. Conflicts with max_surge_percent. Both cannot be 0

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#max_surge_fixed GoogleComputeInstanceGroupManager#max_surge_fixed}

---

##### `maxSurgePercent`<sup>Optional</sup> <a name="maxSurgePercent" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.maxSurgePercent"></a>

```typescript
public readonly maxSurgePercent: number;
```

- *Type:* number

Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%. Conflicts with max_surge_fixed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#max_surge_percent GoogleComputeInstanceGroupManager#max_surge_percent}

---

##### `maxUnavailableFixed`<sup>Optional</sup> <a name="maxUnavailableFixed" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.maxUnavailableFixed"></a>

```typescript
public readonly maxUnavailableFixed: number;
```

- *Type:* number

Specifies a fixed number of VM instances. This must be a positive integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#max_unavailable_fixed GoogleComputeInstanceGroupManager#max_unavailable_fixed}

---

##### `maxUnavailablePercent`<sup>Optional</sup> <a name="maxUnavailablePercent" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.maxUnavailablePercent"></a>

```typescript
public readonly maxUnavailablePercent: number;
```

- *Type:* number

Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#max_unavailable_percent GoogleComputeInstanceGroupManager#max_unavailable_percent}

---

##### `minReadySec`<sup>Optional</sup> <a name="minReadySec" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.minReadySec"></a>

```typescript
public readonly minReadySec: number;
```

- *Type:* number

Minimum number of seconds to wait for after a newly created instance becomes available.

This value must be from range [0, 3600].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#min_ready_sec GoogleComputeInstanceGroupManager#min_ready_sec}

---

##### `mostDisruptiveAllowedAction`<sup>Optional</sup> <a name="mostDisruptiveAllowedAction" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.mostDisruptiveAllowedAction"></a>

```typescript
public readonly mostDisruptiveAllowedAction: string;
```

- *Type:* string

Most disruptive action that is allowed to be taken on an instance.

You can specify either NONE to forbid any actions, REFRESH to allow actions that do not need instance restart, RESTART to allow actions that can be applied without instance replacing or REPLACE to allow all possible actions. If the Updater determines that the minimal update action needed is more disruptive than most disruptive allowed action you specify it will not perform the update at all.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#most_disruptive_allowed_action GoogleComputeInstanceGroupManager#most_disruptive_allowed_action}

---

##### `replacementMethod`<sup>Optional</sup> <a name="replacementMethod" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.replacementMethod"></a>

```typescript
public readonly replacementMethod: string;
```

- *Type:* string

The instance replacement method for managed instance groups.

Valid values are: "RECREATE", "SUBSTITUTE". If SUBSTITUTE (default), the group replaces VM instances with new instances that have randomly generated names. If RECREATE, instance names are preserved.  You must also set max_unavailable_fixed or max_unavailable_percent to be greater than 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#replacement_method GoogleComputeInstanceGroupManager#replacement_method}

---

### GoogleComputeInstanceGroupManagerVersion <a name="GoogleComputeInstanceGroupManagerVersion" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

const googleComputeInstanceGroupManagerVersion: googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion.property.instanceTemplate">instanceTemplate</a></code> | <code>string</code> | The full URL to an instance template from which all new instances of this version will be created. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion.property.name">name</a></code> | <code>string</code> | Version name. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion.property.targetSize">targetSize</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize">GoogleComputeInstanceGroupManagerVersionTargetSize</a></code> | target_size block. |

---

##### `instanceTemplate`<sup>Required</sup> <a name="instanceTemplate" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion.property.instanceTemplate"></a>

```typescript
public readonly instanceTemplate: string;
```

- *Type:* string

The full URL to an instance template from which all new instances of this version will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#instance_template GoogleComputeInstanceGroupManager#instance_template}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Version name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#name GoogleComputeInstanceGroupManager#name}

---

##### `targetSize`<sup>Optional</sup> <a name="targetSize" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion.property.targetSize"></a>

```typescript
public readonly targetSize: GoogleComputeInstanceGroupManagerVersionTargetSize;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize">GoogleComputeInstanceGroupManagerVersionTargetSize</a>

target_size block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#target_size GoogleComputeInstanceGroupManager#target_size}

---

### GoogleComputeInstanceGroupManagerVersionTargetSize <a name="GoogleComputeInstanceGroupManagerVersionTargetSize" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

const googleComputeInstanceGroupManagerVersionTargetSize: googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize.property.fixed">fixed</a></code> | <code>number</code> | The number of instances which are managed for this version. Conflicts with percent. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize.property.percent">percent</a></code> | <code>number</code> | The number of instances (calculated as percentage) which are managed for this version. |

---

##### `fixed`<sup>Optional</sup> <a name="fixed" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize.property.fixed"></a>

```typescript
public readonly fixed: number;
```

- *Type:* number

The number of instances which are managed for this version. Conflicts with percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#fixed GoogleComputeInstanceGroupManager#fixed}

---

##### `percent`<sup>Optional</sup> <a name="percent" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize.property.percent"></a>

```typescript
public readonly percent: number;
```

- *Type:* number

The number of instances (calculated as percentage) which are managed for this version.

Conflicts with fixed. Note that when using percent, rounding will be in favor of explicitly set target_size values; a managed instance group with 2 instances and 2 versions, one of which has a target_size.percent of 60 will create 2 instances of that version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_instance_group_manager#percent GoogleComputeInstanceGroupManager#percent}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference <a name="GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

new googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.resetMetadata"></a>

```typescript
public resetMetadata(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig">GoogleComputeInstanceGroupManagerAllInstancesConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInstanceGroupManagerAllInstancesConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig">GoogleComputeInstanceGroupManagerAllInstancesConfig</a>

---


### GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference <a name="GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

new googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheckInput">healthCheckInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySecInput">initialDelaySecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheck">healthCheck</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySec">initialDelaySec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies">GoogleComputeInstanceGroupManagerAutoHealingPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `healthCheckInput`<sup>Optional</sup> <a name="healthCheckInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheckInput"></a>

```typescript
public readonly healthCheckInput: string;
```

- *Type:* string

---

##### `initialDelaySecInput`<sup>Optional</sup> <a name="initialDelaySecInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySecInput"></a>

```typescript
public readonly initialDelaySecInput: number;
```

- *Type:* number

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheck"></a>

```typescript
public readonly healthCheck: string;
```

- *Type:* string

---

##### `initialDelaySec`<sup>Required</sup> <a name="initialDelaySec" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySec"></a>

```typescript
public readonly initialDelaySec: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInstanceGroupManagerAutoHealingPolicies;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies">GoogleComputeInstanceGroupManagerAutoHealingPolicies</a>

---


### GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference <a name="GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

new googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resetDefaultActionOnFailure">resetDefaultActionOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resetForceUpdateOnRepair">resetForceUpdateOnRepair</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultActionOnFailure` <a name="resetDefaultActionOnFailure" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resetDefaultActionOnFailure"></a>

```typescript
public resetDefaultActionOnFailure(): void
```

##### `resetForceUpdateOnRepair` <a name="resetForceUpdateOnRepair" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resetForceUpdateOnRepair"></a>

```typescript
public resetForceUpdateOnRepair(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.defaultActionOnFailureInput">defaultActionOnFailureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.forceUpdateOnRepairInput">forceUpdateOnRepairInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.defaultActionOnFailure">defaultActionOnFailure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.forceUpdateOnRepair">forceUpdateOnRepair</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultActionOnFailureInput`<sup>Optional</sup> <a name="defaultActionOnFailureInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.defaultActionOnFailureInput"></a>

```typescript
public readonly defaultActionOnFailureInput: string;
```

- *Type:* string

---

##### `forceUpdateOnRepairInput`<sup>Optional</sup> <a name="forceUpdateOnRepairInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.forceUpdateOnRepairInput"></a>

```typescript
public readonly forceUpdateOnRepairInput: string;
```

- *Type:* string

---

##### `defaultActionOnFailure`<sup>Required</sup> <a name="defaultActionOnFailure" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.defaultActionOnFailure"></a>

```typescript
public readonly defaultActionOnFailure: string;
```

- *Type:* string

---

##### `forceUpdateOnRepair`<sup>Required</sup> <a name="forceUpdateOnRepair" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.forceUpdateOnRepair"></a>

```typescript
public readonly forceUpdateOnRepair: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy</a>

---


### GoogleComputeInstanceGroupManagerNamedPortList <a name="GoogleComputeInstanceGroupManagerNamedPortList" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

new googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.get"></a>

```typescript
public get(index: number): GoogleComputeInstanceGroupManagerNamedPortOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort">GoogleComputeInstanceGroupManagerNamedPort</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceGroupManagerNamedPort[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort">GoogleComputeInstanceGroupManagerNamedPort</a>[]

---


### GoogleComputeInstanceGroupManagerNamedPortOutputReference <a name="GoogleComputeInstanceGroupManagerNamedPortOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

new googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort">GoogleComputeInstanceGroupManagerNamedPort</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceGroupManagerNamedPort;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort">GoogleComputeInstanceGroupManagerNamedPort</a>

---


### GoogleComputeInstanceGroupManagerParamsOutputReference <a name="GoogleComputeInstanceGroupManagerParamsOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

new googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.resetResourceManagerTags">resetResourceManagerTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceManagerTags` <a name="resetResourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.resetResourceManagerTags"></a>

```typescript
public resetResourceManagerTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.property.resourceManagerTagsInput">resourceManagerTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.property.resourceManagerTags">resourceManagerTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams">GoogleComputeInstanceGroupManagerParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceManagerTagsInput`<sup>Optional</sup> <a name="resourceManagerTagsInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.property.resourceManagerTagsInput"></a>

```typescript
public readonly resourceManagerTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `resourceManagerTags`<sup>Required</sup> <a name="resourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.property.resourceManagerTags"></a>

```typescript
public readonly resourceManagerTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInstanceGroupManagerParams;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams">GoogleComputeInstanceGroupManagerParams</a>

---


### GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference <a name="GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

new googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.resetInitialDelaySec">resetInitialDelaySec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInitialDelaySec` <a name="resetInitialDelaySec" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.resetInitialDelaySec"></a>

```typescript
public resetInitialDelaySec(): void
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.initialDelaySecInput">initialDelaySecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.initialDelaySec">initialDelaySec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy">GoogleComputeInstanceGroupManagerStandbyPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `initialDelaySecInput`<sup>Optional</sup> <a name="initialDelaySecInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.initialDelaySecInput"></a>

```typescript
public readonly initialDelaySecInput: number;
```

- *Type:* number

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `initialDelaySec`<sup>Required</sup> <a name="initialDelaySec" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.initialDelaySec"></a>

```typescript
public readonly initialDelaySec: number;
```

- *Type:* number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInstanceGroupManagerStandbyPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy">GoogleComputeInstanceGroupManagerStandbyPolicy</a>

---


### GoogleComputeInstanceGroupManagerStatefulDiskList <a name="GoogleComputeInstanceGroupManagerStatefulDiskList" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

new googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.get"></a>

```typescript
public get(index: number): GoogleComputeInstanceGroupManagerStatefulDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk">GoogleComputeInstanceGroupManagerStatefulDisk</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceGroupManagerStatefulDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk">GoogleComputeInstanceGroupManagerStatefulDisk</a>[]

---


### GoogleComputeInstanceGroupManagerStatefulDiskOutputReference <a name="GoogleComputeInstanceGroupManagerStatefulDiskOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

new googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.resetDeleteRule">resetDeleteRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteRule` <a name="resetDeleteRule" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.resetDeleteRule"></a>

```typescript
public resetDeleteRule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.deleteRuleInput">deleteRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.deleteRule">deleteRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk">GoogleComputeInstanceGroupManagerStatefulDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteRuleInput`<sup>Optional</sup> <a name="deleteRuleInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.deleteRuleInput"></a>

```typescript
public readonly deleteRuleInput: string;
```

- *Type:* string

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.deviceNameInput"></a>

```typescript
public readonly deviceNameInput: string;
```

- *Type:* string

---

##### `deleteRule`<sup>Required</sup> <a name="deleteRule" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.deleteRule"></a>

```typescript
public readonly deleteRule: string;
```

- *Type:* string

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceGroupManagerStatefulDisk;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk">GoogleComputeInstanceGroupManagerStatefulDisk</a>

---


### GoogleComputeInstanceGroupManagerStatefulExternalIpList <a name="GoogleComputeInstanceGroupManagerStatefulExternalIpList" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

new googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.get"></a>

```typescript
public get(index: number): GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp">GoogleComputeInstanceGroupManagerStatefulExternalIp</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceGroupManagerStatefulExternalIp[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp">GoogleComputeInstanceGroupManagerStatefulExternalIp</a>[]

---


### GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference <a name="GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

new googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.resetDeleteRule">resetDeleteRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.resetInterfaceName">resetInterfaceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteRule` <a name="resetDeleteRule" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.resetDeleteRule"></a>

```typescript
public resetDeleteRule(): void
```

##### `resetInterfaceName` <a name="resetInterfaceName" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.resetInterfaceName"></a>

```typescript
public resetInterfaceName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.deleteRuleInput">deleteRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.interfaceNameInput">interfaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.deleteRule">deleteRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.interfaceName">interfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp">GoogleComputeInstanceGroupManagerStatefulExternalIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteRuleInput`<sup>Optional</sup> <a name="deleteRuleInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.deleteRuleInput"></a>

```typescript
public readonly deleteRuleInput: string;
```

- *Type:* string

---

##### `interfaceNameInput`<sup>Optional</sup> <a name="interfaceNameInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.interfaceNameInput"></a>

```typescript
public readonly interfaceNameInput: string;
```

- *Type:* string

---

##### `deleteRule`<sup>Required</sup> <a name="deleteRule" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.deleteRule"></a>

```typescript
public readonly deleteRule: string;
```

- *Type:* string

---

##### `interfaceName`<sup>Required</sup> <a name="interfaceName" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.interfaceName"></a>

```typescript
public readonly interfaceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceGroupManagerStatefulExternalIp;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp">GoogleComputeInstanceGroupManagerStatefulExternalIp</a>

---


### GoogleComputeInstanceGroupManagerStatefulInternalIpList <a name="GoogleComputeInstanceGroupManagerStatefulInternalIpList" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

new googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.get"></a>

```typescript
public get(index: number): GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp">GoogleComputeInstanceGroupManagerStatefulInternalIp</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceGroupManagerStatefulInternalIp[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp">GoogleComputeInstanceGroupManagerStatefulInternalIp</a>[]

---


### GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference <a name="GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

new googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.resetDeleteRule">resetDeleteRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.resetInterfaceName">resetInterfaceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteRule` <a name="resetDeleteRule" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.resetDeleteRule"></a>

```typescript
public resetDeleteRule(): void
```

##### `resetInterfaceName` <a name="resetInterfaceName" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.resetInterfaceName"></a>

```typescript
public resetInterfaceName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.deleteRuleInput">deleteRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.interfaceNameInput">interfaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.deleteRule">deleteRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.interfaceName">interfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp">GoogleComputeInstanceGroupManagerStatefulInternalIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteRuleInput`<sup>Optional</sup> <a name="deleteRuleInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.deleteRuleInput"></a>

```typescript
public readonly deleteRuleInput: string;
```

- *Type:* string

---

##### `interfaceNameInput`<sup>Optional</sup> <a name="interfaceNameInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.interfaceNameInput"></a>

```typescript
public readonly interfaceNameInput: string;
```

- *Type:* string

---

##### `deleteRule`<sup>Required</sup> <a name="deleteRule" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.deleteRule"></a>

```typescript
public readonly deleteRule: string;
```

- *Type:* string

---

##### `interfaceName`<sup>Required</sup> <a name="interfaceName" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.interfaceName"></a>

```typescript
public readonly interfaceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceGroupManagerStatefulInternalIp;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp">GoogleComputeInstanceGroupManagerStatefulInternalIp</a>

---


### GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList <a name="GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

new googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.get"></a>

```typescript
public get(index: number): GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference <a name="GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

new googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.currentRevision">currentRevision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.effective">effective</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfig">GoogleComputeInstanceGroupManagerStatusAllInstancesConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `currentRevision`<sup>Required</sup> <a name="currentRevision" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.currentRevision"></a>

```typescript
public readonly currentRevision: string;
```

- *Type:* string

---

##### `effective`<sup>Required</sup> <a name="effective" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.effective"></a>

```typescript
public readonly effective: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInstanceGroupManagerStatusAllInstancesConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfig">GoogleComputeInstanceGroupManagerStatusAllInstancesConfig</a>

---


### GoogleComputeInstanceGroupManagerStatusList <a name="GoogleComputeInstanceGroupManagerStatusList" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

new googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.get"></a>

```typescript
public get(index: number): GoogleComputeInstanceGroupManagerStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeInstanceGroupManagerStatusOutputReference <a name="GoogleComputeInstanceGroupManagerStatusOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

new googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.allInstancesConfig">allInstancesConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList">GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.isStable">isStable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.stateful">stateful</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList">GoogleComputeInstanceGroupManagerStatusStatefulList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.versionTarget">versionTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList">GoogleComputeInstanceGroupManagerStatusVersionTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatus">GoogleComputeInstanceGroupManagerStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allInstancesConfig`<sup>Required</sup> <a name="allInstancesConfig" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.allInstancesConfig"></a>

```typescript
public readonly allInstancesConfig: GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList">GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList</a>

---

##### `isStable`<sup>Required</sup> <a name="isStable" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.isStable"></a>

```typescript
public readonly isStable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `stateful`<sup>Required</sup> <a name="stateful" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.stateful"></a>

```typescript
public readonly stateful: GoogleComputeInstanceGroupManagerStatusStatefulList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList">GoogleComputeInstanceGroupManagerStatusStatefulList</a>

---

##### `versionTarget`<sup>Required</sup> <a name="versionTarget" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.versionTarget"></a>

```typescript
public readonly versionTarget: GoogleComputeInstanceGroupManagerStatusVersionTargetList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList">GoogleComputeInstanceGroupManagerStatusVersionTargetList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInstanceGroupManagerStatus;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatus">GoogleComputeInstanceGroupManagerStatus</a>

---


### GoogleComputeInstanceGroupManagerStatusStatefulList <a name="GoogleComputeInstanceGroupManagerStatusStatefulList" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

new googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.get"></a>

```typescript
public get(index: number): GoogleComputeInstanceGroupManagerStatusStatefulOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeInstanceGroupManagerStatusStatefulOutputReference <a name="GoogleComputeInstanceGroupManagerStatusStatefulOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

new googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.hasStatefulConfig">hasStatefulConfig</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.perInstanceConfigs">perInstanceConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList">GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStateful">GoogleComputeInstanceGroupManagerStatusStateful</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hasStatefulConfig`<sup>Required</sup> <a name="hasStatefulConfig" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.hasStatefulConfig"></a>

```typescript
public readonly hasStatefulConfig: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `perInstanceConfigs`<sup>Required</sup> <a name="perInstanceConfigs" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.perInstanceConfigs"></a>

```typescript
public readonly perInstanceConfigs: GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList">GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInstanceGroupManagerStatusStateful;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStateful">GoogleComputeInstanceGroupManagerStatusStateful</a>

---


### GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList <a name="GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

new googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.get"></a>

```typescript
public get(index: number): GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference <a name="GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

new googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.allEffective">allEffective</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs">GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allEffective`<sup>Required</sup> <a name="allEffective" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.allEffective"></a>

```typescript
public readonly allEffective: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs">GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs</a>

---


### GoogleComputeInstanceGroupManagerStatusVersionTargetList <a name="GoogleComputeInstanceGroupManagerStatusVersionTargetList" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

new googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.get"></a>

```typescript
public get(index: number): GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference <a name="GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

new googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.isReached">isReached</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTarget">GoogleComputeInstanceGroupManagerStatusVersionTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isReached`<sup>Required</sup> <a name="isReached" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.isReached"></a>

```typescript
public readonly isReached: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInstanceGroupManagerStatusVersionTarget;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTarget">GoogleComputeInstanceGroupManagerStatusVersionTarget</a>

---


### GoogleComputeInstanceGroupManagerTimeoutsOutputReference <a name="GoogleComputeInstanceGroupManagerTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

new googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts">GoogleComputeInstanceGroupManagerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceGroupManagerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts">GoogleComputeInstanceGroupManagerTimeouts</a>

---


### GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference <a name="GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

new googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMaxSurgeFixed">resetMaxSurgeFixed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMaxSurgePercent">resetMaxSurgePercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMaxUnavailableFixed">resetMaxUnavailableFixed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMaxUnavailablePercent">resetMaxUnavailablePercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMinReadySec">resetMinReadySec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMostDisruptiveAllowedAction">resetMostDisruptiveAllowedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetReplacementMethod">resetReplacementMethod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxSurgeFixed` <a name="resetMaxSurgeFixed" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMaxSurgeFixed"></a>

```typescript
public resetMaxSurgeFixed(): void
```

##### `resetMaxSurgePercent` <a name="resetMaxSurgePercent" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMaxSurgePercent"></a>

```typescript
public resetMaxSurgePercent(): void
```

##### `resetMaxUnavailableFixed` <a name="resetMaxUnavailableFixed" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMaxUnavailableFixed"></a>

```typescript
public resetMaxUnavailableFixed(): void
```

##### `resetMaxUnavailablePercent` <a name="resetMaxUnavailablePercent" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMaxUnavailablePercent"></a>

```typescript
public resetMaxUnavailablePercent(): void
```

##### `resetMinReadySec` <a name="resetMinReadySec" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMinReadySec"></a>

```typescript
public resetMinReadySec(): void
```

##### `resetMostDisruptiveAllowedAction` <a name="resetMostDisruptiveAllowedAction" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMostDisruptiveAllowedAction"></a>

```typescript
public resetMostDisruptiveAllowedAction(): void
```

##### `resetReplacementMethod` <a name="resetReplacementMethod" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetReplacementMethod"></a>

```typescript
public resetReplacementMethod(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixedInput">maxSurgeFixedInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercentInput">maxSurgePercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixedInput">maxUnavailableFixedInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercentInput">maxUnavailablePercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.minimalActionInput">minimalActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.minReadySecInput">minReadySecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedActionInput">mostDisruptiveAllowedActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethodInput">replacementMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixed">maxSurgeFixed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercent">maxSurgePercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixed">maxUnavailableFixed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercent">maxUnavailablePercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.minimalAction">minimalAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.minReadySec">minReadySec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedAction">mostDisruptiveAllowedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethod">replacementMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy">GoogleComputeInstanceGroupManagerUpdatePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxSurgeFixedInput`<sup>Optional</sup> <a name="maxSurgeFixedInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixedInput"></a>

```typescript
public readonly maxSurgeFixedInput: number;
```

- *Type:* number

---

##### `maxSurgePercentInput`<sup>Optional</sup> <a name="maxSurgePercentInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercentInput"></a>

```typescript
public readonly maxSurgePercentInput: number;
```

- *Type:* number

---

##### `maxUnavailableFixedInput`<sup>Optional</sup> <a name="maxUnavailableFixedInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixedInput"></a>

```typescript
public readonly maxUnavailableFixedInput: number;
```

- *Type:* number

---

##### `maxUnavailablePercentInput`<sup>Optional</sup> <a name="maxUnavailablePercentInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercentInput"></a>

```typescript
public readonly maxUnavailablePercentInput: number;
```

- *Type:* number

---

##### `minimalActionInput`<sup>Optional</sup> <a name="minimalActionInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.minimalActionInput"></a>

```typescript
public readonly minimalActionInput: string;
```

- *Type:* string

---

##### `minReadySecInput`<sup>Optional</sup> <a name="minReadySecInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.minReadySecInput"></a>

```typescript
public readonly minReadySecInput: number;
```

- *Type:* number

---

##### `mostDisruptiveAllowedActionInput`<sup>Optional</sup> <a name="mostDisruptiveAllowedActionInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedActionInput"></a>

```typescript
public readonly mostDisruptiveAllowedActionInput: string;
```

- *Type:* string

---

##### `replacementMethodInput`<sup>Optional</sup> <a name="replacementMethodInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethodInput"></a>

```typescript
public readonly replacementMethodInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `maxSurgeFixed`<sup>Required</sup> <a name="maxSurgeFixed" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixed"></a>

```typescript
public readonly maxSurgeFixed: number;
```

- *Type:* number

---

##### `maxSurgePercent`<sup>Required</sup> <a name="maxSurgePercent" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercent"></a>

```typescript
public readonly maxSurgePercent: number;
```

- *Type:* number

---

##### `maxUnavailableFixed`<sup>Required</sup> <a name="maxUnavailableFixed" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixed"></a>

```typescript
public readonly maxUnavailableFixed: number;
```

- *Type:* number

---

##### `maxUnavailablePercent`<sup>Required</sup> <a name="maxUnavailablePercent" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercent"></a>

```typescript
public readonly maxUnavailablePercent: number;
```

- *Type:* number

---

##### `minimalAction`<sup>Required</sup> <a name="minimalAction" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.minimalAction"></a>

```typescript
public readonly minimalAction: string;
```

- *Type:* string

---

##### `minReadySec`<sup>Required</sup> <a name="minReadySec" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.minReadySec"></a>

```typescript
public readonly minReadySec: number;
```

- *Type:* number

---

##### `mostDisruptiveAllowedAction`<sup>Required</sup> <a name="mostDisruptiveAllowedAction" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedAction"></a>

```typescript
public readonly mostDisruptiveAllowedAction: string;
```

- *Type:* string

---

##### `replacementMethod`<sup>Required</sup> <a name="replacementMethod" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethod"></a>

```typescript
public readonly replacementMethod: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInstanceGroupManagerUpdatePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy">GoogleComputeInstanceGroupManagerUpdatePolicy</a>

---


### GoogleComputeInstanceGroupManagerVersionList <a name="GoogleComputeInstanceGroupManagerVersionList" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

new googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.get"></a>

```typescript
public get(index: number): GoogleComputeInstanceGroupManagerVersionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion">GoogleComputeInstanceGroupManagerVersion</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceGroupManagerVersion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion">GoogleComputeInstanceGroupManagerVersion</a>[]

---


### GoogleComputeInstanceGroupManagerVersionOutputReference <a name="GoogleComputeInstanceGroupManagerVersionOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

new googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.putTargetSize">putTargetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.resetTargetSize">resetTargetSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetSize` <a name="putTargetSize" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.putTargetSize"></a>

```typescript
public putTargetSize(value: GoogleComputeInstanceGroupManagerVersionTargetSize): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.putTargetSize.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize">GoogleComputeInstanceGroupManagerVersionTargetSize</a>

---

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTargetSize` <a name="resetTargetSize" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.resetTargetSize"></a>

```typescript
public resetTargetSize(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.targetSize">targetSize</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference">GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.instanceTemplateInput">instanceTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.targetSizeInput">targetSizeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize">GoogleComputeInstanceGroupManagerVersionTargetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.instanceTemplate">instanceTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion">GoogleComputeInstanceGroupManagerVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetSize`<sup>Required</sup> <a name="targetSize" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.targetSize"></a>

```typescript
public readonly targetSize: GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference">GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference</a>

---

##### `instanceTemplateInput`<sup>Optional</sup> <a name="instanceTemplateInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.instanceTemplateInput"></a>

```typescript
public readonly instanceTemplateInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `targetSizeInput`<sup>Optional</sup> <a name="targetSizeInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.targetSizeInput"></a>

```typescript
public readonly targetSizeInput: GoogleComputeInstanceGroupManagerVersionTargetSize;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize">GoogleComputeInstanceGroupManagerVersionTargetSize</a>

---

##### `instanceTemplate`<sup>Required</sup> <a name="instanceTemplate" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.instanceTemplate"></a>

```typescript
public readonly instanceTemplate: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceGroupManagerVersion;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion">GoogleComputeInstanceGroupManagerVersion</a>

---


### GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference <a name="GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer"></a>

```typescript
import { googleComputeInstanceGroupManager } from '@cdktf/provider-google-beta'

new googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.resetFixed">resetFixed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.resetPercent">resetPercent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFixed` <a name="resetFixed" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.resetFixed"></a>

```typescript
public resetFixed(): void
```

##### `resetPercent` <a name="resetPercent" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.resetPercent"></a>

```typescript
public resetPercent(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.fixedInput">fixedInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.percentInput">percentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.fixed">fixed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.percent">percent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize">GoogleComputeInstanceGroupManagerVersionTargetSize</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fixedInput`<sup>Optional</sup> <a name="fixedInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.fixedInput"></a>

```typescript
public readonly fixedInput: number;
```

- *Type:* number

---

##### `percentInput`<sup>Optional</sup> <a name="percentInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.percentInput"></a>

```typescript
public readonly percentInput: number;
```

- *Type:* number

---

##### `fixed`<sup>Required</sup> <a name="fixed" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.fixed"></a>

```typescript
public readonly fixed: number;
```

- *Type:* number

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.percent"></a>

```typescript
public readonly percent: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInstanceGroupManagerVersionTargetSize;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize">GoogleComputeInstanceGroupManagerVersionTargetSize</a>

---



