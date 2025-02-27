# `googleApigeeOrganization` Submodule <a name="`googleApigeeOrganization` Submodule" id="@cdktf/provider-google-beta.googleApigeeOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeOrganization <a name="GoogleApigeeOrganization" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_organization google_apigee_organization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.Initializer"></a>

```typescript
import { googleApigeeOrganization } from '@cdktf/provider-google-beta'

new googleApigeeOrganization.GoogleApigeeOrganization(scope: Construct, id: string, config: GoogleApigeeOrganizationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig">GoogleApigeeOrganizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig">GoogleApigeeOrganizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetAnalyticsRegion">resetAnalyticsRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetApiConsumerDataEncryptionKeyName">resetApiConsumerDataEncryptionKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetApiConsumerDataLocation">resetApiConsumerDataLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetAuthorizedNetwork">resetAuthorizedNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetBillingType">resetBillingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetControlPlaneEncryptionKeyName">resetControlPlaneEncryptionKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetDisableVpcPeering">resetDisableVpcPeering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetRetention">resetRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetRuntimeDatabaseEncryptionKeyName">resetRuntimeDatabaseEncryptionKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetRuntimeType">resetRuntimeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProperties` <a name="putProperties" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.putProperties"></a>

```typescript
public putProperties(value: GoogleApigeeOrganizationProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationProperties">GoogleApigeeOrganizationProperties</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleApigeeOrganizationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeouts">GoogleApigeeOrganizationTimeouts</a>

---

##### `resetAnalyticsRegion` <a name="resetAnalyticsRegion" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetAnalyticsRegion"></a>

```typescript
public resetAnalyticsRegion(): void
```

##### `resetApiConsumerDataEncryptionKeyName` <a name="resetApiConsumerDataEncryptionKeyName" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetApiConsumerDataEncryptionKeyName"></a>

```typescript
public resetApiConsumerDataEncryptionKeyName(): void
```

##### `resetApiConsumerDataLocation` <a name="resetApiConsumerDataLocation" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetApiConsumerDataLocation"></a>

```typescript
public resetApiConsumerDataLocation(): void
```

##### `resetAuthorizedNetwork` <a name="resetAuthorizedNetwork" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetAuthorizedNetwork"></a>

```typescript
public resetAuthorizedNetwork(): void
```

##### `resetBillingType` <a name="resetBillingType" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetBillingType"></a>

```typescript
public resetBillingType(): void
```

##### `resetControlPlaneEncryptionKeyName` <a name="resetControlPlaneEncryptionKeyName" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetControlPlaneEncryptionKeyName"></a>

```typescript
public resetControlPlaneEncryptionKeyName(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisableVpcPeering` <a name="resetDisableVpcPeering" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetDisableVpcPeering"></a>

```typescript
public resetDisableVpcPeering(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetProperties"></a>

```typescript
public resetProperties(): void
```

##### `resetRetention` <a name="resetRetention" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetRetention"></a>

```typescript
public resetRetention(): void
```

##### `resetRuntimeDatabaseEncryptionKeyName` <a name="resetRuntimeDatabaseEncryptionKeyName" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetRuntimeDatabaseEncryptionKeyName"></a>

```typescript
public resetRuntimeDatabaseEncryptionKeyName(): void
```

##### `resetRuntimeType` <a name="resetRuntimeType" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetRuntimeType"></a>

```typescript
public resetRuntimeType(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleApigeeOrganization resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.isConstruct"></a>

```typescript
import { googleApigeeOrganization } from '@cdktf/provider-google-beta'

googleApigeeOrganization.GoogleApigeeOrganization.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.isTerraformElement"></a>

```typescript
import { googleApigeeOrganization } from '@cdktf/provider-google-beta'

googleApigeeOrganization.GoogleApigeeOrganization.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.isTerraformResource"></a>

```typescript
import { googleApigeeOrganization } from '@cdktf/provider-google-beta'

googleApigeeOrganization.GoogleApigeeOrganization.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.generateConfigForImport"></a>

```typescript
import { googleApigeeOrganization } from '@cdktf/provider-google-beta'

googleApigeeOrganization.GoogleApigeeOrganization.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleApigeeOrganization resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleApigeeOrganization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleApigeeOrganization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_organization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApigeeOrganization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.apigeeProjectId">apigeeProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.caCertificate">caCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference">GoogleApigeeOrganizationPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.subscriptionType">subscriptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference">GoogleApigeeOrganizationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.analyticsRegionInput">analyticsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.apiConsumerDataEncryptionKeyNameInput">apiConsumerDataEncryptionKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.apiConsumerDataLocationInput">apiConsumerDataLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.authorizedNetworkInput">authorizedNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.billingTypeInput">billingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.controlPlaneEncryptionKeyNameInput">controlPlaneEncryptionKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.disableVpcPeeringInput">disableVpcPeeringInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.propertiesInput">propertiesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationProperties">GoogleApigeeOrganizationProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.retentionInput">retentionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.runtimeDatabaseEncryptionKeyNameInput">runtimeDatabaseEncryptionKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.runtimeTypeInput">runtimeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeouts">GoogleApigeeOrganizationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.analyticsRegion">analyticsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.apiConsumerDataEncryptionKeyName">apiConsumerDataEncryptionKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.apiConsumerDataLocation">apiConsumerDataLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.authorizedNetwork">authorizedNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.billingType">billingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.controlPlaneEncryptionKeyName">controlPlaneEncryptionKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.disableVpcPeering">disableVpcPeering</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.retention">retention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.runtimeDatabaseEncryptionKeyName">runtimeDatabaseEncryptionKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.runtimeType">runtimeType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apigeeProjectId`<sup>Required</sup> <a name="apigeeProjectId" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.apigeeProjectId"></a>

```typescript
public readonly apigeeProjectId: string;
```

- *Type:* string

---

##### `caCertificate`<sup>Required</sup> <a name="caCertificate" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.caCertificate"></a>

```typescript
public readonly caCertificate: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.properties"></a>

```typescript
public readonly properties: GoogleApigeeOrganizationPropertiesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference">GoogleApigeeOrganizationPropertiesOutputReference</a>

---

##### `subscriptionType`<sup>Required</sup> <a name="subscriptionType" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.subscriptionType"></a>

```typescript
public readonly subscriptionType: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleApigeeOrganizationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference">GoogleApigeeOrganizationTimeoutsOutputReference</a>

---

##### `analyticsRegionInput`<sup>Optional</sup> <a name="analyticsRegionInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.analyticsRegionInput"></a>

```typescript
public readonly analyticsRegionInput: string;
```

- *Type:* string

---

##### `apiConsumerDataEncryptionKeyNameInput`<sup>Optional</sup> <a name="apiConsumerDataEncryptionKeyNameInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.apiConsumerDataEncryptionKeyNameInput"></a>

```typescript
public readonly apiConsumerDataEncryptionKeyNameInput: string;
```

- *Type:* string

---

##### `apiConsumerDataLocationInput`<sup>Optional</sup> <a name="apiConsumerDataLocationInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.apiConsumerDataLocationInput"></a>

```typescript
public readonly apiConsumerDataLocationInput: string;
```

- *Type:* string

---

##### `authorizedNetworkInput`<sup>Optional</sup> <a name="authorizedNetworkInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.authorizedNetworkInput"></a>

```typescript
public readonly authorizedNetworkInput: string;
```

- *Type:* string

---

##### `billingTypeInput`<sup>Optional</sup> <a name="billingTypeInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.billingTypeInput"></a>

```typescript
public readonly billingTypeInput: string;
```

- *Type:* string

---

##### `controlPlaneEncryptionKeyNameInput`<sup>Optional</sup> <a name="controlPlaneEncryptionKeyNameInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.controlPlaneEncryptionKeyNameInput"></a>

```typescript
public readonly controlPlaneEncryptionKeyNameInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disableVpcPeeringInput`<sup>Optional</sup> <a name="disableVpcPeeringInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.disableVpcPeeringInput"></a>

```typescript
public readonly disableVpcPeeringInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: GoogleApigeeOrganizationProperties;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationProperties">GoogleApigeeOrganizationProperties</a>

---

##### `retentionInput`<sup>Optional</sup> <a name="retentionInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.retentionInput"></a>

```typescript
public readonly retentionInput: string;
```

- *Type:* string

---

##### `runtimeDatabaseEncryptionKeyNameInput`<sup>Optional</sup> <a name="runtimeDatabaseEncryptionKeyNameInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.runtimeDatabaseEncryptionKeyNameInput"></a>

```typescript
public readonly runtimeDatabaseEncryptionKeyNameInput: string;
```

- *Type:* string

---

##### `runtimeTypeInput`<sup>Optional</sup> <a name="runtimeTypeInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.runtimeTypeInput"></a>

```typescript
public readonly runtimeTypeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleApigeeOrganizationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeouts">GoogleApigeeOrganizationTimeouts</a>

---

##### `analyticsRegion`<sup>Required</sup> <a name="analyticsRegion" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.analyticsRegion"></a>

```typescript
public readonly analyticsRegion: string;
```

- *Type:* string

---

##### `apiConsumerDataEncryptionKeyName`<sup>Required</sup> <a name="apiConsumerDataEncryptionKeyName" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.apiConsumerDataEncryptionKeyName"></a>

```typescript
public readonly apiConsumerDataEncryptionKeyName: string;
```

- *Type:* string

---

##### `apiConsumerDataLocation`<sup>Required</sup> <a name="apiConsumerDataLocation" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.apiConsumerDataLocation"></a>

```typescript
public readonly apiConsumerDataLocation: string;
```

- *Type:* string

---

##### `authorizedNetwork`<sup>Required</sup> <a name="authorizedNetwork" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.authorizedNetwork"></a>

```typescript
public readonly authorizedNetwork: string;
```

- *Type:* string

---

##### `billingType`<sup>Required</sup> <a name="billingType" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.billingType"></a>

```typescript
public readonly billingType: string;
```

- *Type:* string

---

##### `controlPlaneEncryptionKeyName`<sup>Required</sup> <a name="controlPlaneEncryptionKeyName" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.controlPlaneEncryptionKeyName"></a>

```typescript
public readonly controlPlaneEncryptionKeyName: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disableVpcPeering`<sup>Required</sup> <a name="disableVpcPeering" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.disableVpcPeering"></a>

```typescript
public readonly disableVpcPeering: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.retention"></a>

```typescript
public readonly retention: string;
```

- *Type:* string

---

##### `runtimeDatabaseEncryptionKeyName`<sup>Required</sup> <a name="runtimeDatabaseEncryptionKeyName" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.runtimeDatabaseEncryptionKeyName"></a>

```typescript
public readonly runtimeDatabaseEncryptionKeyName: string;
```

- *Type:* string

---

##### `runtimeType`<sup>Required</sup> <a name="runtimeType" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.runtimeType"></a>

```typescript
public readonly runtimeType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeOrganizationConfig <a name="GoogleApigeeOrganizationConfig" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.Initializer"></a>

```typescript
import { googleApigeeOrganization } from '@cdktf/provider-google-beta'

const googleApigeeOrganizationConfig: googleApigeeOrganization.GoogleApigeeOrganizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.projectId">projectId</a></code> | <code>string</code> | The project ID associated with the Apigee organization. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.analyticsRegion">analyticsRegion</a></code> | <code>string</code> | Primary GCP region for analytics data storage. For valid values, see [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org). |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.apiConsumerDataEncryptionKeyName">apiConsumerDataEncryptionKeyName</a></code> | <code>string</code> | Cloud KMS key name used for encrypting API consumer data. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.apiConsumerDataLocation">apiConsumerDataLocation</a></code> | <code>string</code> | This field is needed only for customers using non-default data residency regions. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.authorizedNetwork">authorizedNetwork</a></code> | <code>string</code> | Compute Engine network used for Service Networking to be peered with Apigee runtime instances. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.billingType">billingType</a></code> | <code>string</code> | Billing type of the Apigee organization. See [Apigee pricing](https://cloud.google.com/apigee/pricing). |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.controlPlaneEncryptionKeyName">controlPlaneEncryptionKeyName</a></code> | <code>string</code> | Cloud KMS key name used for encrypting control plane data that is stored in a multi region. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.description">description</a></code> | <code>string</code> | Description of the Apigee organization. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.disableVpcPeering">disableVpcPeering</a></code> | <code>boolean \| cdktf.IResolvable</code> | Flag that specifies whether the VPC Peering through Private Google Access should be disabled between the consumer network and Apigee. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name of the Apigee organization. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_organization#id GoogleApigeeOrganization#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationProperties">GoogleApigeeOrganizationProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.retention">retention</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.runtimeDatabaseEncryptionKeyName">runtimeDatabaseEncryptionKeyName</a></code> | <code>string</code> | Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.runtimeType">runtimeType</a></code> | <code>string</code> | Runtime type of the Apigee organization based on the Apigee subscription purchased. Default value: "CLOUD" Possible values: ["CLOUD", "HYBRID"]. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeouts">GoogleApigeeOrganizationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The project ID associated with the Apigee organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_organization#project_id GoogleApigeeOrganization#project_id}

---

##### `analyticsRegion`<sup>Optional</sup> <a name="analyticsRegion" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.analyticsRegion"></a>

```typescript
public readonly analyticsRegion: string;
```

- *Type:* string

Primary GCP region for analytics data storage. For valid values, see [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_organization#analytics_region GoogleApigeeOrganization#analytics_region}

---

##### `apiConsumerDataEncryptionKeyName`<sup>Optional</sup> <a name="apiConsumerDataEncryptionKeyName" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.apiConsumerDataEncryptionKeyName"></a>

```typescript
public readonly apiConsumerDataEncryptionKeyName: string;
```

- *Type:* string

Cloud KMS key name used for encrypting API consumer data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_organization#api_consumer_data_encryption_key_name GoogleApigeeOrganization#api_consumer_data_encryption_key_name}

---

##### `apiConsumerDataLocation`<sup>Optional</sup> <a name="apiConsumerDataLocation" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.apiConsumerDataLocation"></a>

```typescript
public readonly apiConsumerDataLocation: string;
```

- *Type:* string

This field is needed only for customers using non-default data residency regions.

Apigee stores some control plane data only in single region.
This field determines which single region Apigee should use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_organization#api_consumer_data_location GoogleApigeeOrganization#api_consumer_data_location}

---

##### `authorizedNetwork`<sup>Optional</sup> <a name="authorizedNetwork" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.authorizedNetwork"></a>

```typescript
public readonly authorizedNetwork: string;
```

- *Type:* string

Compute Engine network used for Service Networking to be peered with Apigee runtime instances.

See [Getting started with the Service Networking API](https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started).
Valid only when 'RuntimeType' is set to CLOUD. The value can be updated only when there are no runtime instances. For example: "default".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_organization#authorized_network GoogleApigeeOrganization#authorized_network}

---

##### `billingType`<sup>Optional</sup> <a name="billingType" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.billingType"></a>

```typescript
public readonly billingType: string;
```

- *Type:* string

Billing type of the Apigee organization. See [Apigee pricing](https://cloud.google.com/apigee/pricing).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_organization#billing_type GoogleApigeeOrganization#billing_type}

---

##### `controlPlaneEncryptionKeyName`<sup>Optional</sup> <a name="controlPlaneEncryptionKeyName" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.controlPlaneEncryptionKeyName"></a>

```typescript
public readonly controlPlaneEncryptionKeyName: string;
```

- *Type:* string

Cloud KMS key name used for encrypting control plane data that is stored in a multi region.

Only used for the data residency region "US" or "EU".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_organization#control_plane_encryption_key_name GoogleApigeeOrganization#control_plane_encryption_key_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the Apigee organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_organization#description GoogleApigeeOrganization#description}

---

##### `disableVpcPeering`<sup>Optional</sup> <a name="disableVpcPeering" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.disableVpcPeering"></a>

```typescript
public readonly disableVpcPeering: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Flag that specifies whether the VPC Peering through Private Google Access should be disabled between the consumer network and Apigee.

Required if an 'authorizedNetwork'
on the consumer project is not provided, in which case the flag should be set to 'true'.
Valid only when 'RuntimeType' is set to CLOUD. The value must be set before the creation
of any Apigee runtime instance and can be updated only when there are no runtime instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_organization#disable_vpc_peering GoogleApigeeOrganization#disable_vpc_peering}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the Apigee organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_organization#display_name GoogleApigeeOrganization#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_organization#id GoogleApigeeOrganization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.properties"></a>

```typescript
public readonly properties: GoogleApigeeOrganizationProperties;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationProperties">GoogleApigeeOrganizationProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_organization#properties GoogleApigeeOrganization#properties}

---

##### `retention`<sup>Optional</sup> <a name="retention" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.retention"></a>

```typescript
public readonly retention: string;
```

- *Type:* string

Optional.

This setting is applicable only for organizations that are soft-deleted (i.e., BillingType
is not EVALUATION). It controls how long Organization data will be retained after the initial delete
operation completes. During this period, the Organization may be restored to its last known state.
After this period, the Organization will no longer be able to be restored. Default value: "DELETION_RETENTION_UNSPECIFIED" Possible values: ["DELETION_RETENTION_UNSPECIFIED", "MINIMUM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_organization#retention GoogleApigeeOrganization#retention}

---

##### `runtimeDatabaseEncryptionKeyName`<sup>Optional</sup> <a name="runtimeDatabaseEncryptionKeyName" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.runtimeDatabaseEncryptionKeyName"></a>

```typescript
public readonly runtimeDatabaseEncryptionKeyName: string;
```

- *Type:* string

Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances.

Update is not allowed after the organization is created.
If not specified, a Google-Managed encryption key will be used.
Valid only when 'RuntimeType' is CLOUD. For example: 'projects/foo/locations/us/keyRings/bar/cryptoKeys/baz'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_organization#runtime_database_encryption_key_name GoogleApigeeOrganization#runtime_database_encryption_key_name}

---

##### `runtimeType`<sup>Optional</sup> <a name="runtimeType" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.runtimeType"></a>

```typescript
public readonly runtimeType: string;
```

- *Type:* string

Runtime type of the Apigee organization based on the Apigee subscription purchased. Default value: "CLOUD" Possible values: ["CLOUD", "HYBRID"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_organization#runtime_type GoogleApigeeOrganization#runtime_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleApigeeOrganizationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeouts">GoogleApigeeOrganizationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_organization#timeouts GoogleApigeeOrganization#timeouts}

---

### GoogleApigeeOrganizationProperties <a name="GoogleApigeeOrganizationProperties" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationProperties.Initializer"></a>

```typescript
import { googleApigeeOrganization } from '@cdktf/provider-google-beta'

const googleApigeeOrganizationProperties: googleApigeeOrganization.GoogleApigeeOrganizationProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationProperties.property.property">property</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesProperty">GoogleApigeeOrganizationPropertiesProperty</a>[]</code> | property block. |

---

##### `property`<sup>Optional</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationProperties.property.property"></a>

```typescript
public readonly property: IResolvable | GoogleApigeeOrganizationPropertiesProperty[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesProperty">GoogleApigeeOrganizationPropertiesProperty</a>[]

property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_organization#property GoogleApigeeOrganization#property}

---

### GoogleApigeeOrganizationPropertiesProperty <a name="GoogleApigeeOrganizationPropertiesProperty" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesProperty.Initializer"></a>

```typescript
import { googleApigeeOrganization } from '@cdktf/provider-google-beta'

const googleApigeeOrganizationPropertiesProperty: googleApigeeOrganization.GoogleApigeeOrganizationPropertiesProperty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesProperty.property.name">name</a></code> | <code>string</code> | Name of the property. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesProperty.property.value">value</a></code> | <code>string</code> | Value of the property. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesProperty.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_organization#name GoogleApigeeOrganization#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesProperty.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value of the property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_organization#value GoogleApigeeOrganization#value}

---

### GoogleApigeeOrganizationTimeouts <a name="GoogleApigeeOrganizationTimeouts" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeouts.Initializer"></a>

```typescript
import { googleApigeeOrganization } from '@cdktf/provider-google-beta'

const googleApigeeOrganizationTimeouts: googleApigeeOrganization.GoogleApigeeOrganizationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_organization#create GoogleApigeeOrganization#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_organization#delete GoogleApigeeOrganization#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_organization#update GoogleApigeeOrganization#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_organization#create GoogleApigeeOrganization#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_organization#delete GoogleApigeeOrganization#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_organization#update GoogleApigeeOrganization#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeOrganizationPropertiesOutputReference <a name="GoogleApigeeOrganizationPropertiesOutputReference" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.Initializer"></a>

```typescript
import { googleApigeeOrganization } from '@cdktf/provider-google-beta'

new googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.putProperty">putProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.resetProperty">resetProperty</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProperty` <a name="putProperty" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.putProperty"></a>

```typescript
public putProperty(value: IResolvable | GoogleApigeeOrganizationPropertiesProperty[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.putProperty.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesProperty">GoogleApigeeOrganizationPropertiesProperty</a>[]

---

##### `resetProperty` <a name="resetProperty" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.resetProperty"></a>

```typescript
public resetProperty(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.property.property">property</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList">GoogleApigeeOrganizationPropertiesPropertyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.property.propertyInput">propertyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesProperty">GoogleApigeeOrganizationPropertiesProperty</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationProperties">GoogleApigeeOrganizationProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.property.property"></a>

```typescript
public readonly property: GoogleApigeeOrganizationPropertiesPropertyList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList">GoogleApigeeOrganizationPropertiesPropertyList</a>

---

##### `propertyInput`<sup>Optional</sup> <a name="propertyInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.property.propertyInput"></a>

```typescript
public readonly propertyInput: IResolvable | GoogleApigeeOrganizationPropertiesProperty[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesProperty">GoogleApigeeOrganizationPropertiesProperty</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleApigeeOrganizationProperties;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationProperties">GoogleApigeeOrganizationProperties</a>

---


### GoogleApigeeOrganizationPropertiesPropertyList <a name="GoogleApigeeOrganizationPropertiesPropertyList" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.Initializer"></a>

```typescript
import { googleApigeeOrganization } from '@cdktf/provider-google-beta'

new googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.get"></a>

```typescript
public get(index: number): GoogleApigeeOrganizationPropertiesPropertyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesProperty">GoogleApigeeOrganizationPropertiesProperty</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApigeeOrganizationPropertiesProperty[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesProperty">GoogleApigeeOrganizationPropertiesProperty</a>[]

---


### GoogleApigeeOrganizationPropertiesPropertyOutputReference <a name="GoogleApigeeOrganizationPropertiesPropertyOutputReference" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.Initializer"></a>

```typescript
import { googleApigeeOrganization } from '@cdktf/provider-google-beta'

new googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesProperty">GoogleApigeeOrganizationPropertiesProperty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApigeeOrganizationPropertiesProperty;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesProperty">GoogleApigeeOrganizationPropertiesProperty</a>

---


### GoogleApigeeOrganizationTimeoutsOutputReference <a name="GoogleApigeeOrganizationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleApigeeOrganization } from '@cdktf/provider-google-beta'

new googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeouts">GoogleApigeeOrganizationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApigeeOrganizationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeouts">GoogleApigeeOrganizationTimeouts</a>

---



