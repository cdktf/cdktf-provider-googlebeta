# `googleRedisInstance` Submodule <a name="`googleRedisInstance` Submodule" id="@cdktf/provider-google-beta.googleRedisInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleRedisInstance <a name="GoogleRedisInstance" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance google_redis_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.Initializer"></a>

```typescript
import { googleRedisInstance } from '@cdktf/provider-google-beta'

new googleRedisInstance.GoogleRedisInstance(scope: Construct, id: string, config: GoogleRedisInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig">GoogleRedisInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig">GoogleRedisInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.putMaintenancePolicy">putMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.putPersistenceConfig">putPersistenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetAlternativeLocationId">resetAlternativeLocationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetAuthEnabled">resetAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetAuthorizedNetwork">resetAuthorizedNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetConnectMode">resetConnectMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetCustomerManagedKey">resetCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetLocationId">resetLocationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetMaintenancePolicy">resetMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetMaintenanceVersion">resetMaintenanceVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetPersistenceConfig">resetPersistenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetReadReplicasMode">resetReadReplicasMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetRedisConfigs">resetRedisConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetRedisVersion">resetRedisVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetReplicaCount">resetReplicaCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetReservedIpRange">resetReservedIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetSecondaryIpRange">resetSecondaryIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetTier">resetTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetTransitEncryptionMode">resetTransitEncryptionMode</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMaintenancePolicy` <a name="putMaintenancePolicy" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.putMaintenancePolicy"></a>

