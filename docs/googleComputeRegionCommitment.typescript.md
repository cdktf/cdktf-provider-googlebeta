# `googleComputeRegionCommitment` Submodule <a name="`googleComputeRegionCommitment` Submodule" id="@cdktf/provider-google-beta.googleComputeRegionCommitment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionCommitment <a name="GoogleComputeRegionCommitment" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_commitment google_compute_region_commitment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer"></a>

```typescript
import { googleComputeRegionCommitment } from '@cdktf/provider-google-beta'

new googleComputeRegionCommitment.GoogleComputeRegionCommitment(scope: Construct, id: string, config: GoogleComputeRegionCommitmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig">GoogleComputeRegionCommitmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig">GoogleComputeRegionCommitmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.putLicenseResource">putLicenseResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.putResources">putResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetAutoRenew">resetAutoRenew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetCategory">resetCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetExistingReservations">resetExistingReservations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetLicenseResource">resetLicenseResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLicenseResource` <a name="putLicenseResource" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.putLicenseResource"></a>

```typescript
public putLicenseResource(value: GoogleComputeRegionCommitmentLicenseResource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.putLicenseResource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource">GoogleComputeRegionCommitmentLicenseResource</a>

---

##### `putResources` <a name="putResources" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.putResources"></a>

```typescript
public putResources(value: IResolvable | GoogleComputeRegionCommitmentResources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.putResources.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources">GoogleComputeRegionCommitmentResources</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeRegionCommitmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts">GoogleComputeRegionCommitmentTimeouts</a>

---

##### `resetAutoRenew` <a name="resetAutoRenew" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetAutoRenew"></a>

```typescript
public resetAutoRenew(): void
```

##### `resetCategory` <a name="resetCategory" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetCategory"></a>

```typescript
public resetCategory(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExistingReservations` <a name="resetExistingReservations" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetExistingReservations"></a>

```typescript
public resetExistingReservations(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLicenseResource` <a name="resetLicenseResource" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetLicenseResource"></a>

```typescript
public resetLicenseResource(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetResources"></a>

```typescript
public resetResources(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeRegionCommitment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.isConstruct"></a>

```typescript
import { googleComputeRegionCommitment } from '@cdktf/provider-google-beta'

googleComputeRegionCommitment.GoogleComputeRegionCommitment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.isTerraformElement"></a>

```typescript
import { googleComputeRegionCommitment } from '@cdktf/provider-google-beta'

googleComputeRegionCommitment.GoogleComputeRegionCommitment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.isTerraformResource"></a>

```typescript
import { googleComputeRegionCommitment } from '@cdktf/provider-google-beta'

googleComputeRegionCommitment.GoogleComputeRegionCommitment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.generateConfigForImport"></a>

```typescript
import { googleComputeRegionCommitment } from '@cdktf/provider-google-beta'

googleComputeRegionCommitment.GoogleComputeRegionCommitment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleComputeRegionCommitment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeRegionCommitment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeRegionCommitment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_commitment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRegionCommitment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.commitmentId">commitmentId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.endTimestamp">endTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.licenseResource">licenseResource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference">GoogleComputeRegionCommitmentLicenseResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList">GoogleComputeRegionCommitmentResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.startTimestamp">startTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.statusMessage">statusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference">GoogleComputeRegionCommitmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.autoRenewInput">autoRenewInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.categoryInput">categoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.existingReservationsInput">existingReservationsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.licenseResourceInput">licenseResourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource">GoogleComputeRegionCommitmentLicenseResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.planInput">planInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.resourcesInput">resourcesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources">GoogleComputeRegionCommitmentResources</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts">GoogleComputeRegionCommitmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.autoRenew">autoRenew</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.existingReservations">existingReservations</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.plan">plan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `commitmentId`<sup>Required</sup> <a name="commitmentId" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.commitmentId"></a>

```typescript
public readonly commitmentId: number;
```

- *Type:* number

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `endTimestamp`<sup>Required</sup> <a name="endTimestamp" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.endTimestamp"></a>

```typescript
public readonly endTimestamp: string;
```

- *Type:* string

---

##### `licenseResource`<sup>Required</sup> <a name="licenseResource" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.licenseResource"></a>

```typescript
public readonly licenseResource: GoogleComputeRegionCommitmentLicenseResourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference">GoogleComputeRegionCommitmentLicenseResourceOutputReference</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.resources"></a>

```typescript
public readonly resources: GoogleComputeRegionCommitmentResourcesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList">GoogleComputeRegionCommitmentResourcesList</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `startTimestamp`<sup>Required</sup> <a name="startTimestamp" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.startTimestamp"></a>

```typescript
public readonly startTimestamp: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.statusMessage"></a>

```typescript
public readonly statusMessage: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeRegionCommitmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference">GoogleComputeRegionCommitmentTimeoutsOutputReference</a>

---

##### `autoRenewInput`<sup>Optional</sup> <a name="autoRenewInput" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.autoRenewInput"></a>

```typescript
public readonly autoRenewInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.categoryInput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `existingReservationsInput`<sup>Optional</sup> <a name="existingReservationsInput" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.existingReservationsInput"></a>

```typescript
public readonly existingReservationsInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `licenseResourceInput`<sup>Optional</sup> <a name="licenseResourceInput" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.licenseResourceInput"></a>

```typescript
public readonly licenseResourceInput: GoogleComputeRegionCommitmentLicenseResource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource">GoogleComputeRegionCommitmentLicenseResource</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `planInput`<sup>Optional</sup> <a name="planInput" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.planInput"></a>

```typescript
public readonly planInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: IResolvable | GoogleComputeRegionCommitmentResources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources">GoogleComputeRegionCommitmentResources</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeRegionCommitmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts">GoogleComputeRegionCommitmentTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `autoRenew`<sup>Required</sup> <a name="autoRenew" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.autoRenew"></a>

```typescript
public readonly autoRenew: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `existingReservations`<sup>Required</sup> <a name="existingReservations" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.existingReservations"></a>

```typescript
public readonly existingReservations: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.plan"></a>

```typescript
public readonly plan: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionCommitmentConfig <a name="GoogleComputeRegionCommitmentConfig" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.Initializer"></a>

```typescript
import { googleComputeRegionCommitment } from '@cdktf/provider-google-beta'

const googleComputeRegionCommitmentConfig: googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.plan">plan</a></code> | <code>string</code> | The plan for this commitment, which determines duration and discount rate. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.autoRenew">autoRenew</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether to enable automatic renewal for the commitment. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.category">category</a></code> | <code>string</code> | The category of the commitment. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.existingReservations">existingReservations</a></code> | <code>string</code> | Specifies the already existing reservations to attach to the Commitment. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_commitment#id GoogleComputeRegionCommitment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.licenseResource">licenseResource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource">GoogleComputeRegionCommitmentLicenseResource</a></code> | license_resource block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_commitment#project GoogleComputeRegionCommitment#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.region">region</a></code> | <code>string</code> | URL of the region where this commitment may be used. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.resources">resources</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources">GoogleComputeRegionCommitmentResources</a>[]</code> | resources block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts">GoogleComputeRegionCommitmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.type">type</a></code> | <code>string</code> | The type of commitment, which affects the discount rate and the eligible resources. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource.

The name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_commitment#name GoogleComputeRegionCommitment#name}

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.plan"></a>

```typescript
public readonly plan: string;
```

- *Type:* string

The plan for this commitment, which determines duration and discount rate.

The currently supported plans are TWELVE_MONTH (1 year), and THIRTY_SIX_MONTH (3 years). Possible values: ["TWELVE_MONTH", "THIRTY_SIX_MONTH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_commitment#plan GoogleComputeRegionCommitment#plan}

---

##### `autoRenew`<sup>Optional</sup> <a name="autoRenew" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.autoRenew"></a>

```typescript
public readonly autoRenew: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether to enable automatic renewal for the commitment.

The default value is false if not specified.
If the field is set to true, the commitment will be automatically renewed for either
one or three years according to the terms of the existing commitment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_commitment#auto_renew GoogleComputeRegionCommitment#auto_renew}

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

The category of the commitment.

Category MACHINE specifies commitments composed of
machine resources such as VCPU or MEMORY, listed in resources. Category LICENSE
specifies commitments composed of software licenses, listed in licenseResources.
Note that only MACHINE commitments should have a Type specified. Possible values: ["LICENSE", "MACHINE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_commitment#category GoogleComputeRegionCommitment#category}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_commitment#description GoogleComputeRegionCommitment#description}

---

##### `existingReservations`<sup>Optional</sup> <a name="existingReservations" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.existingReservations"></a>

```typescript
public readonly existingReservations: string;
```

- *Type:* string

Specifies the already existing reservations to attach to the Commitment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_commitment#existing_reservations GoogleComputeRegionCommitment#existing_reservations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_commitment#id GoogleComputeRegionCommitment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `licenseResource`<sup>Optional</sup> <a name="licenseResource" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.licenseResource"></a>

```typescript
public readonly licenseResource: GoogleComputeRegionCommitmentLicenseResource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource">GoogleComputeRegionCommitmentLicenseResource</a>

license_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_commitment#license_resource GoogleComputeRegionCommitment#license_resource}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_commitment#project GoogleComputeRegionCommitment#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

URL of the region where this commitment may be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_commitment#region GoogleComputeRegionCommitment#region}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.resources"></a>

```typescript
public readonly resources: IResolvable | GoogleComputeRegionCommitmentResources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources">GoogleComputeRegionCommitmentResources</a>[]

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_commitment#resources GoogleComputeRegionCommitment#resources}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeRegionCommitmentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts">GoogleComputeRegionCommitmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_commitment#timeouts GoogleComputeRegionCommitment#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of commitment, which affects the discount rate and the eligible resources.

The type could be one of the following value: 'MEMORY_OPTIMIZED', 'ACCELERATOR_OPTIMIZED',
'GENERAL_PURPOSE_N1', 'GENERAL_PURPOSE_N2', 'GENERAL_PURPOSE_N2D', 'GENERAL_PURPOSE_E2',
'GENERAL_PURPOSE_T2D', 'GENERAL_PURPOSE_C3', 'COMPUTE_OPTIMIZED_C2', 'COMPUTE_OPTIMIZED_C2D' and
'GRAPHICS_OPTIMIZED_G2'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_commitment#type GoogleComputeRegionCommitment#type}

---

### GoogleComputeRegionCommitmentLicenseResource <a name="GoogleComputeRegionCommitmentLicenseResource" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource.Initializer"></a>

```typescript
import { googleComputeRegionCommitment } from '@cdktf/provider-google-beta'

const googleComputeRegionCommitmentLicenseResource: googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource.property.license">license</a></code> | <code>string</code> | Any applicable license URI. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource.property.amount">amount</a></code> | <code>string</code> | The number of licenses purchased. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource.property.coresPerLicense">coresPerLicense</a></code> | <code>string</code> | Specifies the core range of the instance for which this license applies. |

---

##### `license`<sup>Required</sup> <a name="license" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string

Any applicable license URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_commitment#license GoogleComputeRegionCommitment#license}

---

##### `amount`<sup>Optional</sup> <a name="amount" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource.property.amount"></a>

```typescript
public readonly amount: string;
```

- *Type:* string

The number of licenses purchased.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_commitment#amount GoogleComputeRegionCommitment#amount}

---

##### `coresPerLicense`<sup>Optional</sup> <a name="coresPerLicense" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource.property.coresPerLicense"></a>

```typescript
public readonly coresPerLicense: string;
```

- *Type:* string

Specifies the core range of the instance for which this license applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_commitment#cores_per_license GoogleComputeRegionCommitment#cores_per_license}

---

### GoogleComputeRegionCommitmentResources <a name="GoogleComputeRegionCommitmentResources" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources.Initializer"></a>

```typescript
import { googleComputeRegionCommitment } from '@cdktf/provider-google-beta'

const googleComputeRegionCommitmentResources: googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources.property.acceleratorType">acceleratorType</a></code> | <code>string</code> | Name of the accelerator type resource. Applicable only when the type is ACCELERATOR. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources.property.amount">amount</a></code> | <code>string</code> | The amount of the resource purchased (in a type-dependent unit, such as bytes). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources.property.type">type</a></code> | <code>string</code> | Type of resource for which this commitment applies. Possible values are VCPU, MEMORY, LOCAL_SSD, and ACCELERATOR. |

---

##### `acceleratorType`<sup>Optional</sup> <a name="acceleratorType" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources.property.acceleratorType"></a>

```typescript
public readonly acceleratorType: string;
```

- *Type:* string

Name of the accelerator type resource. Applicable only when the type is ACCELERATOR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_commitment#accelerator_type GoogleComputeRegionCommitment#accelerator_type}

---

##### `amount`<sup>Optional</sup> <a name="amount" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources.property.amount"></a>

```typescript
public readonly amount: string;
```

- *Type:* string

The amount of the resource purchased (in a type-dependent unit, such as bytes).

For vCPUs, this can just be an integer. For memory,
this must be provided in MB. Memory must be a multiple of 256 MB,
with up to 6.5GB of memory per every vCPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_commitment#amount GoogleComputeRegionCommitment#amount}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of resource for which this commitment applies. Possible values are VCPU, MEMORY, LOCAL_SSD, and ACCELERATOR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_commitment#type GoogleComputeRegionCommitment#type}

---

### GoogleComputeRegionCommitmentTimeouts <a name="GoogleComputeRegionCommitmentTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts.Initializer"></a>

```typescript
import { googleComputeRegionCommitment } from '@cdktf/provider-google-beta'

const googleComputeRegionCommitmentTimeouts: googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_commitment#create GoogleComputeRegionCommitment#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_commitment#delete GoogleComputeRegionCommitment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_commitment#create GoogleComputeRegionCommitment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_region_commitment#delete GoogleComputeRegionCommitment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionCommitmentLicenseResourceOutputReference <a name="GoogleComputeRegionCommitmentLicenseResourceOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionCommitment } from '@cdktf/provider-google-beta'

new googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.resetAmount">resetAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.resetCoresPerLicense">resetCoresPerLicense</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAmount` <a name="resetAmount" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.resetAmount"></a>

```typescript
public resetAmount(): void
```

##### `resetCoresPerLicense` <a name="resetCoresPerLicense" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.resetCoresPerLicense"></a>

```typescript
public resetCoresPerLicense(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.amountInput">amountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.coresPerLicenseInput">coresPerLicenseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.licenseInput">licenseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.amount">amount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.coresPerLicense">coresPerLicense</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.license">license</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource">GoogleComputeRegionCommitmentLicenseResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `amountInput`<sup>Optional</sup> <a name="amountInput" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.amountInput"></a>

```typescript
public readonly amountInput: string;
```

- *Type:* string

---

##### `coresPerLicenseInput`<sup>Optional</sup> <a name="coresPerLicenseInput" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.coresPerLicenseInput"></a>

```typescript
public readonly coresPerLicenseInput: string;
```

- *Type:* string

---

##### `licenseInput`<sup>Optional</sup> <a name="licenseInput" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.licenseInput"></a>

```typescript
public readonly licenseInput: string;
```

- *Type:* string

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.amount"></a>

```typescript
public readonly amount: string;
```

- *Type:* string

---

##### `coresPerLicense`<sup>Required</sup> <a name="coresPerLicense" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.coresPerLicense"></a>

```typescript
public readonly coresPerLicense: string;
```

- *Type:* string

---

##### `license`<sup>Required</sup> <a name="license" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionCommitmentLicenseResource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource">GoogleComputeRegionCommitmentLicenseResource</a>

---


### GoogleComputeRegionCommitmentResourcesList <a name="GoogleComputeRegionCommitmentResourcesList" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.Initializer"></a>

```typescript
import { googleComputeRegionCommitment } from '@cdktf/provider-google-beta'

new googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.get"></a>

```typescript
public get(index: number): GoogleComputeRegionCommitmentResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources">GoogleComputeRegionCommitmentResources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRegionCommitmentResources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources">GoogleComputeRegionCommitmentResources</a>[]

---


### GoogleComputeRegionCommitmentResourcesOutputReference <a name="GoogleComputeRegionCommitmentResourcesOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionCommitment } from '@cdktf/provider-google-beta'

new googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.resetAcceleratorType">resetAcceleratorType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.resetAmount">resetAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAcceleratorType` <a name="resetAcceleratorType" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.resetAcceleratorType"></a>

```typescript
public resetAcceleratorType(): void
```

##### `resetAmount` <a name="resetAmount" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.resetAmount"></a>

```typescript
public resetAmount(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.acceleratorTypeInput">acceleratorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.amountInput">amountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.acceleratorType">acceleratorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.amount">amount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources">GoogleComputeRegionCommitmentResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acceleratorTypeInput`<sup>Optional</sup> <a name="acceleratorTypeInput" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.acceleratorTypeInput"></a>

```typescript
public readonly acceleratorTypeInput: string;
```

- *Type:* string

---

##### `amountInput`<sup>Optional</sup> <a name="amountInput" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.amountInput"></a>

```typescript
public readonly amountInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `acceleratorType`<sup>Required</sup> <a name="acceleratorType" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.acceleratorType"></a>

```typescript
public readonly acceleratorType: string;
```

- *Type:* string

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.amount"></a>

```typescript
public readonly amount: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRegionCommitmentResources;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources">GoogleComputeRegionCommitmentResources</a>

---


### GoogleComputeRegionCommitmentTimeoutsOutputReference <a name="GoogleComputeRegionCommitmentTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionCommitment } from '@cdktf/provider-google-beta'

new googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts">GoogleComputeRegionCommitmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRegionCommitmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts">GoogleComputeRegionCommitmentTimeouts</a>

---



