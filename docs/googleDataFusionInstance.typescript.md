# `googleDataFusionInstance` Submodule <a name="`googleDataFusionInstance` Submodule" id="@cdktf/provider-google-beta.googleDataFusionInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataFusionInstance <a name="GoogleDataFusionInstance" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_data_fusion_instance google_data_fusion_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer"></a>

```typescript
import { googleDataFusionInstance } from '@cdktf/provider-google-beta'

new googleDataFusionInstance.GoogleDataFusionInstance(scope: Construct, id: string, config: GoogleDataFusionInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig">GoogleDataFusionInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig">GoogleDataFusionInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putAccelerators">putAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putCryptoKeyConfig">putCryptoKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putEventPublishConfig">putEventPublishConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putNetworkConfig">putNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetAccelerators">resetAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetCryptoKeyConfig">resetCryptoKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetDataprocServiceAccount">resetDataprocServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetEnableRbac">resetEnableRbac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetEnableStackdriverLogging">resetEnableStackdriverLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetEnableStackdriverMonitoring">resetEnableStackdriverMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetEventPublishConfig">resetEventPublishConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetNetworkConfig">resetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetPrivateInstance">resetPrivateInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetVersion">resetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccelerators` <a name="putAccelerators" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putAccelerators"></a>