```typescript
public putMaintenancePolicy(value: GoogleRedisInstanceMaintenancePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.putMaintenancePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicy">GoogleRedisInstanceMaintenancePolicy</a>

---

##### `putPersistenceConfig` <a name="putPersistenceConfig" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.putPersistenceConfig"></a>

```typescript
public putPersistenceConfig(value: GoogleRedisInstancePersistenceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.putPersistenceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfig">GoogleRedisInstancePersistenceConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleRedisInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeouts">GoogleRedisInstanceTimeouts</a>

---

##### `resetAlternativeLocationId` <a name="resetAlternativeLocationId" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetAlternativeLocationId"></a>

```typescript
public resetAlternativeLocationId(): void
```

##### `resetAuthEnabled` <a name="resetAuthEnabled" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetAuthEnabled"></a>

```typescript
public resetAuthEnabled(): void
```

##### `resetAuthorizedNetwork` <a name="resetAuthorizedNetwork" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetAuthorizedNetwork"></a>

```typescript
public resetAuthorizedNetwork(): void
```

##### `resetConnectMode` <a name="resetConnectMode" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetConnectMode"></a>

```typescript
public resetConnectMode(): void
```

##### `resetCustomerManagedKey` <a name="resetCustomerManagedKey" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetCustomerManagedKey"></a>

```typescript
public resetCustomerManagedKey(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocationId` <a name="resetLocationId" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetLocationId"></a>

```typescript
public resetLocationId(): void
```

##### `resetMaintenancePolicy` <a name="resetMaintenancePolicy" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetMaintenancePolicy"></a>

```typescript
public resetMaintenancePolicy(): void
```

##### `resetMaintenanceVersion` <a name="resetMaintenanceVersion" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetMaintenanceVersion"></a>

```typescript
public resetMaintenanceVersion(): void
```

##### `resetPersistenceConfig` <a name="resetPersistenceConfig" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetPersistenceConfig"></a>

```typescript
public resetPersistenceConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetReadReplicasMode` <a name="resetReadReplicasMode" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetReadReplicasMode"></a>

```typescript
public resetReadReplicasMode(): void
```

##### `resetRedisConfigs` <a name="resetRedisConfigs" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetRedisConfigs"></a>

```typescript
public resetRedisConfigs(): void
```

##### `resetRedisVersion` <a name="resetRedisVersion" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetRedisVersion"></a>

```typescript
public resetRedisVersion(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetReplicaCount` <a name="resetReplicaCount" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetReplicaCount"></a>

```typescript
public resetReplicaCount(): void
```

##### `resetReservedIpRange` <a name="resetReservedIpRange" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetReservedIpRange"></a>

```typescript
public resetReservedIpRange(): void
```

##### `resetSecondaryIpRange` <a name="resetSecondaryIpRange" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetSecondaryIpRange"></a>

```typescript
public resetSecondaryIpRange(): void
```

##### `resetTier` <a name="resetTier" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetTier"></a>

```typescript
public resetTier(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTransitEncryptionMode` <a name="resetTransitEncryptionMode" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.resetTransitEncryptionMode"></a>

```typescript
public resetTransitEncryptionMode(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleRedisInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.isConstruct"></a>

```typescript
import { googleRedisInstance } from '@cdktf/provider-google-beta'

googleRedisInstance.GoogleRedisInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.isTerraformElement"></a>

```typescript
import { googleRedisInstance } from '@cdktf/provider-google-beta'

googleRedisInstance.GoogleRedisInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.isTerraformResource"></a>

```typescript
import { googleRedisInstance } from '@cdktf/provider-google-beta'

googleRedisInstance.GoogleRedisInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.generateConfigForImport"></a>

```typescript
import { googleRedisInstance } from '@cdktf/provider-google-beta'

googleRedisInstance.GoogleRedisInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleRedisInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleRedisInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleRedisInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleRedisInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.authString">authString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.currentLocationId">currentLocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.maintenancePolicy">maintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference">GoogleRedisInstanceMaintenancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.maintenanceSchedule">maintenanceSchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleList">GoogleRedisInstanceMaintenanceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.nodes">nodes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesList">GoogleRedisInstanceNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.persistenceConfig">persistenceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference">GoogleRedisInstancePersistenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.persistenceIamIdentity">persistenceIamIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.readEndpoint">readEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.readEndpointPort">readEndpointPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.serverCaCerts">serverCaCerts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsList">GoogleRedisInstanceServerCaCertsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference">GoogleRedisInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.alternativeLocationIdInput">alternativeLocationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.authEnabledInput">authEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.authorizedNetworkInput">authorizedNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.connectModeInput">connectModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.customerManagedKeyInput">customerManagedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.locationIdInput">locationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.maintenancePolicyInput">maintenancePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicy">GoogleRedisInstanceMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.maintenanceVersionInput">maintenanceVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.memorySizeGbInput">memorySizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.persistenceConfigInput">persistenceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfig">GoogleRedisInstancePersistenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.readReplicasModeInput">readReplicasModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.redisConfigsInput">redisConfigsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.redisVersionInput">redisVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.replicaCountInput">replicaCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.reservedIpRangeInput">reservedIpRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.secondaryIpRangeInput">secondaryIpRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.tierInput">tierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeouts">GoogleRedisInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.transitEncryptionModeInput">transitEncryptionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.alternativeLocationId">alternativeLocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.authEnabled">authEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.authorizedNetwork">authorizedNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.connectMode">connectMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.customerManagedKey">customerManagedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.locationId">locationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.maintenanceVersion">maintenanceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.memorySizeGb">memorySizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.readReplicasMode">readReplicasMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.redisConfigs">redisConfigs</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.redisVersion">redisVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.replicaCount">replicaCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.reservedIpRange">reservedIpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.secondaryIpRange">secondaryIpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.tier">tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.transitEncryptionMode">transitEncryptionMode</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authString`<sup>Required</sup> <a name="authString" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.authString"></a>

```typescript
public readonly authString: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `currentLocationId`<sup>Required</sup> <a name="currentLocationId" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.currentLocationId"></a>

```typescript
public readonly currentLocationId: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `maintenancePolicy`<sup>Required</sup> <a name="maintenancePolicy" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.maintenancePolicy"></a>

```typescript
public readonly maintenancePolicy: GoogleRedisInstanceMaintenancePolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference">GoogleRedisInstanceMaintenancePolicyOutputReference</a>

---

##### `maintenanceSchedule`<sup>Required</sup> <a name="maintenanceSchedule" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.maintenanceSchedule"></a>

```typescript
public readonly maintenanceSchedule: GoogleRedisInstanceMaintenanceScheduleList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleList">GoogleRedisInstanceMaintenanceScheduleList</a>

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.nodes"></a>

```typescript
public readonly nodes: GoogleRedisInstanceNodesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesList">GoogleRedisInstanceNodesList</a>

---

##### `persistenceConfig`<sup>Required</sup> <a name="persistenceConfig" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.persistenceConfig"></a>

```typescript
public readonly persistenceConfig: GoogleRedisInstancePersistenceConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference">GoogleRedisInstancePersistenceConfigOutputReference</a>

---

##### `persistenceIamIdentity`<sup>Required</sup> <a name="persistenceIamIdentity" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.persistenceIamIdentity"></a>

```typescript
public readonly persistenceIamIdentity: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `readEndpoint`<sup>Required</sup> <a name="readEndpoint" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.readEndpoint"></a>

```typescript
public readonly readEndpoint: string;
```

- *Type:* string

---

##### `readEndpointPort`<sup>Required</sup> <a name="readEndpointPort" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.readEndpointPort"></a>

```typescript
public readonly readEndpointPort: number;
```

- *Type:* number

---

##### `serverCaCerts`<sup>Required</sup> <a name="serverCaCerts" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.serverCaCerts"></a>

```typescript
public readonly serverCaCerts: GoogleRedisInstanceServerCaCertsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsList">GoogleRedisInstanceServerCaCertsList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleRedisInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference">GoogleRedisInstanceTimeoutsOutputReference</a>

---

##### `alternativeLocationIdInput`<sup>Optional</sup> <a name="alternativeLocationIdInput" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.alternativeLocationIdInput"></a>

```typescript
public readonly alternativeLocationIdInput: string;
```

- *Type:* string

---

##### `authEnabledInput`<sup>Optional</sup> <a name="authEnabledInput" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.authEnabledInput"></a>

```typescript
public readonly authEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `authorizedNetworkInput`<sup>Optional</sup> <a name="authorizedNetworkInput" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.authorizedNetworkInput"></a>

```typescript
public readonly authorizedNetworkInput: string;
```

- *Type:* string

---

##### `connectModeInput`<sup>Optional</sup> <a name="connectModeInput" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.connectModeInput"></a>

```typescript
public readonly connectModeInput: string;
```

- *Type:* string

---

##### `customerManagedKeyInput`<sup>Optional</sup> <a name="customerManagedKeyInput" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.customerManagedKeyInput"></a>

```typescript
public readonly customerManagedKeyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationIdInput`<sup>Optional</sup> <a name="locationIdInput" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.locationIdInput"></a>

```typescript
public readonly locationIdInput: string;
```

- *Type:* string

---

##### `maintenancePolicyInput`<sup>Optional</sup> <a name="maintenancePolicyInput" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.maintenancePolicyInput"></a>

```typescript
public readonly maintenancePolicyInput: GoogleRedisInstanceMaintenancePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicy">GoogleRedisInstanceMaintenancePolicy</a>

---

##### `maintenanceVersionInput`<sup>Optional</sup> <a name="maintenanceVersionInput" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.maintenanceVersionInput"></a>

```typescript
public readonly maintenanceVersionInput: string;
```

- *Type:* string

---

##### `memorySizeGbInput`<sup>Optional</sup> <a name="memorySizeGbInput" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.memorySizeGbInput"></a>

```typescript
public readonly memorySizeGbInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `persistenceConfigInput`<sup>Optional</sup> <a name="persistenceConfigInput" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.persistenceConfigInput"></a>

```typescript
public readonly persistenceConfigInput: GoogleRedisInstancePersistenceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfig">GoogleRedisInstancePersistenceConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `readReplicasModeInput`<sup>Optional</sup> <a name="readReplicasModeInput" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.readReplicasModeInput"></a>

```typescript
public readonly readReplicasModeInput: string;
```

- *Type:* string

---

##### `redisConfigsInput`<sup>Optional</sup> <a name="redisConfigsInput" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.redisConfigsInput"></a>

```typescript
public readonly redisConfigsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `redisVersionInput`<sup>Optional</sup> <a name="redisVersionInput" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.redisVersionInput"></a>

```typescript
public readonly redisVersionInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `replicaCountInput`<sup>Optional</sup> <a name="replicaCountInput" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.replicaCountInput"></a>

```typescript
public readonly replicaCountInput: number;
```

- *Type:* number

---

##### `reservedIpRangeInput`<sup>Optional</sup> <a name="reservedIpRangeInput" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.reservedIpRangeInput"></a>

```typescript
public readonly reservedIpRangeInput: string;
```

- *Type:* string

---

##### `secondaryIpRangeInput`<sup>Optional</sup> <a name="secondaryIpRangeInput" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.secondaryIpRangeInput"></a>

```typescript
public readonly secondaryIpRangeInput: string;
```

- *Type:* string

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.tierInput"></a>

```typescript
public readonly tierInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleRedisInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeouts">GoogleRedisInstanceTimeouts</a>

---

##### `transitEncryptionModeInput`<sup>Optional</sup> <a name="transitEncryptionModeInput" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.transitEncryptionModeInput"></a>

```typescript
public readonly transitEncryptionModeInput: string;
```

- *Type:* string

---

##### `alternativeLocationId`<sup>Required</sup> <a name="alternativeLocationId" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.alternativeLocationId"></a>

```typescript
public readonly alternativeLocationId: string;
```

- *Type:* string

---

##### `authEnabled`<sup>Required</sup> <a name="authEnabled" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.authEnabled"></a>

```typescript
public readonly authEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `authorizedNetwork`<sup>Required</sup> <a name="authorizedNetwork" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.authorizedNetwork"></a>

```typescript
public readonly authorizedNetwork: string;
```

- *Type:* string

---

##### `connectMode`<sup>Required</sup> <a name="connectMode" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.connectMode"></a>

```typescript
public readonly connectMode: string;
```

- *Type:* string

---

##### `customerManagedKey`<sup>Required</sup> <a name="customerManagedKey" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.customerManagedKey"></a>

```typescript
public readonly customerManagedKey: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationId`<sup>Required</sup> <a name="locationId" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.locationId"></a>

```typescript
public readonly locationId: string;
```

- *Type:* string

---

##### `maintenanceVersion`<sup>Required</sup> <a name="maintenanceVersion" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.maintenanceVersion"></a>

```typescript
public readonly maintenanceVersion: string;
```

- *Type:* string

---

##### `memorySizeGb`<sup>Required</sup> <a name="memorySizeGb" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.memorySizeGb"></a>

```typescript
public readonly memorySizeGb: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `readReplicasMode`<sup>Required</sup> <a name="readReplicasMode" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.readReplicasMode"></a>

```typescript
public readonly readReplicasMode: string;
```

- *Type:* string

---

##### `redisConfigs`<sup>Required</sup> <a name="redisConfigs" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.redisConfigs"></a>

```typescript
public readonly redisConfigs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `redisVersion`<sup>Required</sup> <a name="redisVersion" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.redisVersion"></a>

```typescript
public readonly redisVersion: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `replicaCount`<sup>Required</sup> <a name="replicaCount" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.replicaCount"></a>

```typescript
public readonly replicaCount: number;
```

- *Type:* number

---

##### `reservedIpRange`<sup>Required</sup> <a name="reservedIpRange" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.reservedIpRange"></a>

```typescript
public readonly reservedIpRange: string;
```

- *Type:* string

---

##### `secondaryIpRange`<sup>Required</sup> <a name="secondaryIpRange" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.secondaryIpRange"></a>

```typescript
public readonly secondaryIpRange: string;
```

- *Type:* string

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

---

##### `transitEncryptionMode`<sup>Required</sup> <a name="transitEncryptionMode" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.transitEncryptionMode"></a>

```typescript
public readonly transitEncryptionMode: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleRedisInstanceConfig <a name="GoogleRedisInstanceConfig" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.Initializer"></a>

```typescript
import { googleRedisInstance } from '@cdktf/provider-google-beta'

const googleRedisInstanceConfig: googleRedisInstance.GoogleRedisInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.memorySizeGb">memorySizeGb</a></code> | <code>number</code> | Redis memory size in GiB. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.name">name</a></code> | <code>string</code> | The ID of the instance or a fully qualified identifier for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.alternativeLocationId">alternativeLocationId</a></code> | <code>string</code> | Only applicable to STANDARD_HA tier which protects the instance against zonal failures by provisioning it across two zones. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.authEnabled">authEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.authorizedNetwork">authorizedNetwork</a></code> | <code>string</code> | The full name of the Google Compute Engine network to which the instance is connected. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.connectMode">connectMode</a></code> | <code>string</code> | The connection mode of the Redis instance. Default value: "DIRECT_PEERING" Possible values: ["DIRECT_PEERING", "PRIVATE_SERVICE_ACCESS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.customerManagedKey">customerManagedKey</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.displayName">displayName</a></code> | <code>string</code> | An arbitrary and optional user-provided name for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#id GoogleRedisInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.locationId">locationId</a></code> | <code>string</code> | The zone where the instance will be provisioned. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.maintenancePolicy">maintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicy">GoogleRedisInstanceMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.maintenanceVersion">maintenanceVersion</a></code> | <code>string</code> | The self service update maintenance version. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.persistenceConfig">persistenceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfig">GoogleRedisInstancePersistenceConfig</a></code> | persistence_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#project GoogleRedisInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.readReplicasMode">readReplicasMode</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.redisConfigs">redisConfigs</a></code> | <code>{[ key: string ]: string}</code> | Redis configuration parameters, according to http://redis.io/topics/config. Please check Memorystore documentation for the list of supported parameters: https://cloud.google.com/memorystore/docs/redis/reference/rest/v1/projects.locations.instances#Instance.FIELDS.redis_configs. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.redisVersion">redisVersion</a></code> | <code>string</code> | The version of Redis software. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.region">region</a></code> | <code>string</code> | The name of the Redis region of the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.replicaCount">replicaCount</a></code> | <code>number</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.reservedIpRange">reservedIpRange</a></code> | <code>string</code> | The CIDR range of internal addresses that are reserved for this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.secondaryIpRange">secondaryIpRange</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.tier">tier</a></code> | <code>string</code> | The service tier of the instance. Must be one of these values:. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeouts">GoogleRedisInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.transitEncryptionMode">transitEncryptionMode</a></code> | <code>string</code> | The TLS mode of the Redis instance, If not provided, TLS is disabled for the instance. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `memorySizeGb`<sup>Required</sup> <a name="memorySizeGb" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.memorySizeGb"></a>

```typescript
public readonly memorySizeGb: number;
```

- *Type:* number

Redis memory size in GiB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#memory_size_gb GoogleRedisInstance#memory_size_gb}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The ID of the instance or a fully qualified identifier for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#name GoogleRedisInstance#name}

---

##### `alternativeLocationId`<sup>Optional</sup> <a name="alternativeLocationId" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.alternativeLocationId"></a>

```typescript
public readonly alternativeLocationId: string;
```

- *Type:* string

Only applicable to STANDARD_HA tier which protects the instance against zonal failures by provisioning it across two zones.

If provided, it must be a different zone from the one provided in
[locationId].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#alternative_location_id GoogleRedisInstance#alternative_location_id}

---

##### `authEnabled`<sup>Optional</sup> <a name="authEnabled" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.authEnabled"></a>

```typescript
public readonly authEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional.

Indicates whether OSS Redis AUTH is enabled for the
instance. If set to "true" AUTH is enabled on the instance.
Default value is "false" meaning AUTH is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#auth_enabled GoogleRedisInstance#auth_enabled}

---

##### `authorizedNetwork`<sup>Optional</sup> <a name="authorizedNetwork" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.authorizedNetwork"></a>

```typescript
public readonly authorizedNetwork: string;
```

- *Type:* string

The full name of the Google Compute Engine network to which the instance is connected.

If left unspecified, the default network
will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#authorized_network GoogleRedisInstance#authorized_network}

---

##### `connectMode`<sup>Optional</sup> <a name="connectMode" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.connectMode"></a>

```typescript
public readonly connectMode: string;
```

- *Type:* string

The connection mode of the Redis instance. Default value: "DIRECT_PEERING" Possible values: ["DIRECT_PEERING", "PRIVATE_SERVICE_ACCESS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#connect_mode GoogleRedisInstance#connect_mode}

---

##### `customerManagedKey`<sup>Optional</sup> <a name="customerManagedKey" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.customerManagedKey"></a>

```typescript
public readonly customerManagedKey: string;
```

- *Type:* string

Optional.

The KMS key reference that you want to use to encrypt the data at rest for this Redis
instance. If this is provided, CMEK is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#customer_managed_key GoogleRedisInstance#customer_managed_key}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

An arbitrary and optional user-provided name for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#display_name GoogleRedisInstance#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#id GoogleRedisInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#labels GoogleRedisInstance#labels}

---

##### `locationId`<sup>Optional</sup> <a name="locationId" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.locationId"></a>

```typescript
public readonly locationId: string;
```

- *Type:* string

The zone where the instance will be provisioned.

If not provided,
the service will choose a zone for the instance. For STANDARD_HA tier,
instances will be created across two zones for protection against
zonal failures. If [alternativeLocationId] is also provided, it must
be different from [locationId].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#location_id GoogleRedisInstance#location_id}

---

##### `maintenancePolicy`<sup>Optional</sup> <a name="maintenancePolicy" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.maintenancePolicy"></a>

```typescript
public readonly maintenancePolicy: GoogleRedisInstanceMaintenancePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicy">GoogleRedisInstanceMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#maintenance_policy GoogleRedisInstance#maintenance_policy}

---

##### `maintenanceVersion`<sup>Optional</sup> <a name="maintenanceVersion" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.maintenanceVersion"></a>

```typescript
public readonly maintenanceVersion: string;
```

- *Type:* string

The self service update maintenance version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#maintenance_version GoogleRedisInstance#maintenance_version}

---

##### `persistenceConfig`<sup>Optional</sup> <a name="persistenceConfig" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.persistenceConfig"></a>

```typescript
public readonly persistenceConfig: GoogleRedisInstancePersistenceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfig">GoogleRedisInstancePersistenceConfig</a>

persistence_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#persistence_config GoogleRedisInstance#persistence_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#project GoogleRedisInstance#project}.

---

##### `readReplicasMode`<sup>Optional</sup> <a name="readReplicasMode" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.readReplicasMode"></a>

```typescript
public readonly readReplicasMode: string;
```

- *Type:* string

Optional.

Read replica mode. Can only be specified when trying to create the instance.
If not set, Memorystore Redis backend will default to READ_REPLICAS_DISABLED.
- READ_REPLICAS_DISABLED: If disabled, read endpoint will not be provided and the
instance cannot scale up or down the number of replicas.
- READ_REPLICAS_ENABLED: If enabled, read endpoint will be provided and the instance
can scale up and down the number of replicas. Possible values: ["READ_REPLICAS_DISABLED", "READ_REPLICAS_ENABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#read_replicas_mode GoogleRedisInstance#read_replicas_mode}

---

##### `redisConfigs`<sup>Optional</sup> <a name="redisConfigs" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.redisConfigs"></a>

```typescript
public readonly redisConfigs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Redis configuration parameters, according to http://redis.io/topics/config. Please check Memorystore documentation for the list of supported parameters: https://cloud.google.com/memorystore/docs/redis/reference/rest/v1/projects.locations.instances#Instance.FIELDS.redis_configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#redis_configs GoogleRedisInstance#redis_configs}

---

##### `redisVersion`<sup>Optional</sup> <a name="redisVersion" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.redisVersion"></a>

```typescript
public readonly redisVersion: string;
```

- *Type:* string

The version of Redis software.

If not provided, latest supported
version will be used. Please check the API documentation linked
at the top for the latest valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#redis_version GoogleRedisInstance#redis_version}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The name of the Redis region of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#region GoogleRedisInstance#region}

---

##### `replicaCount`<sup>Optional</sup> <a name="replicaCount" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.replicaCount"></a>

```typescript
public readonly replicaCount: number;
```

- *Type:* number

Optional.

The number of replica nodes. The valid range for the Standard Tier with
read replicas enabled is [1-5] and defaults to 2. If read replicas are not enabled
for a Standard Tier instance, the only valid value is 1 and the default is 1.
The valid value for basic tier is 0 and the default is also 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#replica_count GoogleRedisInstance#replica_count}

---

##### `reservedIpRange`<sup>Optional</sup> <a name="reservedIpRange" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.reservedIpRange"></a>

```typescript
public readonly reservedIpRange: string;
```

- *Type:* string

The CIDR range of internal addresses that are reserved for this instance.

If not provided, the service will choose an unused /29
block, for example, 10.0.0.0/29 or 192.168.0.0/29. Ranges must be
unique and non-overlapping with existing subnets in an authorized
network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#reserved_ip_range GoogleRedisInstance#reserved_ip_range}

---

##### `secondaryIpRange`<sup>Optional</sup> <a name="secondaryIpRange" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.secondaryIpRange"></a>

```typescript
public readonly secondaryIpRange: string;
```

- *Type:* string

Optional.

Additional IP range for node placement. Required when enabling read replicas on
an existing instance. For DIRECT_PEERING mode value must be a CIDR range of size /28, or
"auto". For PRIVATE_SERVICE_ACCESS mode value must be the name of an allocated address
range associated with the private service access connection, or "auto".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#secondary_ip_range GoogleRedisInstance#secondary_ip_range}

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

The service tier of the instance. Must be one of these values:.

BASIC: standalone instance
- STANDARD_HA: highly available primary/replica instances Default value: "BASIC" Possible values: ["BASIC", "STANDARD_HA"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#tier GoogleRedisInstance#tier}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleRedisInstanceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeouts">GoogleRedisInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#timeouts GoogleRedisInstance#timeouts}

---

##### `transitEncryptionMode`<sup>Optional</sup> <a name="transitEncryptionMode" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceConfig.property.transitEncryptionMode"></a>

```typescript
public readonly transitEncryptionMode: string;
```

- *Type:* string

The TLS mode of the Redis instance, If not provided, TLS is disabled for the instance.

SERVER_AUTHENTICATION: Client to Server traffic encryption enabled with server authentication Default value: "DISABLED" Possible values: ["SERVER_AUTHENTICATION", "DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#transit_encryption_mode GoogleRedisInstance#transit_encryption_mode}

---

### GoogleRedisInstanceMaintenancePolicy <a name="GoogleRedisInstanceMaintenancePolicy" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicy.Initializer"></a>

```typescript
import { googleRedisInstance } from '@cdktf/provider-google-beta'

const googleRedisInstanceMaintenancePolicy: googleRedisInstance.GoogleRedisInstanceMaintenancePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicy.property.description">description</a></code> | <code>string</code> | Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicy.property.weeklyMaintenanceWindow">weeklyMaintenanceWindow</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindow">GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>[]</code> | weekly_maintenance_window block. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#description GoogleRedisInstance#description}

---

##### `weeklyMaintenanceWindow`<sup>Optional</sup> <a name="weeklyMaintenanceWindow" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicy.property.weeklyMaintenanceWindow"></a>

```typescript
public readonly weeklyMaintenanceWindow: IResolvable | GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindow[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindow">GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>[]

weekly_maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#weekly_maintenance_window GoogleRedisInstance#weekly_maintenance_window}

---

### GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindow <a name="GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindow" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindow.Initializer"></a>

```typescript
import { googleRedisInstance } from '@cdktf/provider-google-beta'

const googleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindow: googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.day">day</a></code> | <code>string</code> | Required. The day of week that maintenance updates occur. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | start_time block. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

Required. The day of week that maintenance updates occur.

DAY_OF_WEEK_UNSPECIFIED: The day of the week is unspecified.
- MONDAY: Monday
- TUESDAY: Tuesday
- WEDNESDAY: Wednesday
- THURSDAY: Thursday
- FRIDAY: Friday
- SATURDAY: Saturday
- SUNDAY: Sunday Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#day GoogleRedisInstance#day}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.startTime"></a>

```typescript
public readonly startTime: GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#start_time GoogleRedisInstance#start_time}

---

### GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime <a name="GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.Initializer"></a>

```typescript
import { googleRedisInstance } from '@cdktf/provider-google-beta'

const googleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime: googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.hours">hours</a></code> | <code>number</code> | Hours of day in 24 hour format. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.minutes">minutes</a></code> | <code>number</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.nanos">nanos</a></code> | <code>number</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.seconds">seconds</a></code> | <code>number</code> | Seconds of minutes of the time. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

Hours of day in 24 hour format.

Should be from 0 to 23.
An API may choose to allow the value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#hours GoogleRedisInstance#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#minutes GoogleRedisInstance#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#nanos GoogleRedisInstance#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

Seconds of minutes of the time.

Must normally be from 0 to 59.
An API may allow the value 60 if it allows leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#seconds GoogleRedisInstance#seconds}

---

### GoogleRedisInstanceMaintenanceSchedule <a name="GoogleRedisInstanceMaintenanceSchedule" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceSchedule.Initializer"></a>

```typescript
import { googleRedisInstance } from '@cdktf/provider-google-beta'

const googleRedisInstanceMaintenanceSchedule: googleRedisInstance.GoogleRedisInstanceMaintenanceSchedule = { ... }
```


### GoogleRedisInstanceNodes <a name="GoogleRedisInstanceNodes" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodes.Initializer"></a>

```typescript
import { googleRedisInstance } from '@cdktf/provider-google-beta'

const googleRedisInstanceNodes: googleRedisInstance.GoogleRedisInstanceNodes = { ... }
```


### GoogleRedisInstancePersistenceConfig <a name="GoogleRedisInstancePersistenceConfig" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfig.Initializer"></a>

```typescript
import { googleRedisInstance } from '@cdktf/provider-google-beta'

const googleRedisInstancePersistenceConfig: googleRedisInstance.GoogleRedisInstancePersistenceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfig.property.persistenceMode">persistenceMode</a></code> | <code>string</code> | Optional. Controls whether Persistence features are enabled. If not provided, the existing value will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfig.property.rdbSnapshotPeriod">rdbSnapshotPeriod</a></code> | <code>string</code> | Optional. Available snapshot periods for scheduling. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfig.property.rdbSnapshotStartTime">rdbSnapshotStartTime</a></code> | <code>string</code> | Optional. |

---

##### `persistenceMode`<sup>Optional</sup> <a name="persistenceMode" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfig.property.persistenceMode"></a>

```typescript
public readonly persistenceMode: string;
```

- *Type:* string

Optional. Controls whether Persistence features are enabled. If not provided, the existing value will be used.

DISABLED: 	Persistence is disabled for the instance, and any existing snapshots are deleted.
- RDB: RDB based Persistence is enabled. Possible values: ["DISABLED", "RDB"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#persistence_mode GoogleRedisInstance#persistence_mode}

---

##### `rdbSnapshotPeriod`<sup>Optional</sup> <a name="rdbSnapshotPeriod" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfig.property.rdbSnapshotPeriod"></a>

```typescript
public readonly rdbSnapshotPeriod: string;
```

- *Type:* string

Optional. Available snapshot periods for scheduling.

ONE_HOUR:	Snapshot every 1 hour.
- SIX_HOURS:	Snapshot every 6 hours.
- TWELVE_HOURS:	Snapshot every 12 hours.
- TWENTY_FOUR_HOURS:	Snapshot every 24 hours. Possible values: ["ONE_HOUR", "SIX_HOURS", "TWELVE_HOURS", "TWENTY_FOUR_HOURS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#rdb_snapshot_period GoogleRedisInstance#rdb_snapshot_period}

---

##### `rdbSnapshotStartTime`<sup>Optional</sup> <a name="rdbSnapshotStartTime" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfig.property.rdbSnapshotStartTime"></a>

```typescript
public readonly rdbSnapshotStartTime: string;
```

- *Type:* string

Optional.

Date and time that the first snapshot was/will be attempted,
and to which future snapshots will be aligned. If not provided,
the current time will be used.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution
and up to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#rdb_snapshot_start_time GoogleRedisInstance#rdb_snapshot_start_time}

---

### GoogleRedisInstanceServerCaCerts <a name="GoogleRedisInstanceServerCaCerts" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCerts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCerts.Initializer"></a>

```typescript
import { googleRedisInstance } from '@cdktf/provider-google-beta'

const googleRedisInstanceServerCaCerts: googleRedisInstance.GoogleRedisInstanceServerCaCerts = { ... }
```


### GoogleRedisInstanceTimeouts <a name="GoogleRedisInstanceTimeouts" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeouts.Initializer"></a>

```typescript
import { googleRedisInstance } from '@cdktf/provider-google-beta'

const googleRedisInstanceTimeouts: googleRedisInstance.GoogleRedisInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#create GoogleRedisInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#delete GoogleRedisInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#update GoogleRedisInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#create GoogleRedisInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#delete GoogleRedisInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_redis_instance#update GoogleRedisInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleRedisInstanceMaintenancePolicyOutputReference <a name="GoogleRedisInstanceMaintenancePolicyOutputReference" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.Initializer"></a>

```typescript
import { googleRedisInstance } from '@cdktf/provider-google-beta'

new googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow">putWeeklyMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.resetWeeklyMaintenanceWindow">resetWeeklyMaintenanceWindow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWeeklyMaintenanceWindow` <a name="putWeeklyMaintenanceWindow" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow"></a>

```typescript
public putWeeklyMaintenanceWindow(value: IResolvable | GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindow[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindow">GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetWeeklyMaintenanceWindow` <a name="resetWeeklyMaintenanceWindow" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.resetWeeklyMaintenanceWindow"></a>

```typescript
public resetWeeklyMaintenanceWindow(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindow">weeklyMaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList">GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindowInput">weeklyMaintenanceWindowInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindow">GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicy">GoogleRedisInstanceMaintenancePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `weeklyMaintenanceWindow`<sup>Required</sup> <a name="weeklyMaintenanceWindow" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindow"></a>

```typescript
public readonly weeklyMaintenanceWindow: GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList">GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `weeklyMaintenanceWindowInput`<sup>Optional</sup> <a name="weeklyMaintenanceWindowInput" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindowInput"></a>

```typescript
public readonly weeklyMaintenanceWindowInput: IResolvable | GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindow[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindow">GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleRedisInstanceMaintenancePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicy">GoogleRedisInstanceMaintenancePolicy</a>

---


### GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList <a name="GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer"></a>

```typescript
import { googleRedisInstance } from '@cdktf/provider-google-beta'

new googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get"></a>

```typescript
public get(index: number): GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindow">GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindow[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindow">GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>[]

---


### GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference <a name="GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { googleRedisInstance } from '@cdktf/provider-google-beta'

new googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime">putStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStartTime` <a name="putStartTime" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime"></a>

```typescript
public putStartTime(value: GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference">GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.dayInput">dayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTimeInput">startTimeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.day">day</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindow">GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTime"></a>

```typescript
public readonly startTime: GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference">GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference</a>

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.dayInput"></a>

```typescript
public readonly dayInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindow;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindow">GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>

---


### GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference <a name="GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer"></a>

```typescript
import { googleRedisInstance } from '@cdktf/provider-google-beta'

new googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetNanos">resetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetSeconds">resetSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetHours"></a>

```typescript
public resetHours(): void
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetMinutes"></a>

```typescript
public resetMinutes(): void
```

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetNanos"></a>

```typescript
public resetNanos(): void
```

##### `resetSeconds` <a name="resetSeconds" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetSeconds"></a>

```typescript
public resetSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanosInput">nanosInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.secondsInput">secondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hours">hours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutes">minutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.seconds">seconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hoursInput"></a>

```typescript
public readonly hoursInput: number;
```

- *Type:* number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutesInput"></a>

```typescript
public readonly minutesInput: number;
```

- *Type:* number

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanosInput"></a>

```typescript
public readonly nanosInput: number;
```

- *Type:* number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.secondsInput"></a>

```typescript
public readonly secondsInput: number;
```

- *Type:* number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---


### GoogleRedisInstanceMaintenanceScheduleList <a name="GoogleRedisInstanceMaintenanceScheduleList" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleList.Initializer"></a>

```typescript
import { googleRedisInstance } from '@cdktf/provider-google-beta'

new googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleList.get"></a>

```typescript
public get(index: number): GoogleRedisInstanceMaintenanceScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleRedisInstanceMaintenanceScheduleOutputReference <a name="GoogleRedisInstanceMaintenanceScheduleOutputReference" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.Initializer"></a>

```typescript
import { googleRedisInstance } from '@cdktf/provider-google-beta'

new googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.property.scheduleDeadlineTime">scheduleDeadlineTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceSchedule">GoogleRedisInstanceMaintenanceSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `scheduleDeadlineTime`<sup>Required</sup> <a name="scheduleDeadlineTime" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.property.scheduleDeadlineTime"></a>

```typescript
public readonly scheduleDeadlineTime: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleRedisInstanceMaintenanceSchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceMaintenanceSchedule">GoogleRedisInstanceMaintenanceSchedule</a>

---


### GoogleRedisInstanceNodesList <a name="GoogleRedisInstanceNodesList" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesList.Initializer"></a>

```typescript
import { googleRedisInstance } from '@cdktf/provider-google-beta'

new googleRedisInstance.GoogleRedisInstanceNodesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesList.get"></a>

```typescript
public get(index: number): GoogleRedisInstanceNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleRedisInstanceNodesOutputReference <a name="GoogleRedisInstanceNodesOutputReference" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.Initializer"></a>

```typescript
import { googleRedisInstance } from '@cdktf/provider-google-beta'

new googleRedisInstance.GoogleRedisInstanceNodesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.property.zone">zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodes">GoogleRedisInstanceNodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleRedisInstanceNodes;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceNodes">GoogleRedisInstanceNodes</a>

---


### GoogleRedisInstancePersistenceConfigOutputReference <a name="GoogleRedisInstancePersistenceConfigOutputReference" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.Initializer"></a>

```typescript
import { googleRedisInstance } from '@cdktf/provider-google-beta'

new googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.resetPersistenceMode">resetPersistenceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.resetRdbSnapshotPeriod">resetRdbSnapshotPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.resetRdbSnapshotStartTime">resetRdbSnapshotStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPersistenceMode` <a name="resetPersistenceMode" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.resetPersistenceMode"></a>

```typescript
public resetPersistenceMode(): void
```

##### `resetRdbSnapshotPeriod` <a name="resetRdbSnapshotPeriod" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.resetRdbSnapshotPeriod"></a>

```typescript
public resetRdbSnapshotPeriod(): void
```

##### `resetRdbSnapshotStartTime` <a name="resetRdbSnapshotStartTime" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.resetRdbSnapshotStartTime"></a>

```typescript
public resetRdbSnapshotStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.property.rdbNextSnapshotTime">rdbNextSnapshotTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.property.persistenceModeInput">persistenceModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.property.rdbSnapshotPeriodInput">rdbSnapshotPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.property.rdbSnapshotStartTimeInput">rdbSnapshotStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.property.persistenceMode">persistenceMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.property.rdbSnapshotPeriod">rdbSnapshotPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.property.rdbSnapshotStartTime">rdbSnapshotStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfig">GoogleRedisInstancePersistenceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rdbNextSnapshotTime`<sup>Required</sup> <a name="rdbNextSnapshotTime" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.property.rdbNextSnapshotTime"></a>

```typescript
public readonly rdbNextSnapshotTime: string;
```

- *Type:* string

---

##### `persistenceModeInput`<sup>Optional</sup> <a name="persistenceModeInput" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.property.persistenceModeInput"></a>

```typescript
public readonly persistenceModeInput: string;
```

- *Type:* string

---

##### `rdbSnapshotPeriodInput`<sup>Optional</sup> <a name="rdbSnapshotPeriodInput" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.property.rdbSnapshotPeriodInput"></a>

```typescript
public readonly rdbSnapshotPeriodInput: string;
```

- *Type:* string

---

##### `rdbSnapshotStartTimeInput`<sup>Optional</sup> <a name="rdbSnapshotStartTimeInput" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.property.rdbSnapshotStartTimeInput"></a>

```typescript
public readonly rdbSnapshotStartTimeInput: string;
```

- *Type:* string

---

##### `persistenceMode`<sup>Required</sup> <a name="persistenceMode" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.property.persistenceMode"></a>

```typescript
public readonly persistenceMode: string;
```

- *Type:* string

---

##### `rdbSnapshotPeriod`<sup>Required</sup> <a name="rdbSnapshotPeriod" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.property.rdbSnapshotPeriod"></a>

```typescript
public readonly rdbSnapshotPeriod: string;
```

- *Type:* string

---

##### `rdbSnapshotStartTime`<sup>Required</sup> <a name="rdbSnapshotStartTime" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.property.rdbSnapshotStartTime"></a>

```typescript
public readonly rdbSnapshotStartTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleRedisInstancePersistenceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstancePersistenceConfig">GoogleRedisInstancePersistenceConfig</a>

---


### GoogleRedisInstanceServerCaCertsList <a name="GoogleRedisInstanceServerCaCertsList" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsList.Initializer"></a>

```typescript
import { googleRedisInstance } from '@cdktf/provider-google-beta'

new googleRedisInstance.GoogleRedisInstanceServerCaCertsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsList.get"></a>

```typescript
public get(index: number): GoogleRedisInstanceServerCaCertsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleRedisInstanceServerCaCertsOutputReference <a name="GoogleRedisInstanceServerCaCertsOutputReference" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.Initializer"></a>

```typescript
import { googleRedisInstance } from '@cdktf/provider-google-beta'

new googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.property.cert">cert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.property.expireTime">expireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.property.sha1Fingerprint">sha1Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCerts">GoogleRedisInstanceServerCaCerts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.property.cert"></a>

```typescript
public readonly cert: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `sha1Fingerprint`<sup>Required</sup> <a name="sha1Fingerprint" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.property.sha1Fingerprint"></a>

```typescript
public readonly sha1Fingerprint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCertsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleRedisInstanceServerCaCerts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceServerCaCerts">GoogleRedisInstanceServerCaCerts</a>

---


### GoogleRedisInstanceTimeoutsOutputReference <a name="GoogleRedisInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleRedisInstance } from '@cdktf/provider-google-beta'

new googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeouts">GoogleRedisInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleRedisInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleRedisInstance.GoogleRedisInstanceTimeouts">GoogleRedisInstanceTimeouts</a>

---