```typescript
public putAccelerators(value: IResolvable | GoogleDataFusionInstanceAccelerators[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putAccelerators.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators">GoogleDataFusionInstanceAccelerators</a>[]

---

##### `putCryptoKeyConfig` <a name="putCryptoKeyConfig" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putCryptoKeyConfig"></a>

```typescript
public putCryptoKeyConfig(value: GoogleDataFusionInstanceCryptoKeyConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putCryptoKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig">GoogleDataFusionInstanceCryptoKeyConfig</a>

---

##### `putEventPublishConfig` <a name="putEventPublishConfig" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putEventPublishConfig"></a>

```typescript
public putEventPublishConfig(value: GoogleDataFusionInstanceEventPublishConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putEventPublishConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig">GoogleDataFusionInstanceEventPublishConfig</a>

---

##### `putNetworkConfig` <a name="putNetworkConfig" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putNetworkConfig"></a>

```typescript
public putNetworkConfig(value: GoogleDataFusionInstanceNetworkConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig">GoogleDataFusionInstanceNetworkConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDataFusionInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts">GoogleDataFusionInstanceTimeouts</a>

---

##### `resetAccelerators` <a name="resetAccelerators" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetAccelerators"></a>

```typescript
public resetAccelerators(): void
```

##### `resetCryptoKeyConfig` <a name="resetCryptoKeyConfig" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetCryptoKeyConfig"></a>

```typescript
public resetCryptoKeyConfig(): void
```

##### `resetDataprocServiceAccount` <a name="resetDataprocServiceAccount" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetDataprocServiceAccount"></a>

```typescript
public resetDataprocServiceAccount(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEnableRbac` <a name="resetEnableRbac" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetEnableRbac"></a>

```typescript
public resetEnableRbac(): void
```

##### `resetEnableStackdriverLogging` <a name="resetEnableStackdriverLogging" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetEnableStackdriverLogging"></a>

```typescript
public resetEnableStackdriverLogging(): void
```

##### `resetEnableStackdriverMonitoring` <a name="resetEnableStackdriverMonitoring" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetEnableStackdriverMonitoring"></a>

```typescript
public resetEnableStackdriverMonitoring(): void
```

##### `resetEventPublishConfig` <a name="resetEventPublishConfig" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetEventPublishConfig"></a>

```typescript
public resetEventPublishConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetNetworkConfig` <a name="resetNetworkConfig" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetNetworkConfig"></a>

```typescript
public resetNetworkConfig(): void
```

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetOptions"></a>

```typescript
public resetOptions(): void
```

##### `resetPrivateInstance` <a name="resetPrivateInstance" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetPrivateInstance"></a>

```typescript
public resetPrivateInstance(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetVersion"></a>

```typescript
public resetVersion(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataFusionInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.isConstruct"></a>

```typescript
import { googleDataFusionInstance } from '@cdktf/provider-google-beta'

googleDataFusionInstance.GoogleDataFusionInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.isTerraformElement"></a>

```typescript
import { googleDataFusionInstance } from '@cdktf/provider-google-beta'

googleDataFusionInstance.GoogleDataFusionInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.isTerraformResource"></a>

```typescript
import { googleDataFusionInstance } from '@cdktf/provider-google-beta'

googleDataFusionInstance.GoogleDataFusionInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.generateConfigForImport"></a>

```typescript
import { googleDataFusionInstance } from '@cdktf/provider-google-beta'

googleDataFusionInstance.GoogleDataFusionInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleDataFusionInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDataFusionInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDataFusionInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_data_fusion_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataFusionInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.accelerators">accelerators</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList">GoogleDataFusionInstanceAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.apiEndpoint">apiEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.cryptoKeyConfig">cryptoKeyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference">GoogleDataFusionInstanceCryptoKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.eventPublishConfig">eventPublishConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference">GoogleDataFusionInstanceEventPublishConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.gcsBucket">gcsBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference">GoogleDataFusionInstanceNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.p4ServiceAccount">p4ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.serviceEndpoint">serviceEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.stateMessage">stateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.tenantProjectId">tenantProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference">GoogleDataFusionInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.acceleratorsInput">acceleratorsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators">GoogleDataFusionInstanceAccelerators</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.cryptoKeyConfigInput">cryptoKeyConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig">GoogleDataFusionInstanceCryptoKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.dataprocServiceAccountInput">dataprocServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableRbacInput">enableRbacInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableStackdriverLoggingInput">enableStackdriverLoggingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableStackdriverMonitoringInput">enableStackdriverMonitoringInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.eventPublishConfigInput">eventPublishConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig">GoogleDataFusionInstanceEventPublishConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.networkConfigInput">networkConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig">GoogleDataFusionInstanceNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.optionsInput">optionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.privateInstanceInput">privateInstanceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts">GoogleDataFusionInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.dataprocServiceAccount">dataprocServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableRbac">enableRbac</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableStackdriverLogging">enableStackdriverLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableStackdriverMonitoring">enableStackdriverMonitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.options">options</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.privateInstance">privateInstance</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accelerators`<sup>Required</sup> <a name="accelerators" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.accelerators"></a>

```typescript
public readonly accelerators: GoogleDataFusionInstanceAcceleratorsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList">GoogleDataFusionInstanceAcceleratorsList</a>

---

##### `apiEndpoint`<sup>Required</sup> <a name="apiEndpoint" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.apiEndpoint"></a>

```typescript
public readonly apiEndpoint: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `cryptoKeyConfig`<sup>Required</sup> <a name="cryptoKeyConfig" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.cryptoKeyConfig"></a>

```typescript
public readonly cryptoKeyConfig: GoogleDataFusionInstanceCryptoKeyConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference">GoogleDataFusionInstanceCryptoKeyConfigOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `eventPublishConfig`<sup>Required</sup> <a name="eventPublishConfig" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.eventPublishConfig"></a>

```typescript
public readonly eventPublishConfig: GoogleDataFusionInstanceEventPublishConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference">GoogleDataFusionInstanceEventPublishConfigOutputReference</a>

---

##### `gcsBucket`<sup>Required</sup> <a name="gcsBucket" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.gcsBucket"></a>

```typescript
public readonly gcsBucket: string;
```

- *Type:* string

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.networkConfig"></a>

```typescript
public readonly networkConfig: GoogleDataFusionInstanceNetworkConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference">GoogleDataFusionInstanceNetworkConfigOutputReference</a>

---

##### `p4ServiceAccount`<sup>Required</sup> <a name="p4ServiceAccount" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.p4ServiceAccount"></a>

```typescript
public readonly p4ServiceAccount: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `serviceEndpoint`<sup>Required</sup> <a name="serviceEndpoint" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.serviceEndpoint"></a>

```typescript
public readonly serviceEndpoint: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.stateMessage"></a>

```typescript
public readonly stateMessage: string;
```

- *Type:* string

---

##### `tenantProjectId`<sup>Required</sup> <a name="tenantProjectId" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.tenantProjectId"></a>

```typescript
public readonly tenantProjectId: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDataFusionInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference">GoogleDataFusionInstanceTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `acceleratorsInput`<sup>Optional</sup> <a name="acceleratorsInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.acceleratorsInput"></a>

```typescript
public readonly acceleratorsInput: IResolvable | GoogleDataFusionInstanceAccelerators[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators">GoogleDataFusionInstanceAccelerators</a>[]

---

##### `cryptoKeyConfigInput`<sup>Optional</sup> <a name="cryptoKeyConfigInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.cryptoKeyConfigInput"></a>

```typescript
public readonly cryptoKeyConfigInput: GoogleDataFusionInstanceCryptoKeyConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig">GoogleDataFusionInstanceCryptoKeyConfig</a>

---

##### `dataprocServiceAccountInput`<sup>Optional</sup> <a name="dataprocServiceAccountInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.dataprocServiceAccountInput"></a>

```typescript
public readonly dataprocServiceAccountInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enableRbacInput`<sup>Optional</sup> <a name="enableRbacInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableRbacInput"></a>

```typescript
public readonly enableRbacInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableStackdriverLoggingInput`<sup>Optional</sup> <a name="enableStackdriverLoggingInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableStackdriverLoggingInput"></a>

```typescript
public readonly enableStackdriverLoggingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableStackdriverMonitoringInput`<sup>Optional</sup> <a name="enableStackdriverMonitoringInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableStackdriverMonitoringInput"></a>

```typescript
public readonly enableStackdriverMonitoringInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `eventPublishConfigInput`<sup>Optional</sup> <a name="eventPublishConfigInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.eventPublishConfigInput"></a>

```typescript
public readonly eventPublishConfigInput: GoogleDataFusionInstanceEventPublishConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig">GoogleDataFusionInstanceEventPublishConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkConfigInput`<sup>Optional</sup> <a name="networkConfigInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.networkConfigInput"></a>

```typescript
public readonly networkConfigInput: GoogleDataFusionInstanceNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig">GoogleDataFusionInstanceNetworkConfig</a>

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.optionsInput"></a>

```typescript
public readonly optionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `privateInstanceInput`<sup>Optional</sup> <a name="privateInstanceInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.privateInstanceInput"></a>

```typescript
public readonly privateInstanceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDataFusionInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts">GoogleDataFusionInstanceTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `dataprocServiceAccount`<sup>Required</sup> <a name="dataprocServiceAccount" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.dataprocServiceAccount"></a>

```typescript
public readonly dataprocServiceAccount: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enableRbac`<sup>Required</sup> <a name="enableRbac" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableRbac"></a>

```typescript
public readonly enableRbac: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableStackdriverLogging`<sup>Required</sup> <a name="enableStackdriverLogging" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableStackdriverLogging"></a>

```typescript
public readonly enableStackdriverLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableStackdriverMonitoring`<sup>Required</sup> <a name="enableStackdriverMonitoring" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableStackdriverMonitoring"></a>

```typescript
public readonly enableStackdriverMonitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.options"></a>

```typescript
public readonly options: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `privateInstance`<sup>Required</sup> <a name="privateInstance" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.privateInstance"></a>

```typescript
public readonly privateInstance: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataFusionInstanceAccelerators <a name="GoogleDataFusionInstanceAccelerators" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators.Initializer"></a>

```typescript
import { googleDataFusionInstance } from '@cdktf/provider-google-beta'

const googleDataFusionInstanceAccelerators: googleDataFusionInstance.GoogleDataFusionInstanceAccelerators = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators.property.acceleratorType">acceleratorType</a></code> | <code>string</code> | The type of an accelator for a CDF instance. Possible values: ["CDC", "HEALTHCARE", "CCAI_INSIGHTS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators.property.state">state</a></code> | <code>string</code> | The type of an accelator for a CDF instance. Possible values: ["ENABLED", "DISABLED"]. |

---

##### `acceleratorType`<sup>Required</sup> <a name="acceleratorType" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators.property.acceleratorType"></a>

```typescript
public readonly acceleratorType: string;
```

- *Type:* string

The type of an accelator for a CDF instance. Possible values: ["CDC", "HEALTHCARE", "CCAI_INSIGHTS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_data_fusion_instance#accelerator_type GoogleDataFusionInstance#accelerator_type}

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

The type of an accelator for a CDF instance. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_data_fusion_instance#state GoogleDataFusionInstance#state}

---

### GoogleDataFusionInstanceConfig <a name="GoogleDataFusionInstanceConfig" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.Initializer"></a>

```typescript
import { googleDataFusionInstance } from '@cdktf/provider-google-beta'

const googleDataFusionInstanceConfig: googleDataFusionInstance.GoogleDataFusionInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.name">name</a></code> | <code>string</code> | The ID of the instance or a fully qualified identifier for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.type">type</a></code> | <code>string</code> | Represents the type of Data Fusion instance. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.accelerators">accelerators</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators">GoogleDataFusionInstanceAccelerators</a>[]</code> | accelerators block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.cryptoKeyConfig">cryptoKeyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig">GoogleDataFusionInstanceCryptoKeyConfig</a></code> | crypto_key_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.dataprocServiceAccount">dataprocServiceAccount</a></code> | <code>string</code> | User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing pipelines. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.description">description</a></code> | <code>string</code> | An optional description of the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.displayName">displayName</a></code> | <code>string</code> | Display name for an instance. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.enableRbac">enableRbac</a></code> | <code>boolean \| cdktf.IResolvable</code> | Option to enable granular role-based access control. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.enableStackdriverLogging">enableStackdriverLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | Option to enable Stackdriver Logging. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.enableStackdriverMonitoring">enableStackdriverMonitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | Option to enable Stackdriver Monitoring. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.eventPublishConfig">eventPublishConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig">GoogleDataFusionInstanceEventPublishConfig</a></code> | event_publish_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_data_fusion_instance#id GoogleDataFusionInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The resource labels for instance to use to annotate any related underlying resources, such as Compute Engine VMs. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig">GoogleDataFusionInstanceNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.options">options</a></code> | <code>{[ key: string ]: string}</code> | Map of additional options used to configure the behavior of Data Fusion instance. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.privateInstance">privateInstance</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether the Data Fusion instance should be private. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_data_fusion_instance#project GoogleDataFusionInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.region">region</a></code> | <code>string</code> | The region of the Data Fusion instance. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts">GoogleDataFusionInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.version">version</a></code> | <code>string</code> | Current version of the Data Fusion. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.zone">zone</a></code> | <code>string</code> | Name of the zone in which the Data Fusion instance will be created. Only DEVELOPER instances use this field. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The ID of the instance or a fully qualified identifier for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_data_fusion_instance#name GoogleDataFusionInstance#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Represents the type of Data Fusion instance.

Each type is configured with
the default settings for processing and memory.
- BASIC: Basic Data Fusion instance. In Basic type, the user will be able to create data pipelines
using point and click UI. However, there are certain limitations, such as fewer number
of concurrent pipelines, no support for streaming pipelines, etc.
- ENTERPRISE: Enterprise Data Fusion instance. In Enterprise type, the user will have more features
available, such as support for streaming pipelines, higher number of concurrent pipelines, etc.
- DEVELOPER: Developer Data Fusion instance. In Developer type, the user will have all features available but
with restrictive capabilities. This is to help enterprises design and develop their data ingestion and integration
pipelines at low cost. Possible values: ["BASIC", "ENTERPRISE", "DEVELOPER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_data_fusion_instance#type GoogleDataFusionInstance#type}

---

##### `accelerators`<sup>Optional</sup> <a name="accelerators" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.accelerators"></a>

```typescript
public readonly accelerators: IResolvable | GoogleDataFusionInstanceAccelerators[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators">GoogleDataFusionInstanceAccelerators</a>[]

accelerators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_data_fusion_instance#accelerators GoogleDataFusionInstance#accelerators}

---

##### `cryptoKeyConfig`<sup>Optional</sup> <a name="cryptoKeyConfig" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.cryptoKeyConfig"></a>

```typescript
public readonly cryptoKeyConfig: GoogleDataFusionInstanceCryptoKeyConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig">GoogleDataFusionInstanceCryptoKeyConfig</a>

crypto_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_data_fusion_instance#crypto_key_config GoogleDataFusionInstance#crypto_key_config}

---

##### `dataprocServiceAccount`<sup>Optional</sup> <a name="dataprocServiceAccount" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.dataprocServiceAccount"></a>

```typescript
public readonly dataprocServiceAccount: string;
```

- *Type:* string

User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_data_fusion_instance#dataproc_service_account GoogleDataFusionInstance#dataproc_service_account}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_data_fusion_instance#description GoogleDataFusionInstance#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name for an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_data_fusion_instance#display_name GoogleDataFusionInstance#display_name}

---

##### `enableRbac`<sup>Optional</sup> <a name="enableRbac" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.enableRbac"></a>

```typescript
public readonly enableRbac: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Option to enable granular role-based access control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_data_fusion_instance#enable_rbac GoogleDataFusionInstance#enable_rbac}

---

##### `enableStackdriverLogging`<sup>Optional</sup> <a name="enableStackdriverLogging" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.enableStackdriverLogging"></a>

```typescript
public readonly enableStackdriverLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Option to enable Stackdriver Logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_data_fusion_instance#enable_stackdriver_logging GoogleDataFusionInstance#enable_stackdriver_logging}

---

##### `enableStackdriverMonitoring`<sup>Optional</sup> <a name="enableStackdriverMonitoring" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.enableStackdriverMonitoring"></a>

```typescript
public readonly enableStackdriverMonitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Option to enable Stackdriver Monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_data_fusion_instance#enable_stackdriver_monitoring GoogleDataFusionInstance#enable_stackdriver_monitoring}

---

##### `eventPublishConfig`<sup>Optional</sup> <a name="eventPublishConfig" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.eventPublishConfig"></a>

```typescript
public readonly eventPublishConfig: GoogleDataFusionInstanceEventPublishConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig">GoogleDataFusionInstanceEventPublishConfig</a>

event_publish_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_data_fusion_instance#event_publish_config GoogleDataFusionInstance#event_publish_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_data_fusion_instance#id GoogleDataFusionInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The resource labels for instance to use to annotate any related underlying resources, such as Compute Engine VMs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_data_fusion_instance#labels GoogleDataFusionInstance#labels}

---

##### `networkConfig`<sup>Optional</sup> <a name="networkConfig" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.networkConfig"></a>

```typescript
public readonly networkConfig: GoogleDataFusionInstanceNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig">GoogleDataFusionInstanceNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_data_fusion_instance#network_config GoogleDataFusionInstance#network_config}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.options"></a>

```typescript
public readonly options: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of additional options used to configure the behavior of Data Fusion instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_data_fusion_instance#options GoogleDataFusionInstance#options}

---

##### `privateInstance`<sup>Optional</sup> <a name="privateInstance" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.privateInstance"></a>

```typescript
public readonly privateInstance: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether the Data Fusion instance should be private.

If set to
true, all Data Fusion nodes will have private IP addresses and will not be
able to access the public internet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_data_fusion_instance#private_instance GoogleDataFusionInstance#private_instance}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_data_fusion_instance#project GoogleDataFusionInstance#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the Data Fusion instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_data_fusion_instance#region GoogleDataFusionInstance#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDataFusionInstanceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts">GoogleDataFusionInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_data_fusion_instance#timeouts GoogleDataFusionInstance#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Current version of the Data Fusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_data_fusion_instance#version GoogleDataFusionInstance#version}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

Name of the zone in which the Data Fusion instance will be created. Only DEVELOPER instances use this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_data_fusion_instance#zone GoogleDataFusionInstance#zone}

---

### GoogleDataFusionInstanceCryptoKeyConfig <a name="GoogleDataFusionInstanceCryptoKeyConfig" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig.Initializer"></a>

```typescript
import { googleDataFusionInstance } from '@cdktf/provider-google-beta'

const googleDataFusionInstanceCryptoKeyConfig: googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig.property.keyReference">keyReference</a></code> | <code>string</code> | The name of the key which is used to encrypt/decrypt customer data. |

---

##### `keyReference`<sup>Required</sup> <a name="keyReference" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig.property.keyReference"></a>

```typescript
public readonly keyReference: string;
```

- *Type:* string

The name of the key which is used to encrypt/decrypt customer data.

For key in Cloud KMS, the key should be in the format of projects/* /locations/* /keyRings/* /cryptoKeys/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_data_fusion_instance#key_reference GoogleDataFusionInstance#key_reference}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleDataFusionInstanceEventPublishConfig <a name="GoogleDataFusionInstanceEventPublishConfig" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig.Initializer"></a>

```typescript
import { googleDataFusionInstance } from '@cdktf/provider-google-beta'

const googleDataFusionInstanceEventPublishConfig: googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Option to enable Event Publishing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig.property.topic">topic</a></code> | <code>string</code> | The resource name of the Pub/Sub topic. Format: projects/{projectId}/topics/{topic_id}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Option to enable Event Publishing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_data_fusion_instance#enabled GoogleDataFusionInstance#enabled}

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

The resource name of the Pub/Sub topic. Format: projects/{projectId}/topics/{topic_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_data_fusion_instance#topic GoogleDataFusionInstance#topic}

---

### GoogleDataFusionInstanceNetworkConfig <a name="GoogleDataFusionInstanceNetworkConfig" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig.Initializer"></a>

```typescript
import { googleDataFusionInstance } from '@cdktf/provider-google-beta'

const googleDataFusionInstanceNetworkConfig: googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig.property.connectionType">connectionType</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig.property.ipAllocation">ipAllocation</a></code> | <code>string</code> | The IP range in CIDR notation to use for the managed Data Fusion instance nodes. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig.property.network">network</a></code> | <code>string</code> | Name of the network in the project with which the tenant project will be peered for executing pipelines. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig.property.privateServiceConnectConfig">privateServiceConnectConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig">GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a></code> | private_service_connect_config block. |

---

##### `connectionType`<sup>Optional</sup> <a name="connectionType" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

Optional.

Type of connection for establishing private IP connectivity between the Data Fusion customer project VPC and
the corresponding tenant project from a predefined list of available connection modes.
If this field is unspecified for a private instance, VPC peering is used. Possible values: ["VPC_PEERING", "PRIVATE_SERVICE_CONNECT_INTERFACES"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_data_fusion_instance#connection_type GoogleDataFusionInstance#connection_type}

---

##### `ipAllocation`<sup>Optional</sup> <a name="ipAllocation" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig.property.ipAllocation"></a>

```typescript
public readonly ipAllocation: string;
```

- *Type:* string

The IP range in CIDR notation to use for the managed Data Fusion instance nodes.

This range must not overlap with any other ranges used in the Data Fusion instance network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_data_fusion_instance#ip_allocation GoogleDataFusionInstance#ip_allocation}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

Name of the network in the project with which the tenant project will be peered for executing pipelines.

In case of shared VPC where the network resides in another host
project the network should specified in the form of projects/{host-project-id}/global/networks/{network}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_data_fusion_instance#network GoogleDataFusionInstance#network}

---

##### `privateServiceConnectConfig`<sup>Optional</sup> <a name="privateServiceConnectConfig" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig.property.privateServiceConnectConfig"></a>

```typescript
public readonly privateServiceConnectConfig: GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig">GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a>

private_service_connect_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_data_fusion_instance#private_service_connect_config GoogleDataFusionInstance#private_service_connect_config}

---

### GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig <a name="GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig.Initializer"></a>

```typescript
import { googleDataFusionInstance } from '@cdktf/provider-google-beta'

const googleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig: googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig.property.networkAttachment">networkAttachment</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig.property.unreachableCidrBlock">unreachableCidrBlock</a></code> | <code>string</code> | Optional. |

---

##### `networkAttachment`<sup>Optional</sup> <a name="networkAttachment" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig.property.networkAttachment"></a>

```typescript
public readonly networkAttachment: string;
```

- *Type:* string

Optional.

The reference to the network attachment used to establish private connectivity.
It will be of the form projects/{project-id}/regions/{region}/networkAttachments/{network-attachment-id}.
This is required only when using connection type PRIVATE_SERVICE_CONNECT_INTERFACES.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_data_fusion_instance#network_attachment GoogleDataFusionInstance#network_attachment}

---

##### `unreachableCidrBlock`<sup>Optional</sup> <a name="unreachableCidrBlock" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig.property.unreachableCidrBlock"></a>

```typescript
public readonly unreachableCidrBlock: string;
```

- *Type:* string

Optional.

Input only. The CIDR block to which the CDF instance can't route traffic to in the consumer project VPC.
The size of this block should be at least /25. This range should not overlap with the primary address range of any subnetwork used by the network attachment.
This range can be used for other purposes in the consumer VPC as long as there is no requirement for CDF to reach destinations using these addresses.
If this value is not provided, the server chooses a non RFC 1918 address range. The format of this field is governed by RFC 4632.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_data_fusion_instance#unreachable_cidr_block GoogleDataFusionInstance#unreachable_cidr_block}

---

### GoogleDataFusionInstanceTimeouts <a name="GoogleDataFusionInstanceTimeouts" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts.Initializer"></a>

```typescript
import { googleDataFusionInstance } from '@cdktf/provider-google-beta'

const googleDataFusionInstanceTimeouts: googleDataFusionInstance.GoogleDataFusionInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_data_fusion_instance#create GoogleDataFusionInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_data_fusion_instance#delete GoogleDataFusionInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_data_fusion_instance#update GoogleDataFusionInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_data_fusion_instance#create GoogleDataFusionInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_data_fusion_instance#delete GoogleDataFusionInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_data_fusion_instance#update GoogleDataFusionInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataFusionInstanceAcceleratorsList <a name="GoogleDataFusionInstanceAcceleratorsList" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.Initializer"></a>

```typescript
import { googleDataFusionInstance } from '@cdktf/provider-google-beta'

new googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.get"></a>

```typescript
public get(index: number): GoogleDataFusionInstanceAcceleratorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators">GoogleDataFusionInstanceAccelerators</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataFusionInstanceAccelerators[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators">GoogleDataFusionInstanceAccelerators</a>[]

---


### GoogleDataFusionInstanceAcceleratorsOutputReference <a name="GoogleDataFusionInstanceAcceleratorsOutputReference" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.Initializer"></a>

```typescript
import { googleDataFusionInstance } from '@cdktf/provider-google-beta'

new googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.acceleratorTypeInput">acceleratorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.acceleratorType">acceleratorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators">GoogleDataFusionInstanceAccelerators</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acceleratorTypeInput`<sup>Optional</sup> <a name="acceleratorTypeInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.acceleratorTypeInput"></a>

```typescript
public readonly acceleratorTypeInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `acceleratorType`<sup>Required</sup> <a name="acceleratorType" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.acceleratorType"></a>

```typescript
public readonly acceleratorType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataFusionInstanceAccelerators;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators">GoogleDataFusionInstanceAccelerators</a>

---


### GoogleDataFusionInstanceCryptoKeyConfigOutputReference <a name="GoogleDataFusionInstanceCryptoKeyConfigOutputReference" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.Initializer"></a>

```typescript
import { googleDataFusionInstance } from '@cdktf/provider-google-beta'

new googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.property.keyReferenceInput">keyReferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.property.keyReference">keyReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig">GoogleDataFusionInstanceCryptoKeyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyReferenceInput`<sup>Optional</sup> <a name="keyReferenceInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.property.keyReferenceInput"></a>

```typescript
public readonly keyReferenceInput: string;
```

- *Type:* string

---

##### `keyReference`<sup>Required</sup> <a name="keyReference" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.property.keyReference"></a>

```typescript
public readonly keyReference: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataFusionInstanceCryptoKeyConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig">GoogleDataFusionInstanceCryptoKeyConfig</a>

---


### GoogleDataFusionInstanceEventPublishConfigOutputReference <a name="GoogleDataFusionInstanceEventPublishConfigOutputReference" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.Initializer"></a>

```typescript
import { googleDataFusionInstance } from '@cdktf/provider-google-beta'

new googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.topicInput">topicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.topic">topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig">GoogleDataFusionInstanceEventPublishConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.topicInput"></a>

```typescript
public readonly topicInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataFusionInstanceEventPublishConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig">GoogleDataFusionInstanceEventPublishConfig</a>

---


### GoogleDataFusionInstanceNetworkConfigOutputReference <a name="GoogleDataFusionInstanceNetworkConfigOutputReference" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.Initializer"></a>

```typescript
import { googleDataFusionInstance } from '@cdktf/provider-google-beta'

new googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.putPrivateServiceConnectConfig">putPrivateServiceConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resetConnectionType">resetConnectionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resetIpAllocation">resetIpAllocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resetPrivateServiceConnectConfig">resetPrivateServiceConnectConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrivateServiceConnectConfig` <a name="putPrivateServiceConnectConfig" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.putPrivateServiceConnectConfig"></a>

```typescript
public putPrivateServiceConnectConfig(value: GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.putPrivateServiceConnectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig">GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a>

---

##### `resetConnectionType` <a name="resetConnectionType" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resetConnectionType"></a>

```typescript
public resetConnectionType(): void
```

##### `resetIpAllocation` <a name="resetIpAllocation" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resetIpAllocation"></a>

```typescript
public resetIpAllocation(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetPrivateServiceConnectConfig` <a name="resetPrivateServiceConnectConfig" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resetPrivateServiceConnectConfig"></a>

```typescript
public resetPrivateServiceConnectConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.privateServiceConnectConfig">privateServiceConnectConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference">GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.connectionTypeInput">connectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.ipAllocationInput">ipAllocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.privateServiceConnectConfigInput">privateServiceConnectConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig">GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.connectionType">connectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.ipAllocation">ipAllocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig">GoogleDataFusionInstanceNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `privateServiceConnectConfig`<sup>Required</sup> <a name="privateServiceConnectConfig" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.privateServiceConnectConfig"></a>

```typescript
public readonly privateServiceConnectConfig: GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference">GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference</a>

---

##### `connectionTypeInput`<sup>Optional</sup> <a name="connectionTypeInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.connectionTypeInput"></a>

```typescript
public readonly connectionTypeInput: string;
```

- *Type:* string

---

##### `ipAllocationInput`<sup>Optional</sup> <a name="ipAllocationInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.ipAllocationInput"></a>

```typescript
public readonly ipAllocationInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `privateServiceConnectConfigInput`<sup>Optional</sup> <a name="privateServiceConnectConfigInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.privateServiceConnectConfigInput"></a>

```typescript
public readonly privateServiceConnectConfigInput: GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig">GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a>

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

---

##### `ipAllocation`<sup>Required</sup> <a name="ipAllocation" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.ipAllocation"></a>

```typescript
public readonly ipAllocation: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataFusionInstanceNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig">GoogleDataFusionInstanceNetworkConfig</a>

---


### GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference <a name="GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.Initializer"></a>

```typescript
import { googleDataFusionInstance } from '@cdktf/provider-google-beta'

new googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resetNetworkAttachment">resetNetworkAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resetUnreachableCidrBlock">resetUnreachableCidrBlock</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNetworkAttachment` <a name="resetNetworkAttachment" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resetNetworkAttachment"></a>

```typescript
public resetNetworkAttachment(): void
```

##### `resetUnreachableCidrBlock` <a name="resetUnreachableCidrBlock" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resetUnreachableCidrBlock"></a>

```typescript
public resetUnreachableCidrBlock(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.effectiveUnreachableCidrBlock">effectiveUnreachableCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.networkAttachmentInput">networkAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.unreachableCidrBlockInput">unreachableCidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.networkAttachment">networkAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.unreachableCidrBlock">unreachableCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig">GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectiveUnreachableCidrBlock`<sup>Required</sup> <a name="effectiveUnreachableCidrBlock" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.effectiveUnreachableCidrBlock"></a>

```typescript
public readonly effectiveUnreachableCidrBlock: string;
```

- *Type:* string

---

##### `networkAttachmentInput`<sup>Optional</sup> <a name="networkAttachmentInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.networkAttachmentInput"></a>

```typescript
public readonly networkAttachmentInput: string;
```

- *Type:* string

---

##### `unreachableCidrBlockInput`<sup>Optional</sup> <a name="unreachableCidrBlockInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.unreachableCidrBlockInput"></a>

```typescript
public readonly unreachableCidrBlockInput: string;
```

- *Type:* string

---

##### `networkAttachment`<sup>Required</sup> <a name="networkAttachment" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.networkAttachment"></a>

```typescript
public readonly networkAttachment: string;
```

- *Type:* string

---

##### `unreachableCidrBlock`<sup>Required</sup> <a name="unreachableCidrBlock" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.unreachableCidrBlock"></a>

```typescript
public readonly unreachableCidrBlock: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig">GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a>

---


### GoogleDataFusionInstanceTimeoutsOutputReference <a name="GoogleDataFusionInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDataFusionInstance } from '@cdktf/provider-google-beta'

new googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts">GoogleDataFusionInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataFusionInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts">GoogleDataFusionInstanceTimeouts</a>

---



